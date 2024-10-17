"use client";
import { useHabits } from "@/features/habits/api/use-habits";
import { HabitCard } from "./habit-card";

export const HabitList = () => {
  const { data: result, isLoading } = useHabits();

  return (
    <div className="w-full h-full flex flex-col gap-y-5 my-4 mb-24">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        result?.map((r, index) => <HabitCard key={index} habit={r.habit}  />)
      )}
    </div>
  );
};
