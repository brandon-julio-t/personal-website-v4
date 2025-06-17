import { SerpApiGoogleTrendsResponse } from "@/lib/server/serpapi/types";

export function aggregateSerpApiGoogleTrendsResponseIntoChartData({
  serpApiGoogleTrendsResponse,
}: {
  serpApiGoogleTrendsResponse: SerpApiGoogleTrendsResponse;
}) {
  const data =
    serpApiGoogleTrendsResponse?.interest_over_time?.timeline_data ?? [];

  const queries = Array.from(
    new Set(data.flatMap((datum) => datum.values.map((value) => value.query))),
  );

  const chartData = data.map((datum) => {
    const chartDatum: Record<string, string | number> = {
      date: datum.date,
    };

    queries.forEach((query) => {
      chartDatum[query] = 0;
    });

    return chartDatum;
  });

  chartData.forEach((chartDatum) => {
    const filteredData = data.filter((datum) => datum.date === chartDatum.date);

    filteredData.forEach((filteredDatum) => {
      filteredDatum.values.forEach((value) => {
        const prevValue = chartDatum[value.query] || 0;
        if (typeof prevValue === "number") {
          chartDatum[value.query] = prevValue + value.extracted_value;
        }
      });
    });
  });

  return chartData;
}
