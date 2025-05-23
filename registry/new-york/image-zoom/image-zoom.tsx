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
import { motion, useMotionValue, useSpring } from "motion/react";
import Image, { type ImageProps } from "next/image";
import React from "react";

export const ImageZoom: React.ComponentType<ImageProps> = (imageProps) => {
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
        <ImageZoomManipulator
          src={imageProps.src.toString()}
          alt={imageProps.alt || ""}
        />
      </DialogContent>
    </Dialog>
  );
};

export const ImageZoomManipulator: React.ComponentType<
  React.ComponentProps<typeof motion.img>
> = (imageProps) => {
  const [originalDragConstraints, setOriginalDragConstraints] = React.useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const [currentDragConstraints, setCurrentDragConstraints] = React.useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const scale = useSpring(1, { visualDuration: 0.3, bounce: 0.35 });
  scale.on("change", (value) => {
    setCurrentDragConstraints({
      top: originalDragConstraints.top * value * 0.7,
      left: originalDragConstraints.left * value * 0.7,
      right: originalDragConstraints.right * value * 0.7,
      bottom: originalDragConstraints.bottom * value * 0.7,
    });
  });

  const rotate = useSpring(0, { visualDuration: 0.35, bounce: 0.2 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      ref={(ref) => {
        if (containerRef.current) return;

        containerRef.current = ref;

        const dragConstraints = {
          top: ref ? -ref.clientHeight * 0.7 : 0,
          left: ref ? -ref.clientWidth * 0.7 : 0,
          right: ref ? ref.clientWidth * 0.7 : 0,
          bottom: ref ? ref.clientHeight * 0.7 : 0,
        };

        setCurrentDragConstraints(dragConstraints);
        setOriginalDragConstraints(dragConstraints);
      }}
      className="relative h-[70vh] w-full overflow-hidden rounded-xl border"
    >
      <motion.img
        {...imageProps}
        className="size-full cursor-grab object-contain"
        drag={isMounted}
        dragMomentum={false}
        _dragX={x}
        _dragY={y}
        whileDrag={{ cursor: "grabbing" }}
        dragConstraints={currentDragConstraints}
        style={{ scale, rotate, x, y }}
      />

      <div className="absolute top-2 right-2">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-r-none"
          onClick={() => {
            scale.set(scale.get() + 1);
          }}
        >
          <PlusIcon />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-l-none rounded-r-none border-l-0"
          onClick={() => {
            scale.set(Math.max(0.01, scale.get() - 1));
          }}
        >
          <MinusIcon />
        </Button>
        <Button
          variant="secondary"
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
          variant="secondary"
          size="icon"
          className="rounded-l-none border-l-0"
          onClick={() => {
            scale.jump(1);
            rotate.jump(0);
            x.jump(0);
            y.jump(0);
            // setResetKey((prev) => prev + 1);
          }}
        >
          <IterationCwIcon />
        </Button>
      </div>
    </motion.div>
  );
};
