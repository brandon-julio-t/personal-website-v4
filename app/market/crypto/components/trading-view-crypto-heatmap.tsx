import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import {
  ComponentProps,
  ComponentType,
  ReactNode,
  useEffect,
  useState,
} from "react";

const TradingViewCryptoHeatmap: ComponentType<ComponentProps<"iframe">> = ({
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const [child, setChild] = useState<ReactNode | null>(null);

  useEffect(
    function initOnClientToFixHydrationError() {
      const lightModeUrl = `https://www.tradingview-widget.com/embed-widget/crypto-coins-heatmap/?locale=en#%7B%22dataSource%22%3A%22Crypto%22%2C%22blockSize%22%3A%22market_cap_calc%22%2C%22blockColor%22%3A%22change%22%2C%22symbolUrl%22%3A%22%22%2C%22colorTheme%22%3A%22light%22%2C%22hasTopBar%22%3Atrue%2C%22isDataSetEnabled%22%3Atrue%2C%22isZoomEnabled%22%3Atrue%2C%22hasSymbolTooltip%22%3Atrue%2C%22isMonoSize%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22crypto-coins-heatmap%22%7D`;

      const darkModeUrl = `https://www.tradingview-widget.com/embed-widget/crypto-coins-heatmap/?locale=en#%7B%22dataSource%22%3A%22Crypto%22%2C%22blockSize%22%3A%22market_cap_calc%22%2C%22blockColor%22%3A%22change%22%2C%22symbolUrl%22%3A%22%22%2C%22colorTheme%22%3A%22dark%22%2C%22hasTopBar%22%3Atrue%2C%22isDataSetEnabled%22%3Atrue%2C%22isZoomEnabled%22%3Atrue%2C%22hasSymbolTooltip%22%3Atrue%2C%22isMonoSize%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22crypto-coins-heatmap%22%7D`;

      if (resolvedTheme) {
        setChild(
          <iframe
            {...props}
            key={resolvedTheme}
            src={resolvedTheme === "dark" ? darkModeUrl : lightModeUrl}
            title="crypto coins-heatmap TradingView widget"
            lang="en"
            className={cn("h-full w-full", className)}
          />,
        );
      }
    },
    [className, props, resolvedTheme],
  );

  return child;
};

export default TradingViewCryptoHeatmap;
