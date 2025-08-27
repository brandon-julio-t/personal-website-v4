"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import LineChartForGoogleTrend from "./chart";
import { aggregateSerpApiGoogleTrendsResponseIntoChartData } from "./logics";

const GoogleTrendIndonesiaMarketSentiment = () => {
  const appData = useQuery(api.functions.getAppData);

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
