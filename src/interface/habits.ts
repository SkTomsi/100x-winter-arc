export interface Habit {
  id: string;
  name: string;
  streak: number | null;
  lastCompleted: string | null;
  createdAt: string | null;
  userId: string;
  description: string | null;
}
