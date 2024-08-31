import { useTheme } from "next-themes";
import { ComponentType, ReactNode, useEffect, useState } from "react";

const TradingViewWidget: ComponentType<{
  symbol: string;
  dateRange?: string;
}> = ({ symbol, dateRange }) => {
  const { resolvedTheme } = useTheme();
  const [child, setChild] = useState<ReactNode | null>(null);

  useEffect(
    function initOnClientToFixHydrationError() {
      if (resolvedTheme) {
        setChild(
          <iframe
            className="overflow-hidden rounded"
            key={resolvedTheme}
            src={`https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?${new URLSearchParams(
              {
                locale: "en",
                symbol,
                width: "100%",
                height: "100%",
                dateRange: dateRange || "12M",
                colorTheme: resolvedTheme || "light",
                isTransparent: "false",
                autosize: "true",
                largeChartUrl: "",
              },
            )}`}
            title="mini symbol-overview TradingView widget"
            lang="en"
            style={{
              boxSizing: "border-box",
              display: "block",
              height: "250px",
              width: "100%",
            }}
          />,
        );
      }
    },
    [dateRange, resolvedTheme, symbol],
  );

  return child;
};

export default TradingViewWidget;
