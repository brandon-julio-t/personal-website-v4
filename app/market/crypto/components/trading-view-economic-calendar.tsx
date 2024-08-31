import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import {
  ComponentProps,
  ComponentType,
  ReactNode,
  useEffect,
  useState,
} from "react";

const TradingViewEconomicCalendar: ComponentType<
  ComponentProps<"iframe"> & {
    colorTheme?: string;
  }
> = ({ colorTheme, className, ...props }) => {
  const { resolvedTheme } = useTheme();
  const [child, setChild] = useState<ReactNode | null>(null);

  useEffect(
    function initOnClientToFixHydrationError() {
      if (resolvedTheme) {
        setChild(
          <iframe
            {...props}
            src={`https://www.tradingview-widget.com/embed-widget/events/?${new URLSearchParams(
              {
                locale: "en",
                width: "100%",
                height: "100%",
                colorTheme: resolvedTheme || "dark",
                isTransparent: "false",
                importanceFilter: "0,1",
                countryFilter: "us",
              },
            )}`}
            title="events TradingView widget"
            lang="en"
            className={cn("h-full w-full overflow-hidden rounded", className)}
          />,
        );
      }
    },
    [className, props, resolvedTheme],
  );

  return child;
};

export default TradingViewEconomicCalendar;
