import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { preloadedQueryResult, preloadQuery } from "convex/nextjs";
import LineChartForGoogleTrend from "./chart";
import { aggregateSerpApiGoogleTrendsResponseIntoChartData } from "./logics";

const GoogleTrendIndonesiaMarketSentiment = async () => {
  const preloaded = await preloadQuery(api.functions.getAppData);
  const appData = preloadedQueryResult(preloaded);

  const data = appData?.googleTrendMarketSentiment;

  if (!data) {
    return <Skeleton className="h-96 w-full" />;
  }

  try {
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
