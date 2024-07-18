"use client";

import BlurFade from "../magicui/blur-fade";
import { SparklesCore } from "../ui.aceternity/sparkles";
import { TypographyMuted } from "../ui/typography";
import ExternalLink from "./external-link";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full gap-4 flex flex-col items-center justify-center overflow-hidden rounded-md pt-8">
      <div className="flex flex-col gap-4">
        <section className="flex flex-wrap justify-center gap-8">
          {credits.map((credit, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <ExternalLink href={credit.href}>
                <TypographyMuted className="text-center">
                  {credit.name}
                </TypographyMuted>
              </ExternalLink>
            </BlurFade>
          ))}
        </section>

        <BlurFade delay={0.25} inView>
          <TypographyMuted className="text-center">&copy; 2024</TypographyMuted>
        </BlurFade>
      </div>

      <div className="relative h-40">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
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
    href: "https://fortawesome.com",
    name: "Fortawesome",
  },
];

export default Footer;
