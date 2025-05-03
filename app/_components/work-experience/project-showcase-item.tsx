"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { ImageZoomManipulator } from "@/registry/new-york/image-zoom/image-zoom";
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
        <TypographyMuted className="text-sm/relaxed">
          {project.description}
        </TypographyMuted>
      </header>

      {project.skills.length > 0 && (
        <section className="flex flex-row flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </section>
      )}

      {project.images.length > 0 && (
        <Carousel plugins={[Autoplay()]} className="mx-auto w-full md:w-xl">
          <CarouselContent>
            {project.images.map((image, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <CarouselItem>
                    <div className="relative aspect-video h-auto flex-1 overflow-hidden rounded-xl border p-1">
                      <Image
                        src={image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CarouselItem>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90vw]">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogHeader>
                  <ImageZoomManipulator src={image.src} alt={project.title} />
                </DialogContent>
              </Dialog>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:-left-10" />
          <CarouselNext className="right-1 md:-right-10" />
        </Carousel>
      )}
    </section>
  );
};
