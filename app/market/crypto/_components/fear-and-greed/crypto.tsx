import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GaugeChart } from "@/components/ui/chart/gauge";
import { LineChart } from "@/components/ui/chart/line";
import { reportErrorViaTelegram } from "@/lib/telegram";
import { cn } from "@/lib/utils";
import { ComponentProps, ComponentType } from "react";
import { CryptoFearAndGreedHistory, CryptoFngData } from "../../types";

/**
 * Fetches the current Crypto Fear & Greed index.
 * @returns {Promise<CryptoFngData | null>}
 * @example
 * // returns { data: [...] }
 * await fetchCryptoFngData();
 */
async function fetchCryptoFngData(): Promise<CryptoFngData | null> {
  const res = await fetch("https://api.alternative.me/fng");
  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch FNG data:", res.status, text);
    return null;
  }
  return (await res.json()) as CryptoFngData;
}

/**
 * Fetches the Crypto Fear & Greed index history.
 * @returns {Promise<CryptoFearAndGreedHistory | null>}
 * @example
 * // returns { data: { labels: [...], datasets: [...] } }
 * await fetchCryptoFngHistory();
 */
async function fetchCryptoFngHistory(): Promise<CryptoFearAndGreedHistory | null> {
  const res = await fetch(
    "https://alternative.me/api/crypto/fear-and-greed-index/history",
    {
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
    },
  );
  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch FNG history:", res.status, text);
    return null;
  }
  return (await res.json()) as CryptoFearAndGreedHistory;
}

const CryptoFearAndGreed: ComponentType<ComponentProps<"section">> = async ({
  className,
}) => {
  const [todayDataResponse, historyDataResponse] = await Promise.allSettled([
    fetchCryptoFngData(),
    fetchCryptoFngHistory(),
  ]);

  if (todayDataResponse.status === "rejected") {
    console.error("Failed to fetch today's FNG data");

    await reportErrorViaTelegram({
      context: "CryptoFearAndGreed",
      error: todayDataResponse.reason,
    });
  }

  if (historyDataResponse.status === "rejected") {
    console.error("Failed to fetch FNG history");

    await reportErrorViaTelegram({
      context: "CryptoFearAndGreed",
      error: historyDataResponse.reason,
    });
  }

  if (
    todayDataResponse.status === "rejected" ||
    historyDataResponse.status === "rejected"
  ) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Failed to load Crypto Fear & Greed data.</AlertTitle>
        <AlertDescription>Please try again later.</AlertDescription>
      </Alert>
    );
  }

  const cryptoFngData = todayDataResponse.value?.data.at(0);
  const gaugeScore = Number(cryptoFngData?.value ?? 0);
  const normalizedLabel = normalizeToSnakeCase(
    cryptoFngData?.value_classification ?? "",
  );

  return (
    <>
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
        chartData={
          historyDataResponse.value?.data.labels.map((label, index) => ({
            date: label,
            value:
              historyDataResponse.value?.data.datasets.at(0)?.data.at(index) ??
              0,
          })) ?? []
        }
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
    </>
  );
};

const normalizeToSnakeCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
};

export default CryptoFearAndGreed;
