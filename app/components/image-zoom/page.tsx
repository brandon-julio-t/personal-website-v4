"use client";

import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/devicons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TypographyH4,
  TypographyLarge,
  TypographySmall,
} from "@/components/ui/typography";
import Link from "next/link";
import { ImageZoom } from "../../../registry/new-york/image-zoom/image-zoom";

const imageSrcRectangle = "https://picsum.photos/seed/rectangle/1600/900";
const imageSrcZackSnyder = "https://picsum.photos/seed/zacksnyder/400/300";
const imageSrcSquare = "https://picsum.photos/seed/square/500";

const ImageZoomComponentPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <TypographyH4>Image Zoom</TypographyH4>

        <TypographySmall>
          A draggable, resizable, and rotatable image viewer
        </TypographySmall>

        <div>
          <Button variant="ghost" className="-mx-4" asChild>
            <Link
              href="https://github.com/brandon-julio-t/personal-website-v4/tree/main/app/components/image-zoom"
              target="_blank"
            >
              <GitHubIcon className="fill-foreground" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </header>

      <section>
        <TypographyLarge>Examples</TypographyLarge>

        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <section className="flex flex-col gap-2">
                <TypographyLarge>Image 16:9</TypographyLarge>
                <ImageZoom src={imageSrcRectangle} alt="placeholder" />
              </section>

              <section className="flex flex-col gap-2">
                <TypographyLarge>Image 4:3</TypographyLarge>
                <ImageZoom src={imageSrcZackSnyder} alt="placeholder" />
              </section>

              <section className="flex flex-col gap-2">
                <TypographyLarge>Image 1:1</TypographyLarge>
                <ImageZoom src={imageSrcSquare} alt="placeholder" />
              </section>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <code className="bg-muted block rounded-lg px-3 py-2 font-mono whitespace-pre-wrap">
              {`
"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ImageZoom } from "@/components/image-zoom";

const imageSrcRectangle = "https://picsum.photos/seed/rectangle/1600/900";
const imageSrcZackSnyder = "https://picsum.photos/seed/zacksnyder/400/300";
const imageSrcSquare = "https://picsum.photos/seed/square/500";

<div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
  <section className="flex flex-col gap-2">
    <TypographyLarge>Image 16:9</TypographyLarge>
    <ImageZoom src={imageSrcRectangle} alt="placeholder" />
  </section>

  <section className="flex flex-col gap-2">
    <TypographyLarge>Image 4:3</TypographyLarge>
    <ImageZoom src={imageSrcZackSnyder} alt="placeholder" />
  </section>

  <section className="flex flex-col gap-2">
    <TypographyLarge>Image 1:1</TypographyLarge>
    <ImageZoom src={imageSrcSquare} alt="placeholder" />
  </section>
</div>
`.trim()}
            </code>
          </TabsContent>
        </Tabs>
      </section>

      <section className="flex flex-col gap-1">
        <TypographyLarge>Installation</TypographyLarge>
        <code className="bg-muted rounded-lg px-3 py-2 font-mono select-all">
          npx shadcn@latest add
          https://brandonjuliothenaro.my.id/r/image-zoom.json
        </code>
      </section>
    </section>
  );
};

export default ImageZoomComponentPage;
