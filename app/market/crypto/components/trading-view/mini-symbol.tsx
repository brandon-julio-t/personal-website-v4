"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentType, useState } from "react";

/**
 * @docs https://www.tradingview.com/widget-docs/widgets/charts/mini-chart/
 */
const TradingViewMiniSymbol: ComponentType<{
  symbol: string;
  dateRange?: string;
}> = ({ symbol, dateRange: defaultDateRange }) => {
  const [dateRange, setDateRange] = useState(defaultDateRange || "12M");

  const commonWidgetProps = {
    locale: "en",
    symbol,
    width: "100%",
    height: "100%",
    dateRange,
    isTransparent: "false",
    autosize: "true",
    largeChartUrl: "",
  };

  return (
    <div className="flex flex-col gap-2">
      <Tabs
        defaultValue={dateRange}
        onValueChange={setDateRange}
        className="self-end"
      >
        <TabsList>
          <TabsTrigger value="1M">1M</TabsTrigger>
          <TabsTrigger value="3M">3M</TabsTrigger>
          <TabsTrigger value="12M">1Y</TabsTrigger>
          <TabsTrigger value="60M">5Y</TabsTrigger>
          <TabsTrigger value="ALL">All</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Light Mode */}
      <iframe
        className="block h-[250px] w-full overflow-hidden rounded dark:hidden"
        src={`https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?${new URLSearchParams(
          {
            ...commonWidgetProps,
            colorTheme: "light",
          },
        )}`}
        title="mini symbol-overview TradingView widget"
        lang="en"
      />
      {/* Dark Mode */}
      <iframe
        className="hidden h-[250px] w-full overflow-hidden rounded dark:block"
        src={`https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?${new URLSearchParams(
          {
            ...commonWidgetProps,
            colorTheme: "dark",
          },
        )}`}
        title="mini symbol-overview TradingView widget"
        lang="en"
      />
    </div>
  );
};

export default TradingViewMiniSymbol;
