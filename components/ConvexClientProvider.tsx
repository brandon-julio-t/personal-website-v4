"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { MotionConfig } from "motion/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexProvider client={convex}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ConvexProvider>
  );
}
