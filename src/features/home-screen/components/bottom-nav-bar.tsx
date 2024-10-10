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
import { useEffect, useState } from "react";
import { Habit } from "@/lib/types";

export default function BottomNavBar() {
  const [form, setForm] = useState<Habit>({
    task: "",
    goal: "",
    dailyGoal: "",
  });

  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const habits = localStorage.getItem("habits");
    if (habits) {
      setHabits(JSON.parse(habits));
    }
  }, []);

  const handleSubmit = (data: Habit) => {
    localStorage.setItem("habits", JSON.stringify([...habits, data]));
  };

  console.log(habits);

  return (
    <div className="max-w-[576px] mx-auto w-full fixed bottom-0 py-4 h-20 md:px-40 px-10">
      <div className="bg-[hsl(0,0%,14%)] rounded-full h-full">
        <div className="flex w-full h-full items-center justify-between p-2 gap-2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="rounded-full h-full w-1/2 py-4">
                <PlusIcon className="w-4 h-4 mr-2" />
                New Habit
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-[611px] mx-auto rounded-tl-3xl rounded-tr-3xl">
              <DrawerHeader className="text-left">
                <DrawerTitle className="text-xl font-bold">
                  Create a New Habit
                </DrawerTitle>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="task">Task</Label>
                  <Input
                    id="task"
                    placeholder="Enter your task"
                    className="rounded-full px-4 py-6"
                    value={form.task}
                    onChange={(e) => setForm({ ...form, task: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Goal</Label>
                  <Input
                    id="goal"
                    placeholder="Enter your goal"
                    className="rounded-full px-4 py-6"
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dailyGoal">Daily Goal</Label>
                  <Input
                    id="dailyGoal"
                    placeholder="Enter your daily goal"
                    className="rounded-full px-4 py-6"
                    value={form.dailyGoal}
                    onChange={(e) =>
                      setForm({ ...form, dailyGoal: e.target.value })
                    }
                  />
                </div>
              </div>
              <DrawerFooter className="">
                <Button
                  className="w-full rounded-full h-full py-4"
                  onClick={() => handleSubmit(form)}
                >
                  Create Habit
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

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
