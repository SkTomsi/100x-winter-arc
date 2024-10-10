"use client";

import React, { useEffect, useState } from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Habit } from "@/lib/types";
import { Card } from "@/components/ui/card";

export default function MyStreak() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const chartData = [
    {
      browser: "safari",
      visitors: 32,
      fill: "hsl(var(--primary-foreground))",
    },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--primary-foreground))",
    },
  } satisfies ChartConfig;

  useEffect(() => {
    const habits = localStorage.getItem("habits");
    if (habits) {
      setHabits(JSON.parse(habits));
    }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col mt-8 items-center justify-start px-4">
      <div className="w-full h-fit flex bg-primary px-7 rounded-[30px] justify-between items-center">
        <div className="text-primary-foreground">
          <p className="text-lg font-bold tracking-tight">
            You are almost there!
          </p>
          <p className="text-base font-normal tracking-tight">
            1/3 day goals completed
          </p>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-[150px]" // Changed from w-[200px] to w-[150px]
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={60 - 10}
            outerRadius={90 - 10}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted-foreground/40 last:fill-primary"
              polarRadius={[86 - 30, 74 - 30]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-primary-foreground text-2xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString() + "%"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </div>
      <div className="w-full h-full flex flex-col gap-y-5 my-4">
        {habits.map((habit, index) => (
          <Card
            key={index}
            className="w-full rounded-2xl border-card-foreground/10 shadow-none px-4 py-2 min-h-[88px]"
          >
            <div></div>
            <p className="text-lg font-bold">{habit.task}</p>
            <p>{habit.goal}</p>
            <p>{habit.dailyGoal}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
