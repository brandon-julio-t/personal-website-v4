import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import IRepository from "@/interfaces/repository";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <Card className="gap-2">
        <CardHeader>
          <CardTitle>{toTitleCase(repository.name)}</CardTitle>
          <CardDescription>{createdAt}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          {repository.description && (
            <section>
              <TypographySmall className="font-normal">
                {repository.description}
              </TypographySmall>
            </section>
          )}

          <section className="flex flex-row flex-wrap gap-1">
            {repository.languages.nodes.map((language, idx) => (
              <Badge key={idx} variant="outline">
                {language.name}
              </Badge>
            ))}
          </section>
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-1">
          <Button variant="link" className="h-fit p-0" asChild>
            <Link href={repository.url} target="_blank">
              <FontAwesomeIcon className="mr-1" icon={faGithub as IconProp} />{" "}
              View on GitHub
            </Link>
          </Button>

          {repository.homepageUrl && (
            <Button variant="link" className="h-fit p-0" asChild>
              <Link href={repository.homepageUrl} target="_blank">
                <FontAwesomeIcon className="mr-1" icon={faGlobe as IconProp} />{" "}
                View Live
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default RepositoryCard;
