import BlurFade from "../magicui/blur-fade";
import { Separator } from "../ui/separator";
import { TypographyMuted } from "../ui/typography";
import ExternalLink from "./external-link";

const Footer = () => {
  return (
    <footer className="relative w-full py-16">
      <Separator />

      <section className="mb-10 mt-16 flex flex-wrap justify-center gap-4">
        {credits.map((credit, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <ExternalLink href={credit.href}>
              <TypographyMuted className="text-center">
                {credit.name}
              </TypographyMuted>
            </ExternalLink>
          </BlurFade>
        ))}
      </section>

      <section>
        <TypographyMuted className="text-center">&copy; 2024</TypographyMuted>
      </section>
    </footer>
  );
};

const credits = [
  {
    href: "https://react.dev?uwu=true",
    name: "React",
  },
  {
    href: "https://nextjs.org?uwu=true",
    name: "Next.js",
  },
  {
    href: "https://tailwindcss.com",
    name: "Tailwind CSS",
  },
  {
    href: "https://ui.shadcn.com",
    name: "shadcn/ui",
  },
  {
    href: "https://ui.aceternity.com",
    name: "Aceternity UI",
  },
  {
    href: "https://magicui.design",
    name: "Magic UI",
  },
  {
    href: "https://fortawesome.com",
    name: "Fortawesome",
  },
];

export default Footer;
