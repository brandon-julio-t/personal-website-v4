import { getErrorMessage } from "@/lib/error";
import { GET_SERP_API_GOOGLE_TREND_INDONESIA_MARKET_SENTIMENT } from "@/lib/server/serpapi/constants";
import { reportErrorViaTelegram } from "@/lib/telegram";
import { kv } from "@vercel/kv";
import type { NextRequest } from "next/server";

const CRON_SECRET = process.env.CRON_SECRET;
const SERPAPI_KEY = process.env.SERPAPI_KEY;

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  if (!SERPAPI_KEY) {
    return new Response("Invalid state 1", {
      status: 500,
    });
  }

  try {
    const response = await fetch(
      `https://serpapi.com/search?${new URLSearchParams({
        api_key: SERPAPI_KEY,
        engine: "google_trends",
        q: "bitcoin,crypto",
      })}`,
    );
    const data = await response.json();

    await kv.set(GET_SERP_API_GOOGLE_TREND_INDONESIA_MARKET_SENTIMENT, data);
  } catch (error) {
    console.error(error);

    await reportErrorViaTelegram({
      errorMessage: `[app/api/setup-data/route.ts | error]: ${getErrorMessage(error)}`,
    });

    throw error;
  }

  return Response.json({ success: true });
}
