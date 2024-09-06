"use client";

import { ComponentType } from "react";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
  fillScore: {
    label: "Filler Score",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

const FngGaugeChart: ComponentType<{
  title: string;
  fngScore: number;
  fngLabel: string;
}> = ({ title, fngScore, fngLabel }) => {
  const normalizedLabel = normalizeToSnakeCase(fngLabel);

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
            data={[{ score: fngScore, fillScore: 100 - fngScore }]}
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
                          {Math.round(fngScore).toLocaleString()}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 12}
                          className={cn(
                            "fill-muted-foreground text-lg font-bold",
                            normalizedLabel === "extreme_fear" &&
                              "fill-red-500",
                            normalizedLabel === "fear" && "fill-red-500",
                            normalizedLabel === "neutral" &&
                              "fill-muted-foreground",
                            normalizedLabel === "greed" && "fill-green-500",
                            normalizedLabel === "extreme_greed" &&
                              "fill-green-500",
                          )}
                        >
                          {toTitleCase(fngLabel)}
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

const normalizeToSnakeCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
};

const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
  );
};

export default FngGaugeChart;
