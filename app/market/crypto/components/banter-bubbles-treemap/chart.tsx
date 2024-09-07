"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TypographyLarge,
  TypographyMuted,
  TypographySmall,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentType } from "react";

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
          <section className="flex flex-row flex-wrap gap-1">
            {chartData.map((item) => (
              <Card
                key={item.name}
                className={cn(
                  "flex-1",
                  Number(item.performance) > 0 && "bg-success text-white",
                  Number(item.performance) < 0 && "bg-destructive text-white",
                  Number(item.performance) === 0 && "bg-muted text-black",
                )}
              >
                <div className="flex flex-col place-items-center gap-2 p-2">
                  <Image
                    src={item.image.toString()}
                    alt={item.name.toString()}
                    width={32}
                    height={32}
                    className="rounded-full bg-white/75"
                  />

                  <div className="flex flex-col gap-1">
                    <TypographySmall className="text-center text-inherit">
                      {item.name}
                    </TypographySmall>
                    <TypographyMuted className="text-center text-inherit">
                      {item.performance}%
                    </TypographyMuted>
                  </div>
                </div>
              </Card>
            ))}
          </section>
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

export default BanterBubblesTreemapChart;
