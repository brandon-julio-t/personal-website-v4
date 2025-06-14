import { Markdown } from "@/components/markdown";
import { analyzeTheStateOfCrypto } from "@/domains/crypto-analyst/logics";

export const CryptoAnalystVibeReport = async () => {
  const result = await analyzeTheStateOfCrypto();

  return (
    <article className="text-left text-sm whitespace-pre-wrap">
      <Markdown content={result} />
    </article>
  );
};
