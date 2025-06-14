import { CRYPTO_ANALYST_REPORT_KEY } from "@/domains/crypto-analyst/constants";
import { analyzeTheStateOfCrypto } from "@/domains/crypto-analyst/logics";
import { kv } from "@vercel/kv";

async function main() {
  console.log("[analyzeTheStateOfCrypto] Generating new report");

  const report = await analyzeTheStateOfCrypto();

  console.log("[analyzeTheStateOfCrypto] Saving report to cache");

  await kv.set(CRYPTO_ANALYST_REPORT_KEY, report.text);

  console.log("[analyzeTheStateOfCrypto] Report saved to cache");
}

main().catch(console.error).finally(process.exit);
