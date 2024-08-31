"use client";

import { ComponentType } from "react";
import FngGaugeChart from "./fng-gauge-chart";

import { CryptoFngData, USFngData } from "../types";
import TradingViewCryptoHeatmap from "./trading-view-crypto-heatmap";
import TradingViewEconomicCalendar from "./trading-view-economic-calendar";
import TradingViewWidget from "./trading-view-widget";

const MarketCryptoPageView: ComponentType<{
  usFngData: USFngData;
  cryptoFngData: CryptoFngData;
}> = ({ usFngData, cryptoFngData }) => {
  return (
    <main className="container flex flex-col gap-4">
      <section className="my-8 grid grid-cols-12 gap-4">
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

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TradingViewWidget symbol="SPREADEX:SPX" />
        <TradingViewWidget symbol="CAPITALCOM:DXY" />

        <TradingViewWidget symbol="BITSTAMP:BTCUSD" />
        <TradingViewWidget symbol="CRYPTOCAP:TOTAL3" />
        <TradingViewWidget symbol="BITSTAMP:ETHUSD" />
        <TradingViewWidget symbol="BINANCE:SOLUSD" />
      </section>

      <section>
        <TradingViewCryptoHeatmap className="h-[700px]" />
      </section>
    </main>
  );
};

export default MarketCryptoPageView;
