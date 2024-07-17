"use client";

import RepositoryCard from "./repository-card";
import Skeleton from "@/components/common/skeleton";
import BlurFade from "@/components/magicui/blur-fade";
import { TypographyH3 } from "@/components/ui/typography";
import IRepository from "@/interfaces/repository";
import { useAnimation } from "framer-motion";
import { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CardsContainer: FunctionComponent<{
  title: string;
  repositories: IRepository[];
  isLoading: boolean;
}> = ({ title, repositories, isLoading }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <>
      <TypographyH3 className="mb-4 mt-8 text-center">{title}</TypographyH3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                <Skeleton className="mx-auto h-48 w-full" />
              </BlurFade>
            ))
          : repositories.map((repository, idx) => (
              <BlurFade
                key={idx}
                delay={0.25 + idx * 0.05}
                inView
                className="size-full"
              >
                <RepositoryCard repository={repository} className="size-full" />
              </BlurFade>
            ))}
      </div>
    </>
  );
};

export default CardsContainer;
