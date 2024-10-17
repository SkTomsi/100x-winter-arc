import { IMAGES } from "@/assets/images";
import { Card } from "@/components/ui/card";
import { CheckInButton } from "@/features/check-in/components/check-in-button";
import { Habit } from "@/interface/habits";
import { Timer } from "lucide-react";
import Image from "next/image";

export const HabitCard = ({ habit }: { habit: Habit }) => {
  const isDisabled =
    new Date(habit.lastCompleted!).toLocaleDateString() ===
      new Date().toLocaleDateString() ?? true;

  console.log(isDisabled, "DATE MATCHES");

  return (
    <Card className="w-full rounded-2xl border-card-foreground/5 shadow-none p-3 h-fit  tracking-tighter flex justify-between items-center">
      <div className="flex flex-col gap-2 items-center rounded-lg p-3 border border-card-foreground/5">
        <Timer strokeWidth={2} className="dark:text-white text-zinc-600" />
        <p className="text-xs font-semibold w-full dark:text-white text-zinc-600 ">
          25 min
        </p>
      </div>
      <div className="flex-1 w-full h-full px-4 items-start justify-center flex flex-col gap-2">
        <p className="text-md font-semibold">{habit.name}</p>
        <div className="flex gap-3">
          <div className="w-fit px-2 py-1 flex gap-x-2 items-center bg-[#ff6f00]/20 h-full justify-center rounded-[calc(1rem-0.5rem)]">
            <Image
              src={IMAGES.streakLogo}
              alt="fire emoji"
              className="size-4 object-contain"
            />
            <p className="font-bold text-sm text-orange-500">{habit.streak}</p>
          </div>
          {habit.streak === 0 && (
            <p className="text-sm font-medium text-[hsl(321,100%,50%)] px-2 py-1 bg-[hsl(321,100%,50%)]/20 rounded-sm">
              New
            </p>
          )}
        </div>
      </div>
      <CheckInButton habitId={habit.id} disabled={isDisabled} />
    </Card>
  );
};
