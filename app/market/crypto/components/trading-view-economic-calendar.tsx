import { cn } from "@/lib/utils";
import { ComponentProps, ComponentType } from "react";

const TradingViewEconomicCalendar: ComponentType<
  ComponentProps<"iframe"> & {
    colorTheme?: string;
  }
> = ({ colorTheme, className, ...props }) => {
  const baseUrl = "https://www.tradingview-widget.com/embed-widget/events/";

  const params = new URLSearchParams({
    locale: "en",
    width: "100%",
    height: "100%",
    colorTheme: colorTheme || "dark",
    isTransparent: "false",
    importanceFilter: "0,1",
    countryFilter: "us",
    utm_source: "www.tradingview.com",
    utm_medium: "widget_new",
    utm_campaign: "events",
    "page-uri": "www.tradingview.com/widget-wizard/en/light/economic-calendar/",
  });

  const src = `${baseUrl}?${params.toString()}`;

  return (
    <iframe
      {...props}
      src={src}
      title="events TradingView widget"
      lang="en"
      className={cn("h-full w-full overflow-hidden rounded", className)}
    />
  );
};

export default TradingViewEconomicCalendar;
