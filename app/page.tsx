import Certificate from "./components/certificate";
import GithubProjects from "./components/github-projects";
import Hero from "./components/hero";
import TechnologyStack from "./components/technology-stack";
import WorkExperience from "./components/work-experience";
import Contacts from "@/components/common/contacts";
import { TracingBeam } from "@/components/ui.aceternity/tracing-beam";

export default function Home() {
  return (
    <section className="flex size-full flex-col gap-8 overflow-auto px-4">
      <Hero />
      <Contacts />
      <TracingBeam>
        <WorkExperience />
        <GithubProjects />
        <TechnologyStack />
      </TracingBeam>
      <Certificate />
      <Contacts />
    </section>
  );
}
