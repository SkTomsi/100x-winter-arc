import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { CheckInSchema } from "./schema";
import { HTTPException } from "hono/http-exception";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { checkIns, habits } from "@/db/schema";
import { nanoid } from "nanoid";

export const CheckInRouter = new Hono().post(
  "/",
  clerkMiddleware(),
  zValidator("json", CheckInSchema),
  async (c) => {
    const { habitId } = await c.req.json();

    const user = getAuth(c);

    if (!user) {
      throw new HTTPException(401, {
        res: c.json({ success: false, error: "Unauthorized" }),
      });
    }

    try {
      await db.insert(checkIns).values({
        id: nanoid(),
        habitId,
        userId: user.userId!,
      });

      const habit = await db
        .select({ streak: habits.streak, lastCompleted: habits.lastCompleted })
        .from(habits)
        .where(eq(habits.id, habitId));

      if (!habit) {
        throw new HTTPException(404, {
          res: c.json({ success: false, error: "Habit not found" }),
        });
      }

      await db
        .update(habits)
        .set({ streak: habit[0].streak + 1, lastCompleted: new Date() })
        .where(eq(habits.id, habitId));

      return c.json({
        success: true,
        message: `Successfully checked in for habit ${habitId}`,
      });
    } catch (error) {
      console.log(error);
      throw new HTTPException(500, {
        res: c.json({ success: false, error: "Failed to check in" }),
      });
    }
  }
);
