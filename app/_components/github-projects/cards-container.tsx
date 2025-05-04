"use client";

import Skeleton from "@/components/common/skeleton";
import BlurFade from "@/components/magicui/blur-fade";
import { TypographyLarge } from "@/components/ui/typography";
import IRepository from "@/interfaces/repository";
import { FunctionComponent } from "react";
import RepositoryCard from "./repository-card";

const CardsContainer: FunctionComponent<{
  title: string;
  repositories: IRepository[];
  isLoading: boolean;
}> = ({ title, repositories, isLoading }) => {
  return (
    <>
      <BlurFade inView>
        <TypographyLarge className="text-center">{title}</TypographyLarge>
      </BlurFade>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <BlurFade key={idx} inView>
                <Skeleton className="mx-auto h-48 w-full" />
              </BlurFade>
            ))
          : repositories.map((repository, idx) => (
              <BlurFade key={idx} inView className="size-full">
                <RepositoryCard repository={repository} className="size-full" />
              </BlurFade>
            ))}
      </div>
    </>
  );
};

export default CardsContainer;
