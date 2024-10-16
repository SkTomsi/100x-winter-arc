"use client";
import { useHabits } from "@/features/habits/api/useHabits";
import { HabitCard } from "./habit-card";

export const HabitList = () => {
  const { data, isLoading } = useHabits();

  return (
    <div className="w-full h-full flex flex-col gap-y-5 my-4 mb-24">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((habit, index) => <HabitCard key={index} habit={habit} />)
      )}
    </div>
  );
};
