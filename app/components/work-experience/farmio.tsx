import Card from "@/components/common/card";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";

export default function Farmio() {
  return (
    <section className="mx-auto my-8 flex max-w-(--breakpoint-md) flex-col justify-center space-y-8">
      <TypographyH3 className="text-center">
        Farmio
        <br />
        <TypographySmall className="text-base italic">
          2023 - present
        </TypographySmall>
      </TypographyH3>

      <MagicCard className="p-4">
        <TypographyH4 className="text-2xl font-medium">
          Software Engineer
        </TypographyH4>
        <TypographyP>
          As a software engineer, I am responsible for many software related
          tasks such as software development, database design, software
          maintenance, and software architecture design.
        </TypographyP>
      </MagicCard>
    </section>
  );
}
