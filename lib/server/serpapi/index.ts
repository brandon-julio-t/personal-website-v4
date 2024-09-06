import { kv } from "@vercel/kv";
import { GET_SERP_API_GOOGLE_TREND_INDONESIA_MARKET_SENTIMENT } from "./constants";
import { SerpApiGoogleTrendsResponse } from "./types";

export const getSerpApiGoogleTrendIndonesiaMarketSentiment = async () => {
  return await kv.get<SerpApiGoogleTrendsResponse>(
    GET_SERP_API_GOOGLE_TREND_INDONESIA_MARKET_SENTIMENT,
  );
};
