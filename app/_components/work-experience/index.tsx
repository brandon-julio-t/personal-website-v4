import BlurFade from "@/components/magicui/blur-fade";
import { TypographyH3 } from "@/components/ui/typography";
import { workExperiences } from "./data";
import { WorkExperienceSection } from "./item";

export default function WorkExperience() {
  return (
    <section className="flex flex-col gap-4">
      <BlurFade delay={0.3}>
        <TypographyH3 className="text-center">Work Experience</TypographyH3>
      </BlurFade>

      <section className="flex flex-col gap-4">
        {workExperiences.map((data, idx) => {
          return (
            <BlurFade delay={0.4 + idx * 0.1} key={idx}>
              <WorkExperienceSection data={data} />
            </BlurFade>
          );
        })}
      </section>
    </section>
  );
}
