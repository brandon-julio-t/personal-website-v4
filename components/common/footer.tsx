"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import BlurFade from "../magicui/blur-fade";
import { SparklesCore } from "../ui.aceternity/sparkles";
import { Button } from "../ui/button";
import { TypographyMuted } from "../ui/typography";

const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md">
      <div className="flex flex-col gap-4">
        <section className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
          {credits.map((credit, idx) => (
            <BlurFade key={idx} delay={idx * 0.025} inView>
              <Button
                variant="link"
                className="text-muted-foreground w-full text-center"
                asChild
              >
                <Link href={credit.href} target="_blank">
                  {credit.name}
                </Link>
              </Button>
            </BlurFade>
          ))}
        </section>

        <BlurFade delay={(credits.length + 1) * 0.025} inView>
          <TypographyMuted className="text-center">&copy; 2024</TypographyMuted>
        </BlurFade>
      </div>

      <div className="relative h-40 w-full">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-linear-to-r from-transparent via-indigo-500 to-transparent blur-xs" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-linear-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-linear-to-r from-transparent via-sky-500 to-transparent blur-xs" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-linear-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor={resolvedTheme === "dark" ? "#FFFFFF" : "#000000"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="bg-background absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

const credits = [
  {
    href: "https://react.dev?uwu=true",
    name: "React",
  },
  {
    href: "https://nextjs.org?uwu=true",
    name: "Next.js",
  },
  {
    href: "https://tailwindcss.com",
    name: "Tailwind CSS",
  },
  {
    href: "https://ui.shadcn.com",
    name: "shadcn/ui",
  },
  {
    href: "https://ui.aceternity.com",
    name: "Aceternity UI",
  },
  {
    href: "https://magicui.design",
    name: "Magic UI",
  },
  {
    href: "https://devicon.dev",
    name: "Devicon",
  },
  {
    href: "https://fortawesome.com",
    name: "Fortawesome",
  },
  {
    href: "https://www.tradingview.com",
    name: "TradingView",
  },
  {
    href: "https://trends.google.com/trends",
    name: "Google Trends",
  },
  {
    href: "https://serpapi.com",
    name: "SerpApi",
  },
  {
    href: "https://banterbubbles.com",
    name: "Banter Bubbles",
  },
];

export default Footer;
