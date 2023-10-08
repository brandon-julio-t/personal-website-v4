import Hero from "./components/hero";
import TechnologyStack from "./components/technology-stack";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkExperience />
      <TechnologyStack />
    </main>
  );
}
