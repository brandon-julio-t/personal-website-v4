import { internalMutation, query } from "./_generated/server";
import schema from "./schema";

export const getAppData = query({
  args: {},
  handler: async (ctx) => {
    const app = await ctx.db.query("app").first();
    return app;
  },
});

export const updateAppData = internalMutation({
  args: {
    data: schema.tables.app.validator,
  },
  handler: async (ctx, args) => {
    const app = await ctx.db.query("app").first();
    if (!app) {
      await ctx.db.insert("app", args.data);
    } else {
      await ctx.db.patch(app._id, args.data);
    }
  },
});
