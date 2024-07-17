"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BackgroundBeams } from "@/components/ui.aceternity/background-beams";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { JOB_TITLE } from "@/config";

// import { useTheme } from "next-themes";

export default function Hero() {
  // const { theme, setTheme } = useTheme();

  return (
    <header
      className="relative flex min-h-screen flex-col items-center justify-center space-y-4 text-center"
      // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <BlurFade delay={0.25} inView>
        <TypographyH1>
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 box-decoration-clone bg-clip-text text-transparent">
            Brandon Julio Thenaro
          </span>
        </TypographyH1>
      </BlurFade>

      <BlurFade delay={0.25 * 1.5} inView>
        <TypographyH2>
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 box-decoration-clone bg-clip-text text-transparent">
            Lifelong learner | {JOB_TITLE}
          </span>
        </TypographyH2>
      </BlurFade>

      <BackgroundBeams />
    </header>
  );
}
