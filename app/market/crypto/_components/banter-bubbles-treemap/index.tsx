import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { reportErrorViaTelegram } from "@/lib/telegram";
import BanterBubblesTreemapChart, {
  BanterBubblesTreemapChartProps,
} from "./chart";
import { BanterBubblesDataResponse } from "./types";

const BanterBubblesTreemap = async () => {
  try {
    const data = await getBanterBubblesData();

    return (
      <div>
        <BanterBubblesTreemapChart
          title="Banter Bubbles Treemap"
          chartData={data}
        />
      </div>
    );
  } catch (error) {
    console.error(error);

    await reportErrorViaTelegram({
      context: "BanterBubblesTreemap",
      error,
    });

    return (
      <Alert variant="destructive">
        <AlertTitle>Failed to load Banter Bubbles Treemap data.</AlertTitle>
        <AlertDescription>Please try again later.</AlertDescription>
      </Alert>
    );
  }
};

const getBanterBubblesData = async () => {
  const data = await fetch("https://data.banterbubbles.com/files/1.usd.json")
    .then((r) => r.json())
    .then((data) => data as BanterBubblesDataResponse);

  const filteredData = data
    // Sort by rank
    .sort((a, b) => a.rank - b.rank)
    // Filter out any that have a performance of 0 (the asset is sleeping today)
    .filter((item) => Math.abs(Number(item.performance.d)).toFixed(0) !== "0")
    // Filter out stablecoins
    .filter((item) => !item.categories?.includes("stablecoins"))
    // Get the top 100
    .slice(0, 100)
    // Best performing assets first
    .sort((a, b) => b.performance.d - a.performance.d);

  const chartData = filteredData.map((item) => {
    return {
      name: item.symbol.toLocaleUpperCase(),
      size: 1,
      performance: Number(Number(item.performance.d).toFixed(2)),
      image: item.image,
    } satisfies BanterBubblesTreemapChartProps["chartData"][number];
  });

  return chartData;
};

export default BanterBubblesTreemap;
