import { db } from "@/db";
import { Hono } from "hono";
import { HabitSchema } from "./schema";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { nanoid } from "nanoid";
import { desc, eq } from "drizzle-orm";
import { checkIns, CheckInSelect, habits } from "@/db/schema";
import { HTTPException } from "hono/http-exception";
import { sql } from "drizzle-orm";

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
      const userHabits = await db
        .select({
          habit: {
            id: habits.id,
            name: habits.name,
            description: habits.description,
            streak: habits.streak,
            lastCompleted: habits.lastCompleted,
            createdAt: habits.createdAt,
            userId: habits.userId,
          },
          checkIns: sql<CheckInSelect[]>`
            CASE
              WHEN COUNT(${checkIns.id}) > 0 THEN
                json_agg(json_build_object('id', ${checkIns.id}, 'checkInDate', ${checkIns.checkInDate}))
              ELSE
                '[]'::json
            END
          `,
        })
        .from(habits)
        .leftJoin(checkIns, eq(habits.id, checkIns.habitId))
        .where(eq(habits.userId, user.userId!))
        .groupBy(habits.id)
        .orderBy(desc(habits.createdAt));

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
