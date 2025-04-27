"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { TypographyH3 } from "@/components/ui/typography";
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
        <TypographyH3 className="text-center">Technology Stack</TypographyH3>
      </BlurFade>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
