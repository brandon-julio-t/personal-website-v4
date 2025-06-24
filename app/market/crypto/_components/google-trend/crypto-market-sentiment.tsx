import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getSerpApiGoogleTrendIndonesiaMarketSentiment } from "@/lib/server/serpapi";
import { reportErrorViaTelegram } from "@/lib/telegram";
import LineChartForGoogleTrend from "./chart";
import { aggregateSerpApiGoogleTrendsResponseIntoChartData } from "./logics";

const GoogleTrendIndonesiaMarketSentiment = async () => {
  try {
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
  } catch (error) {
    console.error(error);

    await reportErrorViaTelegram({
      context: "GoogleTrendIndonesiaMarketSentiment",
      error,
    });

    return (
      <Alert variant="destructive">
        <AlertTitle>
          Failed to load Crypto Market Retail Sentiment data.
        </AlertTitle>
        <AlertDescription>Please try again later.</AlertDescription>
      </Alert>
    );
  }
};

export default GoogleTrendIndonesiaMarketSentiment;
