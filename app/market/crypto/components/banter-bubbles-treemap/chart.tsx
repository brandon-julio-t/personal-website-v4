"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { TypographyLarge } from "@/components/ui/typography";
import { ComponentType, memo, useMemo } from "react";
import { Treemap } from "recharts";

export const description = "A multiple line chart";

const chartColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export type BanterBubblesTreemapChartProps = {
  chartData: Record<string, string | number>[];
  title: string;
};

const BanterBubblesTreemapChart: ComponentType<
  BanterBubblesTreemapChartProps
> = ({ chartData, title }) => {
  const hasData = chartData.length > 0;

  const { dataPoints, normalizedDataPoints } = useMemo(() => {
    const dataPoints = hasData
      ? Object.keys(chartData[0]).filter((key) => key !== "date")
      : [];
    const normalizedDataPoints = dataPoints.map((key) =>
      key.toLowerCase().replaceAll(" ", "-"),
    );

    return { dataPoints, normalizedDataPoints };
  }, [chartData, hasData]);

  const chartConfig = useMemo(() => {
    const config: ChartConfig = {};

    dataPoints.map((key, index) => {
      const normalizedKey = normalizedDataPoints[index];
      config[normalizedKey] = {
        label: key,
        color: chartColors[index % chartColors.length],
      };
    });

    return config;
  }, [dataPoints, normalizedDataPoints]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {!hasData && (
          <TypographyLarge className="text-center">No data</TypographyLarge>
        )}

        {hasData && (
          <ChartContainer config={chartConfig}>
            <Treemap
              data={chartData}
              dataKey="size"
              content={<CustomizedContent colors={chartColors} />}
              isAnimationActive={false}
            />
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Top 100 Crypto by Banter Bubbles Ranking excluding sleeping asset
              (0% performance)
            </div>

            <div className="flex items-center gap-1 leading-none text-muted-foreground">
              Data by
              <a
                href="https://banterbubbles.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Banter Bubbles
              </a>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const CustomizedContent: ComponentType<
  Partial<{
    root: {
      children: Array<{
        name: string;
        size: number;
      }>;
    };
    depth: number;
    x: number;
    y: number;
    width: number;
    height: number;
    index: number;
    colors: string[];
    rank: number;
    name: string;
    performance: number;
  }>
> = memo(function CustomizedContentMemo({
  depth = 0,
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  index = 0,
  performance = 0,
  name = "",
}) {
  const performanceColor = useMemo(() => {
    if (performance > 0) {
      return "hsl(var(--success))";
    } else if (performance < 0) {
      return "hsl(var(--destructive))";
    } else {
      return "hsl(var(--chart-1))";
    }
  }, [performance]);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: performanceColor,
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 && (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - 3}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + 13}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {performance}%
          </text>
        </>
      )}
    </g>
  );
});

export default BanterBubblesTreemapChart;
