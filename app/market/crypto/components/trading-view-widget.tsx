import { ComponentProps, ComponentType } from "react";

const TradingViewWidget: ComponentType<
  ComponentProps<"div"> & {
    symbol: string;
    dateRange?: string;
    colorTheme?: string;
  }
> = ({ symbol, dateRange, colorTheme, className, ...props }) => {
  return (
    <iframe
      className="overflow-hidden rounded"
      src={`https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?${new URLSearchParams(
        {
          locale: "en",
          symbol,
          width: "100%",
          height: "100%",
          dateRange: dateRange || "12M",
          colorTheme: colorTheme || "dark",
          isTransparent: "false",
          autosize: "true",
          largeChartUrl: "",
          utm_source: "www.tradingview.com",
          utm_medium: "widget_new",
          utm_campaign: "mini-symbol-overview",
          "page-uri": "www.tradingview.com/widget-wizard/en/light/mini-chart/",
        },
      ).toString()}`}
      title="mini symbol-overview TradingView widget"
      lang="en"
      style={{
        boxSizing: "border-box",
        display: "block",
        height: "250px",
        width: "100%",
      }}
    />
  );
};

export default TradingViewWidget;
