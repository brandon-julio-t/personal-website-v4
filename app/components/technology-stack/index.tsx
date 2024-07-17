"use client";

import { TypographyH2 } from "@/components/ui/typography";
import Backend from "./backend";
import Cloud from "./cloud";
import Database from "./database";
import Frontend from "./frontend";
import Others from "./others";
import TechnologyStackProgramming from "./programming";

export default function TechnologyStack() {
  return (
    <section className="mx-auto max-w-screen-lg">
      <TypographyH2 className="text-center">Technology Stack</TypographyH2>

      <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
