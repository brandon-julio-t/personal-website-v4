import { env } from "@/env";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { kv } from "@vercel/kv";
import { generateText } from "ai";
import Parser from "rss-parser";
import { CRYPTO_ANALYST_REPORT_KEY } from "./constants";

export async function getTheStateOfCrypto(): Promise<string> {
  const existingReport = await kv.get<string>(CRYPTO_ANALYST_REPORT_KEY);
  return existingReport ?? "";
}

export async function analyzeTheStateOfCrypto() {
  const openrouter = createOpenRouter({
    apiKey: env.OPENROUTER_API_KEY,
  });

  const model = openrouter(env.OPENROUTER_MODEL);

  const rssParser = new Parser({
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });

  const fetchRss = async (url: string) => {
    return await rssParser
      .parseURL(url)
      .then((res) => {
        console.log(
          `[analyzeTheStateOfCrypto] RSS (${url}):`,
          JSON.stringify(res),
        );
        return res;
      })
      .catch((err) => {
        console.error(`RSS parseURL error in "${url}"`);
        console.error(err);
        return [];
      });
  };

  const [
    cointelegraph,
    coindesk,
    bloombergMarkets,
    bloombergTechnology,
    bloombergCrypto,
    akademicryptoid,
  ] = await Promise.all([
    fetchRss("https://cointelegraph.com/editors_pick_rss"),
    fetchRss("https://www.coindesk.com/arc/outboundfeeds/rss"),
    fetchRss("https://feeds.bloomberg.com/markets/news.rss"),
    fetchRss("https://feeds.bloomberg.com/technology/news.rss"),
    fetchRss("https://feeds.bloomberg.com/crypto/news.rss"),
    fetchRss("https://rss.app/feeds/uRXqRh79ys06WRxt.xml"), // https://x.com/akademicryptoid
  ]);

  return await generateText({
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

- Focus on actionable insights tailored to institutional investors.
- Use only the provided JSON data from RSS feeds as the primary source for analysis.
- Cite specific articles, dates, or metrics from the RSS feeds to substantiate claims (e.g., "Cointelegraph, June 10, 2025, reported...").
- Keep the report between 1,000–1,500 words unless otherwise specified.
- Avoid placeholder text, variables, or overly technical jargon unless necessary for clarity.
- The author of the report is yourself. Bad example: "[Your Name], ...". Good example: "DeepSeek R1/Grok 3/ChatGPT 4.1/etc., ...".
- Current date and time: ${new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}.

# Input Data

The input consists of JSON-formatted RSS feed data from the following sources. Use these to extract relevant metrics, news, and trends for your analysis:

## Cointelegraph

Founded in 2013, Cointelegraph is the leading independent digital media resource covering a wide range of news on blockchain technology, digital assets, AI, NFT, iGaming, and emerging fintech trends. Each day our team delivers the most accurate and up-to-date news from both the decentralized and centralized worlds. Our editorial content is based on our passion to deliver unbiased news, in-depth analytics, comprehensive cryptocurrency price charts, insightful opinion pieces, as well as regular reports on the social transformation that digital currencies bring. We believe that the decentralized world will grow exponentially, becoming an integral part of our daily lives. We work every day to help educate our readers and raise awareness of the intricacies and advantages offered in today’s digital revolution. With technology breakthroughs now occurring in fields such as AI, VR, nanotech, quantum computing, and an increasing number of businesses, entrepreneurs and consumers adopting blockchain technology in everyday life, we aim to inform, educate, and share valuable information with our readers.

<cointelegraph>${JSON.stringify(cointelegraph)}</cointelegraph>

## Coin Desk

CoinDesk is an award-winning media outlet that covers the cryptocurrency industry. Its journalists abide by a strict set of editorial policies. CoinDesk has adopted a set of principles aimed at ensuring the integrity, editorial independence and freedom from bias of its publications. CoinDesk is part of the Bullish group, which owns and invests in digital asset businesses and digital assets. CoinDesk employees, including journalists, may receive Bullish group equity-based compensation. Bullish was incubated by technology investor Block.one.

<coindesk>${JSON.stringify(coindesk)}</coindesk>

## Bloomberg Markets

Bloomberg Markets is a leading financial media platform delivering real-time business and markets news, data, and analysis through Bloomberg’s global network. It provides comprehensive coverage of stocks, commodities, bonds, currencies, and economic trends, offering in-depth reporting, expert interviews, and market-moving insights. Available via Bloomberg Terminal, TV, radio, and digital platforms, it connects investors and decision-makers with critical information. Recent content includes market reactions to geopolitical tensions, oil price surges, and cryptocurrency movements, emphasizing its focus on actionable financial intelligence.

<bloombergMarkets>${JSON.stringify(bloombergMarkets)}</bloombergMarkets>

## Bloomberg Technology

Bloomberg Technology is a premier media outlet focused on the global technology sector, offering breaking news, analysis, and video content on innovations, companies, and trends shaping the industry. Hosted daily, it covers AI, cybersecurity, cloud computing, and digital assets, featuring interviews with tech leaders and policymakers. Available on Bloomberg Terminal, TV, and digital platforms, it highlights structural shifts like crypto ETF growth and AI-driven reforms. Recent stories include Coinbase hacks, Microsoft’s AI strategies, and Palantir’s healthcare partnerships, reflecting its emphasis on tech’s economic impact.

<bloombergTechnology>${JSON.stringify(bloombergTechnology)}</bloombergTechnology>

## Bloomberg Crypto

Bloomberg Crypto is a specialized media segment covering the cryptocurrency and decentralized finance (DeFi) landscape, delivering news, data, and insights on digital assets, blockchain, and regulatory developments. Hosted by Sonali Basak and Tim Stenovec, it explores market trends, institutional adoption, and technological advancements. Accessible via Bloomberg Terminal, TV, and digital platforms, it offers tools like real-time pricing for top 50 crypto assets and proprietary indices. Recent coverage includes Circle’s IPO, Trump’s crypto policies, and stablecoin market growth, underscoring its focus on the evolving crypto ecosystem.

<bloombergCrypto>${JSON.stringify(bloombergCrypto)}</bloombergCrypto>

## Akademi Crypto

Akademi Crypto, operating the X account @akademicryptoid, is a platform focused on cryptocurrency education and community engagement in Indonesia. Founded by Timothy Ronald, it offers comprehensive guides on crypto trading, Bitcoin, and blockchain technology, aiming to empower investors through accessible education. The platform provides subscription-based access to over 1,000 educational modules, premium crypto signals, and data from sources like Glassnode and Bloomberg. It emphasizes community support, offline events, and skill-building in Web3 programming. Recent posts on X cover Bitcoin price movements, institutional adoption, and fintech developments, reflecting its focus on timely crypto market insights.

<akademicryptoid>${JSON.stringify(akademicryptoid)}</akademicryptoid>
    `.trim(),
  });
}
