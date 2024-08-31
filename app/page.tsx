import Contacts from "@/components/common/contacts";
import { TracingBeam } from "@/components/ui.aceternity/tracing-beam";
import Certificate from "./components/certificate";
import GithubProjects from "./components/github-projects";
import Hero from "./components/hero";
import TechnologyStack from "./components/technology-stack";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <section className="flex size-full flex-col gap-8 px-4">
      <Hero />

      <TracingBeam
        className="max-w-none"
        tracingBeamContainerClassName="left-0 md:left-0"
      >
        <div className="flex size-full flex-col gap-8 px-4">
          <Contacts />

          <WorkExperience />
          <GithubProjects />
          <TechnologyStack />

          <Certificate />

          <Contacts />
        </div>
      </TracingBeam>
    </section>
  );
}
