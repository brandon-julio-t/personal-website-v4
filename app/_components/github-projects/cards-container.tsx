"use client";

import Skeleton from "@/components/common/skeleton";
import BlurFade from "@/components/magicui/blur-fade";
import { TypographyMuted } from "@/components/ui/typography";
import IRepository from "@/interfaces/repository";
import { FunctionComponent } from "react";
import RepositoryCard from "./repository-card";

const CardsContainer: FunctionComponent<{
  title: string;
  repositories: IRepository[];
  isLoading: boolean;
}> = ({ title, repositories, isLoading }) => {
  return (
    <div>
      <BlurFade inView>
        <TypographyMuted className="text-center text-base" asChild>
          <h3>{title}</h3>
        </TypographyMuted>
      </BlurFade>

      <div className="columns-1 space-y-4 md:columns-2">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <BlurFade key={idx} inView>
                <Skeleton className="mx-auto h-48 w-full" />
              </BlurFade>
            ))
          : repositories.map((repository, idx) => (
              <BlurFade key={idx} inView className="my-4 size-full">
                <RepositoryCard repository={repository} className="size-full" />
              </BlurFade>
            ))}
      </div>
    </div>
  );
};

export default CardsContainer;
