import ILanguage from "./language";

export default interface IRepository {
  createdAt: string;
  description: string;
  homepageUrl: string;
  name: string;
  url: string;
  languages: {
    nodes: ILanguage[];
  };
}
