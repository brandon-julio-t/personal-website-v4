import { Button } from "@/components/ui/button";
import { TypographyH4, TypographySmall } from "@/components/ui/typography";
import Link from "next/link";

const ComponentsPage = () => {
  return (
    <main className="container flex max-w-2xl flex-col gap-2">
      <header className="flex flex-col gap-2">
        <TypographyH4>Components</TypographyH4>
        <TypographySmall className="font-normal">
          Collection of animated components that I developed in my spare time to
          satisfy my curiosity
        </TypographySmall>
      </header>

      <ul className="list-inside">
        {components.map((component) => (
          <li key={component.title} className="list-disc">
            <Button variant="link" className="-mx-4" asChild>
              <Link href={component.href}>{component.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

const components = [
  {
    title: "Image Zoom",
    href: "/components/image-zoom",
  },
  {
    title: "iOS Mail Tabs",
    href: "/components/ios-mail-tabs",
  },
];

export default ComponentsPage;
