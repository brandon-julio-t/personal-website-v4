"use client";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import { BackgroundBeams } from "@/components/ui.aceternity/background-beams";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { JOB_TITLE } from "@/config";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <header className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
        <BlurFade delay={0.25} inView>
          <TypographyH1>
            <AnimatedGradientText>
              <div className="p-2">
                <Link href="/market/crypto">₿</Link>randon Julio Thenaro
              </div>
            </AnimatedGradientText>
          </TypographyH1>
        </BlurFade>

        <BlurFade delay={0.25 * 1.5} inView>
          <TypographyH2>
            <AnimatedShinyText>{JOB_TITLE}</AnimatedShinyText>
          </TypographyH2>
        </BlurFade>
      </header>

      <div className="absolute inset-0 -z-10 h-screen w-screen">
        <BackgroundBeams />
      </div>
    </>
  );
}
