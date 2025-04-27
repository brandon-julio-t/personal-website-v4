import { Button } from "@/components/ui/button";
import { TypographyH4, TypographyMuted } from "@/components/ui/typography";
import Link from "next/link";

const ComponentsPage = () => {
  return (
    <main className="flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <TypographyH4>Components</TypographyH4>
        <TypographyMuted>
          Collection of animated components that I developed in my spare time to
          satisfy my curiosity
        </TypographyMuted>
      </header>

      <ul className="list-inside">
        <li className="list-disc">
          <Button variant="link" className="-mx-4" asChild>
            <Link href="/components/image-zoom">Image Zoom</Link>
          </Button>
        </li>
      </ul>
    </main>
  );
};

export default ComponentsPage;
