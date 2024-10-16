import { HabitList } from "@/features/habits/components/habit-list";
// import { PerformanceCard } from "@/features/habits/components/performance-card";

export default function MyStreak() {
  return (
    <div className="w-full h-auto flex flex-col mt-8 items-center justify-start px-4">
      {/* <PerformanceCard /> */}
      <HabitList />
    </div>
  );
}
