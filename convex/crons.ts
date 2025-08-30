import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import { cronJobs } from "convex/server";
import { env } from "../env";
import { internal } from "./_generated/api";
import { internalAction } from "./_generated/server";

const crons = cronJobs();

crons.weekly(
  "Save google trend market sentiment",
  { dayOfWeek: "monday", hourUTC: 0, minuteUTC: 0 },
  internal.crons.generateGoogleTrendMarketSentiment,
);

export const generateGoogleTrendMarketSentiment = internalAction({
  args: {},
  handler: async (ctx) => {
    const SERPAPI_KEY = process.env.SERPAPI_KEY;
    if (!SERPAPI_KEY) {
      console.error("SERPAPI_KEY is not set");
      return;
    }

    const response = await fetch(
      `https://serpapi.com/search?${new URLSearchParams({
        api_key: SERPAPI_KEY,
        engine: "google_trends",
        q: "bitcoin,crypto",
      })}`,
    );

    const data = await response.json();

    await ctx.runMutation(internal.functions.updateAppData, {
      data: {
        googleTrendMarketSentiment: data,
      },
    });
  },
});

crons.daily(
  "Generate crypto vibe report",
  { hourUTC: 0, minuteUTC: 0 },
  internal.crons.generateCryptoVibeReport,
);

