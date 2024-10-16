import { db } from "@/db";
import { Hono } from "hono";
import { HabitSchema } from "./schema";
import { zValidator } from "@hono/zod-validator";
import { habits } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { nanoid } from "nanoid";
export const HabitsRouter = new Hono()
  .post(
    "/create",
    clerkMiddleware(),
    zValidator("json", HabitSchema),
    async (c) => {
      const { name, description } = await c.req.json();

      const user = getAuth(c);

      console.log(user);

      if (!user) {
        return c.json({ success: false, error: "Unauthorized" });
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
        return c.json({ success: false, error: "Failed to create habit" });
      }
    }
  )
  .get("/", async (c) => {
    const habits = await db.query.habits.findMany();

    return c.json({ success: true, data: habits });
  });
