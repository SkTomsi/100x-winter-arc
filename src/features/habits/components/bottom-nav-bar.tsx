"use client";

import { Button } from "@/components/ui/button";
import { ChartNoAxesColumn, User } from "lucide-react";
import CreateHabitSheet from "./create-habit-sheet";
export default function BottomNavBar() {
  return (
    <div className="max-w-[576px] mx-auto w-full fixed bottom-0 py-4 h-[13vh] md:px-40 px-10">
      <div className="bg-[hsl(0,0%,14%)] rounded-full h-full">
        <div className="flex w-full h-full items-center justify-between p-2 gap-2">
          <CreateHabitSheet />
          <Button
            className="rounded-full min-h-full w-1/2 flex items-center justify-center text-white"
            variant={"ghost"}
            size={"icon"}
          >
            <ChartNoAxesColumn className="w-6 h-6" />
          </Button>
          <Button
            className="rounded-full min-h-full  w-1/2 flex items-center justify-center text-white"
            variant={"ghost"}
            size={"icon"}
          >
            <User className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
