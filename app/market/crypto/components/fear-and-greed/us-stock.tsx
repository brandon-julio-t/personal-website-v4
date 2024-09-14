import { GaugeChart } from "@/components/ui/chart/gauge";
import { LineChart } from "@/components/ui/chart/line";
import { cn } from "@/lib/utils";
import { ComponentProps, ComponentType } from "react";
import { USFngData } from "../../types";

const UsStockFearAndGreed: ComponentType<ComponentProps<"section">> = async ({
  className,
  ...props
}) => {
  const response = await fetch(
    "https://production.dataviz.cnn.io/index/fearandgreed/graphdata",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://www.cnn.com/",
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data as USFngData);

  const gaugeScore = Number(response?.fear_and_greed?.score ?? 0);

  const normalizedLabel = normalizeToSnakeCase(
    response?.fear_and_greed?.rating ?? "",
  );

  return (
    <section {...props} className={cn("flex flex-col gap-4", className)}>
      <GaugeChart
        title="US Market Fear & Greed"
        gaugeScore={gaugeScore}
        gaugeLabel={normalizedLabel}
        gaugeLabelClassName={cn(
          normalizedLabel === "extreme_fear" && "fill-red-500",
          normalizedLabel === "fear" && "fill-red-500/90",
          normalizedLabel === "neutral" && "fill-muted-foreground",
          normalizedLabel === "greed" && "fill-green-500/90",
          normalizedLabel === "extreme_greed" && "fill-green-500",
        )}
      />

      <LineChart
        title="US Market Fear & Greed Trendline"
        chartData={response.fear_and_greed_historical.data.map((item) => ({
          date: new Date(item.x).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          value: Math.round(item.y),
        }))}
        footer={
          <>
            Data by
            <a
              href="https://edition.cnn.com/markets/fear-and-greed"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNN
            </a>
          </>
        }
      />
    </section>
  );
};

const normalizeToSnakeCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
};

export default UsStockFearAndGreed;
