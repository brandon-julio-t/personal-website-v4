"use client";

import ParticleSystem from "@/components/particle-system/particle-system";
import { ElementRef, useEffect, useRef } from "react";

const Particles = () => {
  const particleCanvas = useRef<ElementRef<"canvas">>(null);

  useEffect(() => {
    try {
      const canvas = particleCanvas.current;
      if (!canvas) return;

      const system = new ParticleSystem(canvas);

      return () => system.cleanUp();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <canvas
      ref={particleCanvas}
      className="fixed -z-50 h-screen w-screen opacity-70 blur-[1px]"
    />
  );
};

export default Particles;
