import ExternalLink from "@/components/common/external-link";
import { MagicCard } from "@/components/magicui/magic-card";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import IRepository from "@/interfaces/repository";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import LanguagePill from "./language-pill";

const RepositoryCard: React.FunctionComponent<
  React.ComponentProps<"div"> & { repository: IRepository }
> = ({ repository, ...rest }) => {
  const [createdAt, setCreatedAt] = useState(repository.createdAt);

  const toTitleCase = (text: string): string =>
    text.split("-").length === 1
      ? text[0].toUpperCase() + text.substring(1)
      : text
          .split("-")
          .map(
            (word) => word[0].toUpperCase() + word.substring(1).toLowerCase(),
          )
          .join(" ");

  const toReadableDate = (dateString: string): string =>
    new Intl.DateTimeFormat([], {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCreatedAt(toReadableDate(repository.createdAt));
    }
  }, [repository.createdAt]);

  return (
    <div {...rest}>
      <MagicCard className="p-4">
        <TypographyH4 className="text-lg font-bold">
          {toTitleCase(repository.name)}
        </TypographyH4>
        <small>{createdAt}</small>

        <div className="my-2 flex flex-wrap space-x-1">
          {repository.languages.nodes.map((language, idx) => (
            <LanguagePill key={idx} language={language} />
          ))}
        </div>

        <ExternalLink
          href={repository.url}
          className="flex items-center hover:underline"
        >
          <FontAwesomeIcon className="mr-1 h-5" icon={faGithub as IconProp} />{" "}
          View on GitHub
        </ExternalLink>

        <div className="my-2" />

        {repository.homepageUrl && (
          <ExternalLink
            href={repository.homepageUrl}
            className="flex items-center hover:underline"
          >
            <FontAwesomeIcon className="mr-1 h-5" icon={faGlobe as IconProp} />{" "}
            View Live
          </ExternalLink>
        )}

        <TypographyP className="my-2 italic">
          {repository.description}
        </TypographyP>
      </MagicCard>
    </div>
  );
};

export default RepositoryCard;
