import BlurFade from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import ShineBorder from "@/components/magicui/shine-border";
import {
  TypographyH2,
  TypographyH3,
  TypographyLarge,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";
import { ComponentType, PropsWithChildren } from "react";

export default function WorkExperience() {
  return (
    <section>
      <TypographyH2 className="mb-8 text-center">Work Experience</TypographyH2>

      <section className="flex flex-col gap-4">
        {workExperiences.map((data, idx) => {
          return (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <WorkExperienceCard
                isActive={idx === 0}
                className="mx-auto max-w-(--breakpoint-md) bg-neutral-100 p-4 dark:bg-neutral-900"
              >
                <section className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <TypographyH3 className="text-center">
                      {data.companyName}
                    </TypographyH3>

                    <TypographySmall className="italic">
                      {data.period}
                    </TypographySmall>
                  </div>

                  <TypographyLarge>{data.jobTitle}</TypographyLarge>
                  <TypographyP>{data.description}</TypographyP>
                </section>
              </WorkExperienceCard>
            </BlurFade>
          );
        })}
      </section>
    </section>
  );
}

const WorkExperienceCard: ComponentType<
  PropsWithChildren & { className: string; isActive: boolean }
> = ({ isActive, className, children }) => {
  if (isActive) {
    return (
      <ShineBorder
        className={className}
        // className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        {children}
      </ShineBorder>
    );
  }

  return <MagicCard className={className}>{children}</MagicCard>;
};

const workExperiences = [
  {
    companyName: "Farmio",
    period: "2024 - present",
    jobTitle: "Software Engineer",
    description: (
      <>
        As a software engineer, I am responsible for many software related tasks
        such as software development, database design, software maintenance, and
        software architecture design.
      </>
    ),
  },
  {
    companyName: "BINUS University",
    period: "2020 - 2023",
    jobTitle: "Fullstack Engineer",
    description: (
      <>
        alias Research and Development Team (RnD/RDT).
        <br />
        After a year of being a teaching assistant, I was promoted to the RnD
        team. My tasks in the RnD team are maintaining existing application and
        developing new application for stakeholders.
      </>
    ),
  },
  {
    companyName: "BINUS University",
    period: "2020 - 2021",
    jobTitle: "Teaching Assistant",
    description: (
      <>
        While being a teaching assistant, I am tasked to handle practicum
        operational activities such as teaching practicum subjects,
        participating in teaching qualification and trainings, and grading
        student answers.
      </>
    ),
  },
];
