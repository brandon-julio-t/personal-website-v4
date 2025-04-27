import { ImageZoomManipulator } from "@/app/components/image-zoom/block";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

export const CertificateImage: React.ComponentType<{
  src: StaticImageData;
  alt: string;
}> = ({ src, alt }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative overflow-hidden">
          <Image placeholder="blur" src={src} alt={alt} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>Image Zoom</DialogTitle>
          <DialogDescription>Image Zoom Description</DialogDescription>
        </DialogHeader>
        <ImageZoomManipulator src={src.src} alt={alt} />
      </DialogContent>
    </Dialog>
  );
};
