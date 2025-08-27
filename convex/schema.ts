import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  app: defineTable({
    googleTrendMarketSentiment: v.optional(v.any()),
    cryptoVibeReport: v.optional(v.string()),
  }),
});
