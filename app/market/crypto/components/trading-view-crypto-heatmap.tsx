import { cn } from "@/lib/utils";
import { ComponentProps, ComponentType } from "react";

const TradingViewCryptoHeatmap: ComponentType<ComponentProps<"iframe">> = ({
  className,
  ...props
}) => {
  const lightModeUrl = `https://www.tradingview-widget.com/embed-widget/crypto-coins-heatmap/?locale=en#%7B%22dataSource%22%3A%22Crypto%22%2C%22blockSize%22%3A%22market_cap_calc%22%2C%22blockColor%22%3A%22change%22%2C%22symbolUrl%22%3A%22%22%2C%22colorTheme%22%3A%22light%22%2C%22hasTopBar%22%3Atrue%2C%22isDataSetEnabled%22%3Atrue%2C%22isZoomEnabled%22%3Atrue%2C%22hasSymbolTooltip%22%3Atrue%2C%22isMonoSize%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22crypto-coins-heatmap%22%7D`;

  const darkModeUrl = `https://www.tradingview-widget.com/embed-widget/crypto-coins-heatmap/?locale=en#%7B%22dataSource%22%3A%22Crypto%22%2C%22blockSize%22%3A%22market_cap_calc%22%2C%22blockColor%22%3A%22change%22%2C%22symbolUrl%22%3A%22%22%2C%22colorTheme%22%3A%22dark%22%2C%22hasTopBar%22%3Atrue%2C%22isDataSetEnabled%22%3Atrue%2C%22isZoomEnabled%22%3Atrue%2C%22hasSymbolTooltip%22%3Atrue%2C%22isMonoSize%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22crypto-coins-heatmap%22%7D`;

  return (
    <>
      {/* Light Mode */}
      <iframe
        {...props}
        src={lightModeUrl}
        title="crypto coins-heatmap TradingView widget"
        lang="en"
        className={cn("block h-full w-full dark:hidden", className)}
      />

      {/* Dark Mode */}
      <iframe
        {...props}
        src={darkModeUrl}
        title="crypto coins-heatmap TradingView widget "
        lang="en"
        className={cn("hidden h-full w-full dark:block", className)}
      />
    </>
  );
};

export default TradingViewCryptoHeatmap;
