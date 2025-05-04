import BlurFade from "@/components/magicui/blur-fade";
import { TypographyH4 } from "@/components/ui/typography";
import { workExperiences } from "./data";
import { WorkExperienceSection } from "./item";

export default function WorkExperience() {
  return (
    <section className="flex flex-col gap-4">
      <BlurFade delay={0.3}>
        <TypographyH4 className="text-center" asChild>
          <h2>Work Experience</h2>
        </TypographyH4>
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
