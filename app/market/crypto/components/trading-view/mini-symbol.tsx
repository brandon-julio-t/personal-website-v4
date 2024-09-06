import { ComponentType } from "react";

const TradingViewMiniSymbol: ComponentType<{
  symbol: string;
  dateRange?: string;
}> = ({ symbol, dateRange }) => {
  const commonWidgetProps = {
    locale: "en",
    symbol,
    width: "100%",
    height: "100%",
    dateRange: dateRange || "12M",
    isTransparent: "false",
    autosize: "true",
    largeChartUrl: "",
  };

  return (
    <>
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
    </>
  );
};

export default TradingViewMiniSymbol;
