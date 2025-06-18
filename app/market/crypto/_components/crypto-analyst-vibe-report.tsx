import { Markdown } from "@/components/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { getTheStateOfCrypto } from "@/domains/crypto-analyst/logics";

export const CryptoAnalystVibeReport = async () => {
  const result = await getTheStateOfCrypto();

  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <Markdown content={result} />
      </CardContent>
    </Card>
  );
};
