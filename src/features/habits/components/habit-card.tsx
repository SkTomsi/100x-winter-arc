import { IMAGES } from "@/assets/images";
import { Card } from "@/components/ui/card";
import { Habit } from "@/interface/habits";
import { Timer } from "lucide-react";
import Image from "next/image";

export const HabitCard = ({ habit }: { habit: Habit }) => {
  return (
    <Card className="w-full rounded-2xl border-card-foreground/5 shadow-none p-2 h-fit  tracking-tighter flex justify-between items-center">
      <div className="flex flex-col gap-2 items-center bg-white/30 rounded-lg p-3 border border-card-foreground/5">
        <Timer color="#282827" strokeWidth={2} />
        <p className="text-xs font-semibold w-full">25 min</p>
      </div>
      <div className="flex-1 w-full h-full px-4 items-start justify-center">
        <p className="text-md font-semibold">{habit.name}</p>
        <p className="text-sm text-muted-foreground">new</p>
      </div>
      <div className="p-5 flex gap-x-2 items-center bg-[#e6e9d7]/50 h-full justify-center rounded-[calc(1rem-0.5rem)]">
        <Image
          src={IMAGES.streakLogo}
          alt="fire emoji"
          className="size-6 object-contain"
        />
        <p className="font-bold text-sm text-orange-500">{habit.streak}</p>
      </div>
    </Card>
  );
};
