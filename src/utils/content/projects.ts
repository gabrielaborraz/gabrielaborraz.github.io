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
    year: "",
    client: "",
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
    year: "2017",
    client: "Tutorah Kids",
    videoUrl: "https://www.youtube.com/watch?v=PxmXOsvjJx8",
    illustration: ["Daniel Corkidi", "Rafael Castillo"],
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Emmanuel Miranda"],
    section: "multimedia",
    externalLink: "https://tutorahkids.tv/palabras-magicas",
    slides: [
      "/projects/magic-words/slide_1.jpg",
      "/projects/magic-words/slide_2.jpg"
    ],
  };
};

export const projectMillyCohenTales = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "milly-cohen-tales";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2020",
    client: "Tutorah Kids",
    videoUrl: "https://www.youtube.com/watch?v=fYH0K5Wk6vE",
    illustration: ["Rafael Castillo"],
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Rubén Garza"],
    section: "multimedia",
    externalLink: "https://tutorahkids.tv/cuentos-de-milly",
    slides: [      
      "/projects/milly-cohen-tales/slide_1.jpg",
      "/projects/milly-cohen-tales/slide_2.jpg",
      "/projects/milly-cohen-tales/slide_3.jpg",
      "/projects/milly-cohen-tales/slide_4.jpg"
    ],
  };
};

export const projectMidotPowerKids = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "midot-power-kids";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2019",
    client: "Tutorah Kids",
    videoUrl: "https://www.youtube.com/watch?v=-jO1qc-euZg",
    illustration: ["Rafael Castillo"],
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Emmanuel Miranda"],
    section: "multimedia",
    externalLink: "https://tutorahkids.tv/midot-power-kids",
    slides: [
      "/projects/midot-power-kids/slide_1.jpg",
      "/projects/midot-power-kids/slide_2.jpg",
      "/projects/midot-power-kids/slide_3.jpg"
    ],
  };
};

export const projectTheViolaJourney = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "the-viola-journey";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2020",
    client: "El Arte Ayuda",
    videoUrl: "https://www.youtube.com/watch?v=TWjibLoA78U",
    animation: ["Gabriela Borraz"],
    music: ["Fermín Rodríguez"],
    section: "multimedia",
    externalLink: "https://www.youtube.com/watch?v=gk_ZNO4zX7o",
    slides: [
      "/projects/the-viola-journey/slide_1.jpg",
      "/projects/the-viola-journey/slide_2.jpg",
      "/projects/the-viola-journey/slide_3.jpg"
    ],
  };
};

export const projectIntorahsante = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "intorahsante";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2020",
    client: "Tutorah Tv",
    videoUrl: "https://www.youtube.com/watch?v=Edt_sDKYv6g",
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Yosef Salinas"],
    section: "multimedia",
    externalLink: "https://youtu.be/Edt_sDKYv6g",
    slides: [
      "/projects/intorahsante/slide_1.jpg",
      "/projects/intorahsante/slide_2.jpg",
      "/projects/intorahsante/slide_3.jpg"
    ],
  };
};

export const projectNitzaStorytime = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "nitza-storytime";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2020",
    client: "Tutorah Kids",
    videoUrl: "https://www.youtube.com/watch?v=0W9YGO_3FnQ",
    illustration: ["Rafael Castillo"],
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Alberto Camillin"],
    section: "multimedia",
    externalLink: "https://tutorahkids.tv/%C2%BFcuantos-cuentos-cuentas?",
    slides: [
      "/projects/nitza-storytime/slide_1.jpg",
      "/projects/nitza-storytime/slide_2.jpg",
      "/projects/nitza-storytime/slide_3.jpg"
    ],
  };
};

export const projectHelloAPI = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "hello-api";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2023",
    client: "Hello API",
    section: "design",
    externalLink: "https://www.behance.net/GabrielaBorraz",
    slides: [
       "/projects/hello-api/slide_1.jpg",
      "/projects/hello-api/slide_2.jpg"
    ],
  };
};

export const projectIxkik = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "ixkik";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2017",
    client: " Creative Lab",
    section: "design",
    externalLink: "https://www.behance.net/GabrielaBorraz",
    slides: [
      "/projects/ixkik/slide_1.jpg",
      "/projects/ixkik/slide_2.jpg"
    ],
  };
};

export const projects: Projects = {
  "magic-words": projectMagicWords,
  "midot-power-kids": projectMidotPowerKids,
  "milly-cohen-tales": projectMillyCohenTales,
  "the-viola-journey": projectTheViolaJourney,
  "intorahsante":projectIntorahsante,
  "nitza-storytime": projectNitzaStorytime,
  "hello-api": projectHelloAPI,
  "ixkik": projectIxkik,
};
