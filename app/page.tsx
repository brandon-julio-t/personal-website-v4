import Contacts from "@/components/common/contacts";
import Certificate from "./components/certificate";
import GithubProjects from "./components/github-projects";
import Hero from "./components/hero";
import TechnologyStack from "./components/technology-stack";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <section className="flex size-full flex-col gap-8 overflow-auto px-4">
      <Hero />
      <Contacts />
      <WorkExperience />
      <GithubProjects />
      <TechnologyStack />
      <Certificate />
      <Contacts />
    </section>
  );
}
