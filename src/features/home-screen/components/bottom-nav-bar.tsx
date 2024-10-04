"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { ChartNoAxesColumn, User } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
// Add these imports
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BottomNavBar() {
  return (
    <div className="fixed left-0 right-0 bottom-4 px-5 h-[9vh]">
      <div className="bg-black/95 rounded-full h-full">
        <div className="flex w-full h-full items-center justify-between p-2 gap-2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="rounded-full h-full w-3/4">
                <PlusIcon className="w-4 h-4 mr-2" />
                New Habit
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-fit">
              <DrawerHeader className="text-left">
                <DrawerTitle className="text-xl font-bold">
                  Create a New Habit
                </DrawerTitle>
              </DrawerHeader>
              <div className="p-4 space-y-10">
                <div className="space-y-2">
                  <Label htmlFor="task">Task</Label>
                  <Input
                    id="task"
                    placeholder="Enter your task"
                    className="rounded-full p-4"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Goal</Label>
                  <Input
                    id="goal"
                    placeholder="Enter your goal"
                    className="rounded-full p-4"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dailyGoal">Daily Goal</Label>
                  <Input
                    id="dailyGoal"
                    placeholder="Enter your daily goal"
                    className="rounded-full p-4"
                  />
                </div>
              </div>
              <DrawerFooter className="h-14">
                <Button className="w-full rounded-full h-full">
                  Create Habit
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Button
            className="rounded-full h-full w-1/2 flex items-center justify-center"
            variant={"ghost"}
            size={"icon"}
          >
            <ChartNoAxesColumn className="w-6 h-6" />
          </Button>
          <Button
            className="rounded-full h-full w-1/2 flex items-center justify-center"
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
