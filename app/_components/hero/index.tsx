"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/typography";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="flex flex-col gap-4">
      <BlurFade inView>
        <TypographyH3>
          <Link href="/market/crypto">₿</Link>randon Julio Thenaro
        </TypographyH3>
      </BlurFade>

      <BlurFade delay={0.1} inView>
        <section className="flex flex-col gap-1">
          {[
            <>Building polished UI/UX in both web and mobile application.</>,
            <>
              Experimenting with AI to build product solutions to help business
              scale.
            </>,
            <>
              Tinkering with{" "}
              <Button
                variant="link"
                className="h-fit p-0 text-base underline"
                asChild
              >
                <Link href="/components">components</Link>
              </Button>{" "}
              in spare time.
            </>,
            <>
              <span className="italic">Pragmatic</span> Software Engineer at{" "}
              <Button
                variant="link"
                className="h-fit p-0 text-base underline"
                asChild
              >
                <Link target="_blank" href="https://farmio.io">
                  Farmio
                </Link>
              </Button>
              .
            </>,
          ].map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </section>
      </BlurFade>
    </header>
  );
}
