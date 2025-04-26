import Contacts from "@/components/common/contacts";
import Certificate from "./components/certificate";
import GithubProjects from "./components/github-projects";
import Hero from "./components/hero";
import TechnologyStack from "./components/technology-stack";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <section className="container my-4 flex max-w-5xl flex-col gap-6 md:my-8 lg:my-16 xl:my-32">
      <Hero />
      <Contacts delay={0.2} />
      <WorkExperience />
      <GithubProjects />
      <TechnologyStack />
      <Certificate />
      <Contacts />
    </section>
  );
}
