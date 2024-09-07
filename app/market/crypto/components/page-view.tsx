import { ComponentType } from "react";
import FngGaugeChart from "./fng-gauge-chart";

import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import { TypographyH4 } from "@/components/ui/typography";
import { HouseIcon } from "lucide-react";
import Link from "next/link";
import { CryptoFngData, USFngData } from "../types";
import BanterBubblesTreemap from "./banter-bubbles-treemap";
import GoogleTrendCryptoMarketSentiment from "./google-trend/crypto-market-sentiment";
import TradingViewEconomicCalendar from "./trading-view/economic-calendar";
import TradingViewMiniSymbol from "./trading-view/mini-symbol";

const MarketCryptoPageView: ComponentType<{
  usFngData: USFngData;
  cryptoFngData: CryptoFngData;
}> = ({ usFngData, cryptoFngData }) => {
  return (
    <main className="container flex flex-col gap-4 py-4">
      <section>
        <BanterBubblesTreemap />
      </section>
      <header className="flex flex-row items-center justify-between">
        <Link href="/">
          <TypographyH4 className="flex flex-row place-items-center gap-2">
            <HouseIcon className="size-5" />
            <span>Mr. Market</span>
          </TypographyH4>
        </Link>

        <DarkModeToggle />
      </header>

      <section className="grid grid-cols-12 gap-4">
        <section className="col-span-12 flex flex-col gap-4 md:col-span-3">
          <FngGaugeChart
            title="US Market Fear & Greed"
            fngScore={usFngData.score}
            fngLabel={usFngData.rating}
          />

          <FngGaugeChart
            title="Crypto Market Fear & Greed"
            fngScore={Number(cryptoFngData.data.at(0)?.value ?? 0)}
            fngLabel={cryptoFngData.data.at(0)?.value_classification ?? ""}
          />
        </section>

        <TradingViewEconomicCalendar className="col-span-12 h-[680px] md:col-span-9" />
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
        <GoogleTrendCryptoMarketSentiment />
      </section>
    </main>
  );
};

export default MarketCryptoPageView;
