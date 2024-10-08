import BlurFade from "../magicui/blur-fade";
import { Dock, DockIcon } from "../magicui/dock";
import { DarkModeToggle } from "../ui/dark-mode-toggle";
import { Separator } from "../ui/separator";
import ExternalLink from "./external-link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faFreeCodeCamp,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contacts = [
  {
    href: "https://www.facebook.com/profile.php?id=100008724798107",
    icon: faFacebook,
    title: "Facebook",
  },
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
  { href: "https://s.id/cv-bjt", icon: faFileAlt, title: "FileAlt" },
  // {
  //   href: "https://www.freecodecamp.org/brandon-julio-thenaro",
  //   icon: faFreeCodeCamp,
  //   title: "FreeCodeCamp",
  // },
];

export default function Contacts() {
  return (
    <BlurFade delay={0.25} inView>
      <Dock direction="middle">
        {contacts.map((contact, idx) => (
          <DockIcon key={idx}>
            <ExternalLink
              href={contact.href}
              aria-label={contact.title}
              title={contact.title}
            >
              <FontAwesomeIcon
                className="h-6 text-foreground"
                icon={contact.icon as IconProp}
                size="2x"
              />
            </ExternalLink>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full py-2" />

        <DarkModeToggle />
      </Dock>
    </BlurFade>
  );
}
