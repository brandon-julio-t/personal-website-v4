import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { workExperiences } from "./data";
import { ProjectShowcaseItem } from "./project-showcase-item";

export const WorkExperienceSection: React.ComponentType<{
  data: (typeof workExperiences)[number];
}> = ({ data }) => {
  const id = React.useId();

  return (
    <section className="flex flex-col gap-2">
      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div className="flex flex-row items-center gap-2">
          <span>{data.jobTitle}</span>
          <span className="text-muted-foreground">@</span>
          <Button
            variant="link"
            className="h-fit p-0 text-lg font-normal"
            asChild
          >
            <Link href={data.companyUrl} target="_blank">
              {data.companyName}
            </Link>
          </Button>
        </div>

        <TypographyMuted className="italic">{data.period}</TypographyMuted>
      </header>

      <TypographyP>{data.description}</TypographyP>

      <Accordion type="single" collapsible>
        <AccordionItem value={id} className="!border-b">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {data.showcaseProjects.map((project, idx) => (
              <ProjectShowcaseItem key={idx} project={project} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
