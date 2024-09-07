import BanterBubblesTreemapChart, {
  BanterBubblesTreemapChartProps,
} from "./chart";
import { BanterBubblesDataResponse } from "./types";

const BanterBubblesTreemap = async () => {
  const data = await getBanterBubblesData();

  return (
    <div>
      <BanterBubblesTreemapChart
        title="Banter Bubbles Treemap"
        chartData={data}
      />
    </div>
  );
};

const getBanterBubblesData = async () => {
  const data = await fetch("https://data.banterbubbles.com/files/1.usd.json")
    .then((r) => r.json())
    .then((data) => data as BanterBubblesDataResponse);

  const filteredData = data
    // 1. Sort by rank
    .sort((a, b) => a.rank - b.rank)
    // 2. Filter out any that have a performance of 0 (stablecoin or the asset is sleeping today)
    .filter((item) => Math.abs(Number(item.performance.d)).toFixed(0) !== "0")
    // 3. Get the top 100
    .slice(0, 100);

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
