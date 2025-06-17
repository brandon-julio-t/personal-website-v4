import { cn } from "@/lib/utils";
import { ComponentProps, ComponentType } from "react";

const TradingViewEconomicCalendar: ComponentType<
  ComponentProps<"iframe"> & {
    colorTheme?: string;
  }
> = ({ colorTheme, className, ...props }) => {
  const commonWidgetProps = {
    locale: "en",
    width: "100%",
    height: "100%",
    isTransparent: "false",
    importanceFilter: "0,1",
    countryFilter: "us",
  };

  return (
    <>
      {/* Light Mode */}
      <iframe
        {...props}
        src={`https://www.tradingview-widget.com/embed-widget/events/?${new URLSearchParams(
          {
            ...commonWidgetProps,
            colorTheme: "light",
          },
        )}`}
        title="events TradingView widget"
        lang="en"
        className={cn(
          "block h-full w-full overflow-hidden rounded dark:hidden",
          className,
        )}
      />

      {/* Dark Mode */}
      <iframe
        {...props}
        src={`https://www.tradingview-widget.com/embed-widget/events/?${new URLSearchParams(
          {
            ...commonWidgetProps,
            colorTheme: "dark",
          },
        )}`}
        title="events TradingView widget"
        lang="en"
        className={cn(
          "hidden h-full w-full overflow-hidden rounded dark:block",
          className,
        )}
      />
    </>
  );
};

export default TradingViewEconomicCalendar;
