import { ComponentType } from "react";

import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import { TypographyH4 } from "@/components/ui/typography";
import { HouseIcon } from "lucide-react";
import Link from "next/link";
import BanterBubblesTreemap from "./banter-bubbles-treemap";
import CryptoFearAndGreed from "./fear-and-greed/crypto";
import UsStockFearAndGreed from "./fear-and-greed/us-stock";
import GoogleTrendCryptoMarketSentiment from "./google-trend/crypto-market-sentiment";
import TradingViewEconomicCalendar from "./trading-view/economic-calendar";
import TradingViewMiniSymbol from "./trading-view/mini-symbol";

const MarketCryptoPageView: ComponentType = () => {
  return (
    <main className="container flex flex-col gap-4 py-4">
      <header className="flex flex-row items-center justify-between">
        <Link href="/">
          <TypographyH4 className="flex flex-row place-items-center gap-2">
            <HouseIcon className="size-5" />
            <span>Mr. Market</span>
          </TypographyH4>
        </Link>

        <DarkModeToggle />
      </header>

      <section className="flex flex-col gap-4 md:flex-row">
        <CryptoFearAndGreed className="w-full md:flex-row" />
        <UsStockFearAndGreed className="w-full md:flex-row" />
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
