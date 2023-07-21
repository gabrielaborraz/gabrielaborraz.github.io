import type { LOCALES } from "./constants";

export type Locale = (typeof LOCALES)[number];

export type ProjectCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  year: string | number;
  client: string;
  projectUrl: string;
  videoUrl?: string;
};

export type Project = {
  seo: {
    title: string;
    description: string;
  };
  name: string;
  summary: string;
  year: string;
  client: string;
  category: string;
  synopsis: string;
  imageSrc: string;
  projectUrl: string;
  videoUrl?: "";
  illustration?: string[];
  animation?: string[];
  music?: string[];
  section: "design" | "multimedia";
  externalLink?: string;
  slides?: string[];
};

export type Projects = {
  [key: string]: () => void;
};

export type GetStaticTypePathsType = {
  params: {
    slug: string;
    locale?: string;
  };
};
