import Contacts from "@/components/common/contacts";
import { JOB_TITLE } from "@/config";
import HeroScrollDownIndicator from "./hero-scroll-down-indicator";

export default function Hero() {
  return (
    <header className="relative flex h-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-6xl">
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 box-decoration-clone bg-clip-text text-transparent">
          Brandon Julio Thenaro
        </span>
      </h1>

      <h2 className="text-2xl">
        <span className="bg-gradient-to-r from-purple-500 to-indigo-500 box-decoration-clone bg-clip-text text-transparent">
          Lifelong learner | {JOB_TITLE}
        </span>
      </h2>

      <Contacts />

      <HeroScrollDownIndicator />
    </header>
  );
}
