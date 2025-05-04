import BlurFade from "@/components/magicui/blur-fade";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { TypographyH4 } from "@/components/ui/typography";
import { ExternalLinkIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import CardsContainer from "./cards-container";

const GithubProjects: React.FunctionComponent = async () => {
  const { data, error } = await getData();

  const isLoading = !data && !error;
  const pinnedRepositories = data?.data?.viewer?.pinnedItems?.nodes ?? [];
  const latestRepositories =
    data?.data?.viewer?.repositories?.edges?.map((edge) => edge.node) ?? [];

  return (
    <section className="flex flex-col gap-4">
      <BlurFade inView>
        <TypographyH4 className="text-center">GitHub Projects</TypographyH4>
      </BlurFade>

      {error ? (
        <Alert className="mx-auto my-8 max-w-(--breakpoint-md)">
          <InfoIcon />
          <AlertTitle className="mb-2 text-center text-3xl">Error</AlertTitle>
          <AlertDescription className="mb-4 text-center font-bold">
            Please contact the developer with the following detail
            <br />
            <span className="font-mono">{error}</span>
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <CardsContainer
            title="Pinned Repositories"
            repositories={pinnedRepositories}
            isLoading={isLoading}
          />
          <CardsContainer
            title="Latest Repositories"
            repositories={latestRepositories}
            isLoading={isLoading}
          />
        </>
      )}

      <Button variant="outline" className="mx-auto w-full max-w-xs" asChild>
        <Link href="http://github.com/brandon-julio-t" target="_blank">
          View more
          <ExternalLinkIcon />
        </Link>
      </Button>
    </section>
  );
};

async function getData() {
  const url = "https://api.github.com/graphql";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GITHUB_GRAPHQL_TOKEN}`,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query: gql }),
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = (await response.json()) as { data: IData };
    return { data };
  } catch (e) {
    const error = e as Error;
    console.error(error);
    return { error: error.message };
  }
}

const gql = `
  query Github {
    viewer {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            createdAt
            description
            homepageUrl
            name
            url
            languages(first: 3) {
              nodes {
                name
              }
            }
          }
        }
      }
      repositories(
        affiliations: OWNER
        first: 6
        orderBy: {field: CREATED_AT, direction: DESC}
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        edges {
          node {
            createdAt
            description
            homepageUrl
            name
            url
            languages(first: 3) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

interface IData {
  viewer: {
    pinnedItems: {
      nodes: IRepository[];
    };
    repositories: {
      edges: {
        node: IRepository;
      }[];
    };
  };
}

interface IRepository {
  createdAt: string;
  description: string;
  homepageUrl: string;
  name: string;
  url: string;
  languages: {
    nodes: ILanguage[];
  };
}
interface ILanguage {
  name: string;
}

export default GithubProjects;
