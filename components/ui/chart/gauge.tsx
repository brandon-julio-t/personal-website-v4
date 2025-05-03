"use client";

import { ComponentType } from "react";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartConfig = {
  score: {
    label: "Score",
    color: "var(--chart-1)",
  },
  fillScore: {
    label: "Filler Score",
    color: "var(--accent)",
  },
} satisfies ChartConfig;

export const GaugeChart: ComponentType<{
  title: string;
  gaugeScore: number;
  gaugeLabel: string;
  gaugeLabelClassName?: string;
}> = ({ title, gaugeScore, gaugeLabel, gaugeLabelClassName }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full"
        >
          <RadialBarChart
            data={[{ score: gaugeScore, fillScore: 100 - gaugeScore }]}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {Math.round(gaugeScore).toLocaleString()}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 12}
                          className={cn(
                            "fill-muted-foreground text-lg font-bold",
                            gaugeLabelClassName,
                          )}
                        >
                          {toTitleCase(gaugeLabel)}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="fillScore"
              fill="var(--color-fillScore)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
              animationDuration={0}
            />
            <RadialBar
              dataKey="score"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-score)"
              className="stroke-transparent stroke-2"
              animationDuration={0}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
  );
};
