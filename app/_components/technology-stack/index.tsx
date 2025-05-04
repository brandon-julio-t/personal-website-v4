"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { TypographyH4 } from "@/components/ui/typography";
import Backend from "./backend";
import Cloud from "./cloud";
import Database from "./database";
import Frontend from "./frontend";
import Others from "./others";
import TechnologyStackProgramming from "./programming";
import Web3 from "./web3";

export default function TechnologyStack() {
  return (
    <section className="flex flex-col gap-4">
      <BlurFade inView>
        <TypographyH4 className="text-center" asChild>
          <h2>Technology Stack</h2>
        </TypographyH4>
      </BlurFade>

      <div className="mx-auto grid w-fit grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Web3 />
        <Frontend />
        <Backend />
        <TechnologyStackProgramming />
        <Database />
        <Cloud />
        <Others />
      </div>
    </section>
  );
}
