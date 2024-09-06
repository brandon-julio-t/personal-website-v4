import { getSerpApiGoogleTrendIndonesiaMarketSentiment } from "@/lib/server/serpapi";
import LineChartForGoogleTrend from "../chart";
import { aggregateSerpApiGoogleTrendsResponseIntoChartData } from "./logics";

const GoogleTrendIndonesiaMarketSentiment = async () => {
  const data = await getSerpApiGoogleTrendIndonesiaMarketSentiment();

  const chartData = data
    ? aggregateSerpApiGoogleTrendsResponseIntoChartData({
        serpApiGoogleTrendsResponse: data,
      })
    : [];

  return (
    <LineChartForGoogleTrend
      title="Crypto Market Retail Sentiment"
      chartData={chartData}
    />
  );
};

export default GoogleTrendIndonesiaMarketSentiment;
