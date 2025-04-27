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
import Image, { ImageProps } from "next/image";
import React from "react";

export const ImageZoom: React.ComponentType<ImageProps> = (imageProps) => {
  const [resetKey, setResetKey] = React.useState(0);

  const scale = useSpring(1, { visualDuration: 0.3, bounce: 0.35 });
  const rotate = useSpring(0, { visualDuration: 0.35, bounce: 0.2 });

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [dragConstraints, setDragConstraints] = React.useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="relative size-32 overflow-hidden"
          size="icon"
        >
          <Image
            {...imageProps}
            alt={imageProps.alt || ""}
            layout="fill"
            className="object-cover"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>Image Zoom</DialogTitle>
          <DialogDescription>Image Zoom Description</DialogDescription>
        </DialogHeader>

        <div
          ref={(ref) => {
            if (containerRef.current) return;

            containerRef.current = ref;

            setDragConstraints({
              top: ref ? -ref.clientHeight * 0.7 : 0,
              left: ref ? -ref.clientWidth * 0.7 : 0,
              right: ref ? ref.clientWidth * 0.7 : 0,
              bottom: ref ? ref.clientHeight * 0.7 : 0,
            });
          }}
          className="relative h-[70vh] w-full overflow-hidden rounded-xl border"
        >
          <motion.img
            key={resetKey}
            src={imageProps.src.toString()}
            alt={imageProps.alt || ""}
            className="size-full cursor-pointer object-contain"
            drag
            style={{ scale, rotate }}
            dragConstraints={dragConstraints}
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
  );
};
