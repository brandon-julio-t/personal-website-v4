import { analyzeTheStateOfCrypto } from "@/domains/crypto-analyst/logics";
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

  await analyzeTheStateOfCrypto();

  return Response.json({ success: true });
}
