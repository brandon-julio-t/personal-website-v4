"use client";

import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/devicons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TypographyH4,
  TypographyLarge,
  TypographySmall,
} from "@/components/ui/typography";

import { CodeHighlight } from "@/components/code-highlighter";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ImageZoom } from "../../../registry/new-york/image-zoom/image-zoom";

const imageSrcRectangle = "https://picsum.photos/seed/rectangle/1600/900";
const imageSrcZackSnyder = "https://picsum.photos/seed/zacksnyder/400/300";
const imageSrcSquare = "https://picsum.photos/seed/square/500";

const ImageZoomComponentPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="container flex max-w-2xl flex-col gap-1">
        <TypographyH4>Image Zoom</TypographyH4>

        <TypographySmall className="font-normal">
          An interactive image viewer for React apps. Easily zoom, drag, resize,
          and rotate images with smooth controls. Perfect for galleries,
          portfolios, or any UI where users need to explore images in detail.
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

      <section className="flex flex-col gap-1">
        <div className="container max-w-2xl">
          <TypographyLarge>Examples</TypographyLarge>
        </div>

        <Tabs defaultValue="preview">
          <div className="container max-w-2xl">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
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
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="code">
            <CodeHighlight className="language-tsx">
              {`
"use client";

import { Button } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typography";
import { ImageZoom } from "@/components/image-zoom";

const imageSrcRectangle = "https://picsum.photos/seed/rectangle/1600/900";
const imageSrcZackSnyder = "https://picsum.photos/seed/zacksnyder/400/300";
const imageSrcSquare = "https://picsum.photos/seed/square/500";

const ImageZoomDemo = () => {
  return (
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
  );
};
  `.trim()}
            </CodeHighlight>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <TypographyLarge>Installation</TypographyLarge>
        <CodeHighlight className="language-bash">
          npx shadcn@latest add
          https://brandonjuliothenaro.my.id/r/image-zoom.json
        </CodeHighlight>
      </section>
    </section>
  );
};

export default ImageZoomComponentPage;