export const generateCryptoVibeReport = internalAction({
  args: {},
  handler: async (ctx) => {
    const openrouter = createOpenRouter({
      apiKey: env.OPENROUTER_API_KEY,
    });

    const model = openrouter(env.OPENROUTER_MODEL);

    const fetchRss = async (url: string) => {
      return await fetch(url)
        .then((res) => res.text())
        .then((text) => {
          console.log(`RSS (${url}):`, text);
          return text;
        })
        .catch((err) => {
          console.error(`RSS fetch error in "${url}"`, err);
          return [];
        });
    };

    const [
      cointelegraph,
      coindesk,
      bloombergMarkets,
      bloombergTechnology,
      bloombergCrypto,
    ] = await Promise.all([
      fetchRss("https://cointelegraph.com/editors_pick_rss"),
      fetchRss("https://www.coindesk.com/arc/outboundfeeds/rss"),
      fetchRss("https://feeds.bloomberg.com/markets/news.rss"),
      fetchRss("https://feeds.bloomberg.com/technology/news.rss"),
      fetchRss("https://feeds.bloomberg.com/crypto/news.rss"),
    ]);

    console.log(
      `Generating report using ${model.modelId} by ${model.provider}`,
    );

    console.log("Generating new report");

    const now = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const report = await generateText({
      model,

      prompt: `
# Introduction

You are an experienced crypto hedge fund manager tasked with delivering a comprehensive, data-driven report to institutional investors. Your objective is to analyze JSON-formatted data sourced from RSS feeds to provide a detailed assessment of the cryptocurrency market's current state. The report must include:

1. **Market Overview**: Summarize key trends, including price movements, market capitalization, and trading volumes for major cryptocurrencies (e.g., Bitcoin, Ethereum, and top altcoins).
2. **Sentiment Analysis**: Assess market sentiment using news tone, social media trends, and investor behavior derived from the provided data.
3. **Key Drivers**: Identify macroeconomic, regulatory, technological, or project-specific factors influencing market dynamics, supported by specific evidence.
4. **Risk Assessment**: Highlight potential risks, such as regulatory shifts, market volatility, or security vulnerabilities, with clear examples.
5. **Investment Opportunities**: Recommend actionable strategies or assets, grounded in data-driven insights from the analysis.
6. **Conclusion**: Offer a forward-looking perspective on the market's trajectory over the next 3-6 months, based on trends and drivers identified.

# Deliverable

Write a professional, concise, and analytical report in the style of a hedge fund manager addressing sophisticated institutional investors. Use a formal tone, prioritize clarity, and support all findings with specific data points, trends, or metrics from the provided JSON data. Avoid speculative or unsupported claims, and if data is insufficient or ambiguous, acknowledge limitations and suggest areas for further investigation. Structure the report with clear headings and subheadings for readability.

# Constraints

- IMPORTANT DISCLAIMER: This report is for informational purposes only and does not constitute financial advice. All investment decisions should be made after conducting thorough due diligence and consulting with qualified financial advisors. The reader assumes full responsibility for any investment decisions made based on this information.
- Avoid placeholder text, variables, or overly technical jargon unless necessary for clarity.
- Focus on actionable insights tailored to institutional investors.
- Use only the provided data from RSS feeds as the primary source for analysis.
- Cite specific articles, dates, or metrics from the RSS feeds to substantiate claims (e.g., "Cointelegraph, June 10, 2025, reported...").
- The author of the report is "${model.modelId}". Please prettify this model ID for better readability (e.g., "anthropic/claude-3-sonnet" should be written as "Claude 3 Sonnet").
- Current date and time: ${now}.

# Markdown Formatting Guidelines

Write the report in markdown with the following guidelines:

## Structure

- Use clear hierarchical headings (H1 for title, H2 for main sections, H3 for subsections)
- Include a table of contents with links to sections
- Use bullet points and numbered lists for better readability
- Include horizontal rules (---) to separate major sections

## Visual Elements

- Highlight key metrics and numbers using **bold** text
- Use blockquotes for important quotes or citations
- Use tables for comparing data points or metrics
- Add emphasis using *italics* for important terms
- Include a summary box at the beginning using blockquotes
- Use code blocks for any technical data or metrics

# Input Data

The input consists of RSS feed data from the following sources. Use these to extract relevant metrics, news, and trends for your analysis:

## Cointelegraph

Founded in 2013, Cointelegraph is the leading independent digital media resource covering a wide range of news on blockchain technology, digital assets, AI, NFT, iGaming, and emerging fintech trends. Each day our team delivers the most accurate and up-to-date news from both the decentralized and centralized worlds. Our editorial content is based on our passion to deliver unbiased news, in-depth analytics, comprehensive cryptocurrency price charts, insightful opinion pieces, as well as regular reports on the social transformation that digital currencies bring. We believe that the decentralized world will grow exponentially, becoming an integral part of our daily lives. We work every day to help educate our readers and raise awareness of the intricacies and advantages offered in today's digital revolution. With technology breakthroughs now occurring in fields such as AI, VR, nanotech, quantum computing, and an increasing number of businesses, entrepreneurs and consumers adopting blockchain technology in everyday life, we aim to inform, educate, and share valuable information with our readers.

<cointelegraph>${cointelegraph}</cointelegraph>

## Coin Desk

CoinDesk is an award-winning media outlet that covers the cryptocurrency industry. Its journalists abide by a strict set of editorial policies. CoinDesk has adopted a set of principles aimed at ensuring the integrity, editorial independence and freedom from bias of its publications. CoinDesk is part of the Bullish group, which owns and invests in digital asset businesses and digital assets. CoinDesk employees, including journalists, may receive Bullish group equity-based compensation. Bullish was incubated by technology investor Block.one.

<coindesk>${coindesk}</coindesk>

## Bloomberg Markets

Bloomberg Markets is a leading financial media platform delivering real-time business and markets news, data, and analysis through Bloomberg's global network. It provides comprehensive coverage of stocks, commodities, bonds, currencies, and economic trends, offering in-depth reporting, expert interviews, and market-moving insights. Available via Bloomberg Terminal, TV, radio, and digital platforms, it connects investors and decision-makers with critical information. Recent content includes market reactions to geopolitical tensions, oil price surges, and cryptocurrency movements, emphasizing its focus on actionable financial intelligence.

<bloombergMarkets>${bloombergMarkets}</bloombergMarkets>

## Bloomberg Technology

Bloomberg Technology is a premier media outlet focused on the global technology sector, offering breaking news, analysis, and video content on innovations, companies, and trends shaping the industry. Hosted daily, it covers AI, cybersecurity, cloud computing, and digital assets, featuring interviews with tech leaders and policymakers. Available on Bloomberg Terminal, TV, and digital platforms, it highlights structural shifts like crypto ETF growth and AI-driven reforms. Recent stories include Coinbase hacks, Microsoft's AI strategies, and Palantir's healthcare partnerships, reflecting its emphasis on tech's economic impact.

<bloombergTechnology>${bloombergTechnology}</bloombergTechnology>

## Bloomberg Crypto

Bloomberg Crypto is a specialized media segment covering the cryptocurrency and decentralized finance (DeFi) landscape, delivering news, data, and insights on digital assets, blockchain, and regulatory developments. Hosted by Sonali Basak and Tim Stenovec, it explores market trends, institutional adoption, and technological advancements. Accessible via Bloomberg Terminal, TV, and digital platforms, it offers tools like real-time pricing for top 50 crypto assets and proprietary indices. Recent coverage includes Circle's IPO, Trump's crypto policies, and stablecoin market growth, underscoring its focus on the evolving crypto ecosystem.

<bloombergCrypto>${bloombergCrypto}</bloombergCrypto>
        `.trim(),
    });

    console.log("Saving report to cache");

    const normalized = report.text.startsWith("```markdown")
      ? report.text.slice("```markdown".length, "```".length * -1).trim()
      : report.text;

    await ctx.runMutation(internal.functions.updateAppData, {
      data: {
        cryptoVibeReport: normalized,
      },
    });

    console.log("Report saved to cache");
  },
});

export default crons;
