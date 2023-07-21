import type { Locale, Project, Projects } from "../../types";
import { DEFAULT_LOCALE } from "../../constants";

import { routes } from "../../routes";
import { useTranslations } from "../i18n/utils";

type ProjectArgsType = {
  slug: string;
  locale?: Locale;
};

const project = (args: ProjectArgsType): Project => {
  const locale = args?.locale || DEFAULT_LOCALE;
  const slug = args.slug;
  const t = useTranslations(locale);

  return {
    seo: {
      title: t(`projects.${slug}.seo.title`),
      description: t(`projects.${slug}.seo.description`),
    },
    name: t(`projects.${slug}.name`),
    summary: t(`projects.${slug}.summary`),
    year: t(`projects.${slug}.year`),
    client: t(`projects.${slug}.client`),
    category: t(`projects.${slug}.category`),
    synopsis: t(`projects.${slug}.synopsis`),
    imageSrc: `/projects/${slug}.jpg`,
    projectUrl: routes.portfolio.project({ project: slug, locale }),
    videoUrl: "",
    illustration: [],
    animation: [],
    music: [],
    section: "multimedia",
    externalLink: "",
    slides: [],
  };
};

export const projectMagicWords = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "magic-words";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "https://www.youtube.com/watch?v=PxmXOsvjJx8",
    illustration: ["Daniel Corkidi", "Rafael Castillo"],
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Emmanuel Miranda"],
    section: "design",
    externalLink: "https://google.com",
    slides: [
      "/projects/magic-words/slide_1.jpg",
      "/projects/magic-words/slide_2.jpg",
      "/projects/magic-words/slide_4.jpg",
    ],
  };
};

export const projectMillyCohenTales = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "milly-cohen-tales";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "https://www.youtube.com/watch?v=fYH0K5Wk6vE",
    illustration: [],
    animation: [],
    music: [],
    section: "multimedia",
    externalLink: "",
    slides: [],
  };
};

export const projectMidotPowerKids = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "midot-power-kids";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "https://www.youtube.com/watch?v=-jO1qc-euZg",
    illustration: [],
    animation: [],
    music: [],
    section: "multimedia",
    externalLink: "",
    slides: [],
  };
};

export const projectTheViolaJourney = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "the-viola-journey";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "",
    illustration: [],
    animation: [],
    music: [],
    section: "multimedia",
    externalLink: "",
    slides: [],
  };
};

export const projects: Projects = {
  "magic-words": projectMagicWords,
  "midot-power-kids": projectMidotPowerKids,
  "milly-cohen-tales": projectMillyCohenTales,
  "the-viola-journey": projectTheViolaJourney,
};
