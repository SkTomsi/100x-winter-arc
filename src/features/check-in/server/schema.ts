import { z } from "zod";

export const CheckInSchema = z.object({
  habitId: z.string(),
});
