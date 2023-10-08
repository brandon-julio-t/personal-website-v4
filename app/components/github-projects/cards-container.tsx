"use client";

import Skeleton from "@/components/common/skeleton";
import IRepository from "@/interfaces/repository";
import { motion, useAnimation } from "framer-motion";
import { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RepositoryCard from "./repository-card";

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
      <h3 className="mb-4 mt-8 text-center text-3xl">{title}</h3>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <motion.div key={idx} variants={item}>
                <Skeleton className="mx-auto h-48 w-full" />
              </motion.div>
            ))
          : repositories.map((repository, idx) => (
              <motion.div key={idx} variants={item}>
                <RepositoryCard repository={repository} />
              </motion.div>
            ))}
      </motion.div>
    </>
  );
};

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default CardsContainer;
