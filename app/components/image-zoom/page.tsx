"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  IterationCwIcon,
  MinusIcon,
  PlusIcon,
  RotateCwSquareIcon,
} from "lucide-react";
import { motion, useSpring } from "motion/react";
import Image from "next/image";
import React from "react";

const ImageZoomComponentPage = () => {
  const [resetKey, setResetKey] = React.useState(0);
  const scale = useSpring(1, { bounce: 0.1 });
  const rotate = useSpring(0, { bounce: 0.1 });

  return (
    <section className="mx-auto flex max-w-xs items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="relative size-32 overflow-hidden"
            size="icon"
          >
            <Image
              layout="fill"
              src="https://picsum.photos/seed/picsum/1600/900"
              alt="placeholder"
              className="object-cover"
            />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[90vw]">
          <DialogHeader>
            <DialogTitle>Image Zoom</DialogTitle>
            <DialogDescription>Image Zoom Description</DialogDescription>
          </DialogHeader>

          <div className="relative h-[80vh] w-full overflow-hidden">
            <motion.img
              key={resetKey}
              src="https://picsum.photos/seed/picsum/1600/900"
              alt="placeholder"
              className="size-full cursor-pointer object-contain"
              drag
              style={{ scale, rotate }}
            />

            <div className="absolute top-2 right-2">
              <Button
                tabIndex={0}
                variant="outline"
                size="icon"
                className="rounded-r-none"
                onClick={() => {
                  scale.set(scale.get() + 0.075);
                }}
              >
                <PlusIcon />
              </Button>
              <Button
                tabIndex={0}
                variant="outline"
                size="icon"
                className="rounded-l-none rounded-r-none border-l-0"
                onClick={() => {
                  scale.set(Math.max(0.01, scale.get() - 0.075));
                }}
              >
                <MinusIcon />
              </Button>
              <Button
                tabIndex={0}
                variant="outline"
                size="icon"
                className="rounded-l-none rounded-r-none border-l-0"
                onClick={() => {
                  const current = rotate.get();
                  // When rotating, we want the angle to always be a multiple of 90 (0, 90, 180, 270, ...).
                  // Math explanation:
                  // - Math.round(current / 90) * 90 snaps the current angle to the nearest multiple of 90.
                  // - Then we add 90 to rotate clockwise to the next step.
                  // This way, even if the angle is a bit off (like 91), it will always snap to 90, 180, 270, etc.
                  const next = Math.round(current / 90) * 90 + 90;
                  rotate.set(next);
                }}
              >
                <RotateCwSquareIcon />
              </Button>
              <Button
                tabIndex={0}
                variant="outline"
                size="icon"
                className="rounded-l-none border-l-0"
                onClick={() => {
                  scale.jump(1);
                  rotate.jump(0);
                  setResetKey((prev) => prev + 1);
                }}
              >
                <IterationCwIcon />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageZoomComponentPage;
