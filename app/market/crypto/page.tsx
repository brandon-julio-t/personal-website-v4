import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { TypographyH4 } from "@/components/ui/typography";
import { HouseIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import BanterBubblesTreemap from "./_components/banter-bubbles-treemap";
import { CryptoAnalystVibeReport } from "./_components/crypto-analyst-vibe-report";
import CryptoFearAndGreed from "./_components/fear-and-greed/crypto";
import UsStockFearAndGreed from "./_components/fear-and-greed/us-stock";
import GoogleTrendCryptoMarketSentiment from "./_components/google-trend/crypto-market-sentiment";
import TradingViewEconomicCalendar from "./_components/trading-view/economic-calendar";
import TradingViewMiniSymbol from "./_components/trading-view/mini-symbol";

export const dynamic = "force-dynamic";

const MarketCryptoPage = async () => {
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

      <section>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Crypto Analyst Vibe Report</AccordionTrigger>

            <AccordionContent>
              <React.Suspense
                fallback={
                  <div className="flex flex-col gap-4">
                    <Skeleton className="h-(--text-sm) w-full" />
                    <Skeleton className="h-(--text-sm) w-full" />
                    <Skeleton className="h-(--text-sm) w-full" />
                  </div>
                }
              >
                <CryptoAnalystVibeReport />
              </React.Suspense>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <React.Suspense
          fallback={
            <>
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
            </>
          }
        >
          <CryptoFearAndGreed />
        </React.Suspense>
        <React.Suspense
          fallback={
            <>
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
            </>
          }
        >
          <UsStockFearAndGreed />
        </React.Suspense>
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
        <React.Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <BanterBubblesTreemap />
        </React.Suspense>
      </section>

      <section>
        <React.Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <GoogleTrendCryptoMarketSentiment />
        </React.Suspense>
      </section>
    </main>
  );
};

export default MarketCryptoPage;
