import { GaugeChart } from "@/components/ui/chart/gauge";
import { LineChart } from "@/components/ui/chart/line";
import { cn } from "@/lib/utils";
import { ComponentProps, ComponentType } from "react";
import { CryptoFearAndGreedHistory, CryptoFngData } from "../../types";

const CryptoFearAndGreed: ComponentType<ComponentProps<"section">> = async ({
  className,
  ...props
}) => {
  const [todayDataResponse, historyDataResponse] = await Promise.all([
    fetch("https://api.alternative.me/fng")
      .then((res) => res.json())
      .then((data) => data as CryptoFngData),

    fetch("https://alternative.me/api/crypto/fear-and-greed-index/history", {
      body: '{"days":365}',
      cache: "default",
      credentials: "include",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Content-Type": "application/json;charset=utf-8",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15",
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrer: "https://alternative.me/crypto/fear-and-greed-index/",
      referrerPolicy: "unsafe-url",
    })
      .then((res) => res.json())
      .then((data) => data as CryptoFearAndGreedHistory),
  ]);

  const cryptoFngData = todayDataResponse.data.at(0);

  const gaugeScore = Number(cryptoFngData?.value ?? 0);

  const normalizedLabel = normalizeToSnakeCase(
    cryptoFngData?.value_classification ?? "",
  );

  return (
    <section {...props} className={cn("flex flex-col gap-4", className)}>
      <GaugeChart
        title="Crypto Market Fear & Greed"
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
        title="Crypto Market Fear & Greed Trendline"
        chartData={historyDataResponse.data.labels.map((label, index) => ({
          date: label,
          value: historyDataResponse.data.datasets.at(0)?.data.at(index) ?? 0,
        }))}
        footer={
          <>
            Data by
            <a
              href="https://alternative.me/crypto/fear-and-greed-index/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alternative.me
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

export default CryptoFearAndGreed;
