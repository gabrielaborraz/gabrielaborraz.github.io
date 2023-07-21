import type { Locale } from "../../types";
import { DEFAULT_LOCALE } from "../../constants";

import { routes } from "../../routes";
import { useTranslations } from "../i18n/utils";

type ProjectType = {
  slug: string;
  locale?: Locale;
};

const project = (args: ProjectType) => {
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
  };
};

export const projectMagicWords = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "magic-words";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "https://www.youtube.com/watch?v=PxmXOsvjJx8",
  };
};

export const projectMillyCohenTales = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "milly-cohen-tales";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "https://www.youtube.com/watch?v=fYH0K5Wk6vE",
  };
};

export const projectMidotPowerKids = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "midot-power-kids";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "https://www.youtube.com/watch?v=-jO1qc-euZg",
  };
};

export const projectTheViolaJourney = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "the-viola-journey";

  const info = project({ slug, locale });

  return {
    ...info,
    videoUrl: "",
  };
};
