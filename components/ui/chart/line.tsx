"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TypographyLarge } from "@/components/ui/typography";
import { ReactNode, useMemo } from "react";

export const description = "A multiple line chart";

const chartColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export const LineChart = ({
  chartData,
  title,
  footer,
  legend = false,
}: {
  chartData: Record<string, string | number>[];
  title: string;
  footer?: ReactNode;
  legend?: boolean;
}) => {
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
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={() => ""}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              {legend && <ChartLegend content={<ChartLegendContent />} />}

              {dataPoints.map((dataPoint, index) => (
                <Area
                  key={dataPoint}
                  dataKey={dataPoint}
                  type="natural"
                  fill={`var(--color-${normalizedDataPoints[index]})`}
                  fillOpacity={0.4}
                  stroke={`var(--color-${normalizedDataPoints[index]})`}
                  stackId="a"
                />
              ))}
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
      {footer && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-1 leading-none text-muted-foreground">
                {footer}
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
