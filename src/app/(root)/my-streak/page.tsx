"use client";

import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
export const description = "A radial chart with text";

export default function MyStreakPage() {
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
  return (
    <div className="w-full h-auto flex flex-col mt-8 items-center justify-start">
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
    </div>
  );
}
