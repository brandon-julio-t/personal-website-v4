import { Markdown } from "@/components/markdown";
import { getTheStateOfCrypto } from "@/domains/crypto-analyst/logics";

export const CryptoAnalystVibeReport = async () => {
  const result = await getTheStateOfCrypto();

  return (
    <article className="text-left text-sm whitespace-pre-wrap">
      <Markdown content={result} />
    </article>
  );
};
