import { Markdown } from "@/components/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { getTheStateOfCrypto } from "@/domains/crypto-analyst/logics";
import { reportErrorViaTelegram } from "@/lib/telegram";

export const CryptoAnalystVibeReport = async () => {
  let result = "";
  try {
    result = await getTheStateOfCrypto();
  } catch (error) {
    console.error(error);

    await reportErrorViaTelegram({
      context: "CryptoAnalystVibeReport",
      error,
    });

    result = "Error fetching crypto analyst vibe report";
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <Markdown content={result} />
      </CardContent>
    </Card>
  );
};
