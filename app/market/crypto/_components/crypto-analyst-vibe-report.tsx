import { Markdown } from "@/components/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { preloadedQueryResult, preloadQuery } from "convex/nextjs";

export const CryptoAnalystVibeReport = async () => {
  const preloaded = await preloadQuery(api.functions.getAppData);
  const appData = preloadedQueryResult(preloaded);

  const result = appData?.cryptoVibeReport ?? "";

  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        {result ? (
          <Markdown content={result} />
        ) : (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <Skeleton key={i} className="h-(--text-sm) w-full" />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
