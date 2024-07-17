import { AuroraBackground } from "@/components/ui.aceternity/aurora-background";
import Certificate from "./components/certificate";
import GithubProjects from "./components/github-projects";
import Hero from "./components/hero";
import TechnologyStack from "./components/technology-stack";
import WorkExperience from "./components/work-experience";
import Contacts from "@/components/common/contacts";

export default function Home() {
  return (
    <AuroraBackground>
      <section className="flex size-full flex-col gap-8 overflow-auto px-4 pb-16">
        <Hero />
        <Contacts />
        <WorkExperience />
        <GithubProjects />
        <TechnologyStack />
        <Certificate />
        <Contacts />
      </section>
    </AuroraBackground>
  );
}
