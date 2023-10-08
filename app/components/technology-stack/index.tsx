"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Backend from "./backend";
import Cloud from "./cloud";
import Database from "./database";
import Frontend from "./frontend";
import Others from "./others";
import TechnologyStackProgramming from "./programming";

export default function TechnologyStack() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section className="mx-auto max-w-screen-lg">
      <h2 className="text-center text-5xl">Technology Stack</h2>

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        initial="hidden"
        animate={controls}
        className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <Frontend />
        <Backend />
        <TechnologyStackProgramming />
        <Database />
        <Cloud />
        <Others />
      </motion.div>
    </section>
  );
}
