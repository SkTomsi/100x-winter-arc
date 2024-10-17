export interface Habit {
  id: string;
  name: string;
  streak: number | null;
  lastCompleted: string | null;
  createdAt: string | null;
  userId: string;
  description: string | null;
}

export interface CheckIn {
  id: string;
  checkInDate: string;
  habitId: string;
  userId: string;
}

export interface HabitWithCheckIns extends Habit {
  checkIns: CheckIn[];
}
