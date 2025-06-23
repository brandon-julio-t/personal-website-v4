import { analyzeTheStateOfCrypto } from "@/domains/crypto-analyst/logics";

async function main() {
  await analyzeTheStateOfCrypto();
}

main().catch(console.error).finally(process.exit);
