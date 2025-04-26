"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { workExperiences } from "./data";

export const ProjectShowcaseItem: React.ComponentType<{
  project: (typeof workExperiences)[number]["showcaseProjects"][number];
}> = ({ project }) => {
  return (
    <section className="flex flex-col gap-2">
      <header className="flex flex-col gap-1">
        <TypographySmall>{project.title}</TypographySmall>
        <TypographyMuted>{project.description}</TypographyMuted>
      </header>

      {(project.skills?.length ?? 0) > 0 && (
        <section className="flex flex-row flex-wrap gap-1">
          {project.skills.map((skill) => (
            <Badge key={skill} className="mr-1 last:mr-0" variant="outline">
              {skill}
            </Badge>
          ))}
        </section>
      )}

      {project.images.length > 0 && (
        <Carousel plugins={[Autoplay()]} className="mx-auto w-full md:w-[90%]">
          <CarouselContent>
            {project.images.map((image, idx) => (
              <CarouselItem key={idx}>
                <div
                  key={idx}
                  className="relative aspect-video h-auto flex-1 overflow-hidden rounded-xl border p-1"
                  onClick={() => window.open(image.src, "_blank")}
                >
                  <Image
                    key={idx}
                    src={image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:-left-12" />
          <CarouselNext className="right-1 md:-right-12" />
        </Carousel>
      )}
    </section>
  );
};
