import CardsContainer from "./cards-container";
import Card from "@/components/common/card";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

const GithubProjects: React.FunctionComponent = async () => {
  const { data, error } = await getData();

  const isLoading = !data && !error;
  const pinnedRepositories = data?.data?.viewer?.pinnedItems?.nodes ?? [];
  const latestRepositories =
    data?.data?.viewer?.repositories?.edges?.map((edge) => edge.node) ?? [];

  return (
    <section className="mb-8">
      <TypographyH2 className="text-center">GitHub Projects</TypographyH2>

      {error ? (
        <Card className="mx-auto my-8 max-w-screen-md">
          <TypographyH3 className="mb-2 text-center text-3xl">
            Error
          </TypographyH3>
          <TypographyP className="mb-4 text-center font-bold">
            Please contact the developer with the following detail
          </TypographyP>
          <TypographyP className="text-center">{error}</TypographyP>
        </Card>
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
