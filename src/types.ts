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
