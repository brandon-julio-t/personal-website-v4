import { CRYPTO_ANALYST_REPORT_KEY } from "@/domains/crypto-analyst/constants";
import { analyzeTheStateOfCrypto } from "@/domains/crypto-analyst/logics";
import { getErrorMessage } from "@/lib/error";
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

  try {
    console.log("[analyzeTheStateOfCrypto] Generating new report");

    const report = await analyzeTheStateOfCrypto();

    console.log("[analyzeTheStateOfCrypto] Saving report to cache");

    await kv.set(CRYPTO_ANALYST_REPORT_KEY, report.text);

    console.log("[analyzeTheStateOfCrypto] Report saved to cache");
  } catch (error) {
    console.error(error);

    await reportErrorViaTelegram({
      errorMessage: `[app/api/crypto-vibe-report/route.ts | error]: ${getErrorMessage(error)}`,
    });

    throw error;
  }

  return Response.json({ success: true });
}
