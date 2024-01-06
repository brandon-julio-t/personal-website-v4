import Certificate from "./components/certificate";
import GithubProjects from "./components/github-projects";
import Hero from "./components/hero";
import TechnologyStack from "./components/technology-stack";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <main className="mb-8">
      <Hero />
      <WorkExperience />
      <GithubProjects />
      <TechnologyStack />
      <Certificate />
    </main>
  );
}
