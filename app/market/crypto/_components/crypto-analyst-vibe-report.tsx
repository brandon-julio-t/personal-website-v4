"use client";

import { Markdown } from "@/components/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export const CryptoAnalystVibeReport = () => {
  const appData = useQuery(api.functions.getAppData);

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
