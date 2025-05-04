import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { workExperiences } from "./data";
import { ProjectShowcaseItem } from "./project-showcase-item";

export const WorkExperienceSection: React.ComponentType<{
  data: (typeof workExperiences)[number];
}> = ({ data }) => {
  const id = React.useId();

  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div className="flex flex-row items-center gap-2">
          <TypographySmall className="text-base">
            {data.jobTitle}
          </TypographySmall>
          <TypographyMuted>@</TypographyMuted>
          <Button variant="link" className="h-fit p-0 text-base" asChild>
            <Link href={data.companyUrl} target="_blank">
              {data.companyName}
            </Link>
          </Button>
        </div>

        <TypographyMuted className="italic">{data.period}</TypographyMuted>
      </header>

      <TypographySmall className="text-sm/relaxed font-normal">
        {data.description}
      </TypographySmall>

      <Accordion type="single" collapsible>
        <AccordionItem value={id} className="!border-b">
          <AccordionTrigger className="-mt-4">Projects</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6 border-t pt-4">
            {data.showcaseProjects.map((project, idx) => (
              <ProjectShowcaseItem key={idx} project={project} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
