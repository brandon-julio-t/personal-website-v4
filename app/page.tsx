import Contacts from "@/components/common/contacts";
import Certificate from "./_components/certificate";
import GithubProjects from "./_components/github-projects";
import Hero from "./_components/hero";
import TechnologyStack from "./_components/technology-stack";
import WorkExperience from "./_components/work-experience";

export default function Home() {
  return (
    <main className="container my-4 flex max-w-5xl flex-col gap-6 md:my-8 lg:my-16 xl:my-32">
      <Hero />
      <Contacts delay={0.2} />
      <WorkExperience />
      <GithubProjects />
      <TechnologyStack />
      <Certificate />
      <Contacts />
    </main>
  );
}
