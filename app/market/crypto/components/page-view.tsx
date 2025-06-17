import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { TypographyH4 } from "@/components/ui/typography";
import { HouseIcon } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";
import BanterBubblesTreemap from "./banter-bubbles-treemap";
import CryptoFearAndGreed from "./fear-and-greed/crypto";
import UsStockFearAndGreed from "./fear-and-greed/us-stock";
import GoogleTrendCryptoMarketSentiment from "./google-trend/crypto-market-sentiment";
import TradingViewEconomicCalendar from "./trading-view/economic-calendar";
import TradingViewMiniSymbol from "./trading-view/mini-symbol";

const MarketCryptoPageView: ComponentType = () => {
  return (
    <main className="container flex flex-col gap-6 py-6">
      <header className="flex flex-row items-center justify-between">
        <Link href="/">
          <TypographyH4 className="flex flex-row place-items-center gap-2">
            <HouseIcon className="size-5" />
            <span>Mr. Market</span>
          </TypographyH4>
        </Link>

        <DarkModeToggle />
      </header>

      {/* <section>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Crypto Analyst Vibe Report</AccordionTrigger>

            <AccordionContent>
              <Suspense
                fallback={
                  <div className="flex flex-col gap-4">
                    <Skeleton className="h-(--text-sm) w-full" />
                    <Skeleton className="h-(--text-sm) w-full" />
                    <Skeleton className="h-(--text-sm) w-full" />
                  </div>
                }
              >
                <CryptoAnalystVibeReport />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section> */}

      <Separator />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <CryptoFearAndGreed />
        <UsStockFearAndGreed />
      </section>

      <section>
        <TradingViewEconomicCalendar className="h-[680px]" />
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TradingViewMiniSymbol symbol="FRED:UNRATE" dateRange="ALL" />
        <TradingViewMiniSymbol symbol="SPREADEX:SPX" />
        <TradingViewMiniSymbol symbol="CAPITALCOM:DXY" />
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TradingViewMiniSymbol symbol="BITSTAMP:BTCUSD" />
        <TradingViewMiniSymbol symbol="CRYPTOCAP:TOTAL3" />
        <TradingViewMiniSymbol symbol="BITSTAMP:ETHUSD" />
        <TradingViewMiniSymbol symbol="BINANCE:SOLUSD" />
      </section>

      <section>
        <BanterBubblesTreemap />
      </section>

      <section>
        <GoogleTrendCryptoMarketSentiment />
      </section>
    </main>
  );
};

export default MarketCryptoPageView;
