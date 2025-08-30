import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import BlurFade from "../magicui/blur-fade";
import { Button } from "../ui/button";
import { DarkModeToggle } from "../ui/dark-mode-toggle";

const contacts = [
  // {
  //   href: "https://www.facebook.com/profile.php?id=100008724798107",
  //   icon: faFacebook,
  //   title: "Facebook",
  // },
  {
    href: "https://www.instagram.com/brandon.julio.t",
    icon: faInstagram,
    title: "Instagram",
  },
  {
    href: "https://twitter.com/brandon_julio_t",
    icon: faTwitter,
    title: "Twitter",
  },
  {
    href: "https://github.com/brandon-julio-t",
    icon: faGithub,
    title: "Github",
  },
  {
    href: "https://www.linkedin.com/in/brandonjuliothenaro",
    icon: faLinkedin,
    title: "Linkedin",
  },
  {
    href: "https://docs.google.com/document/d/1B9jcWOLb9CSzsQ9gxjR_l5EAzF6CssQ1T7xUM3cYs3s/edit?usp=sharing",
    icon: faFileAlt,
    title: "FileAlt",
  },
  // {
  //   href: "https://www.freecodecamp.org/brandon-julio-thenaro",
  //   icon: faFreeCodeCamp,
  //   title: "FreeCodeCamp",
  // },
];

export default function Contacts({ delay }: { delay?: number }) {
  return (
    <BlurFade delay={delay} inView>
      <div className="mx-auto flex w-fit flex-row items-center justify-between gap-0.5 rounded-xl border p-1.5">
        <div className="flex flex-row items-center justify-between gap-0.5">
          {contacts.map((contact, idx) => (
            <div key={idx} className="last:mr-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label={contact.title}
                title={contact.title}
              >
                <Link
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={contact.icon as IconProp} size="2x" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <DarkModeToggle />
      </div>
    </BlurFade>
  );
}
