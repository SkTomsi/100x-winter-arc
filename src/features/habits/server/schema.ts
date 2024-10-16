import { z } from "zod";

export const HabitSchema = z.object({
  name: z.string().min(1, "Habit name is required"),
  description: z.string().optional(),
});
