import { db } from "@/db";
import { Hono } from "hono";
import { HabitSchema } from "./schema";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { nanoid } from "nanoid";
import { desc, eq } from "drizzle-orm";
import { habits } from "@/db/schema";
import { HTTPException } from "hono/http-exception";

export const HabitsRouter = new Hono()
  .post(
    "/create",
    clerkMiddleware(),
    zValidator("json", HabitSchema),
    async (c) => {
      const { name, description } = await c.req.json();

      const user = getAuth(c);

      if (!user) {
        throw new HTTPException(401, {
          res: c.json({ success: false, error: "Unauthorized" }),
        });
      }

      try {
        const habit = await db.insert(habits).values({
          name: name,
          description: description,
          id: nanoid(),
          userId: user.userId!,
        });

        console.log(habit);

        return c.json({ success: true, message: "Habit created successfully" });
      } catch (error) {
        console.log(error);
        throw new HTTPException(401, {
          res: c.json({ success: false, error: "Failed to create habit" }),
        });
      }
    }
  )
  .get("/", clerkMiddleware(), async (c) => {
    const user = getAuth(c);

    if (!user) {
      throw new HTTPException(401, {
        res: c.json({ success: false, error: "Unauthorized" }),
      });
    }

    try {
      const userHabits = await db.query.habits.findMany({
        where: eq(habits.userId, user.userId!),
        orderBy: desc(habits.createdAt),
      });

      if (userHabits.length === 0) {
        return c.json({ success: true, data: [] });
      }

      return c.json({ success: true, data: userHabits });
    } catch (error) {
      console.log(error);
      throw new HTTPException(500, {
        res: c.json({ success: false, error: "Failed to fetch habits" }),
      });
    }
  });
