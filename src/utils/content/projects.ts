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

/* ----------------------------------------------------------------------------,
 * Multimedia                                                                  |
 * ---------------------------------------------------------------------------*/
export const projectPixelArtGniusClub = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "pixelart-gniusclub";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2016",
    client: "Gnius Club",
    videoUrl: "https://www.youtube.com/watch?v=OzXnwRvTau0",
    illustration: ["Michel Solórzano", "Alejandro Cadenas"],
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Daniel Araujo"],
    section: "multimedia",
    externalLink: "https://gnius.club/",
    slides: [
      "/projects/pixelart-gniusclub/slide_1.jpg",
      "/projects/pixelart-gniusclub/slide_2.jpg",
      "/projects/pixelart-gniusclub/slide_3.jpg"
    ],
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

export const projectBedtimeStories = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "bedtime-stories";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2018",
    client: "Tutorah Kids",
    videoUrl: "https://www.youtube.com/watch?v=IXotjTdVoMQ",
    illustration: ["Daniel Corkidi"],
    animation: ["Gabriela Borraz"],
    music: ["Adán Silva"],
    section: "multimedia",
    externalLink: "https://tutorahkids.tv/cuentos-antes-de-dormir ",
    slides: [
      "/projects/bedtime-stories/slide_1.jpg",
      "/projects/bedtime-stories/slide_2.jpg"
    ],
  };
};

export const projectHabibMistery = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "habib-mistery";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2018",
    client: "Tutorah Kids",
    videoUrl: "https://www.youtube.com/watch?v=rWyoKom8XCQ",
    illustration: ["Ibán Santillán", "Karla Castañeda"],
    animation: ["Alejandro Olivares", "Alejandro Reyes", "Gabriela Borraz"],
    music: ["Emmanuel Miranda"],
    section: "multimedia",
    externalLink: "https://tutorahkids.tv/el-misterio-de-habib",
    slides: [
      "/projects/habib-mistery/slide_1.jpg",
      "/projects/habib-mistery/slide_2.jpg",
      "/projects/habib-mistery/slide_3.jpg",
      "/projects/habib-mistery/slide_4.jpg"
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

export const projectPositiveActions = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "positive-actions";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2020",
    client: "Tutorah Kids",
    videoUrl: "https://www.youtube.com/watch?v=o3kK4joKGnY",
    illustration: ["Alejandro Olivares"],
    animation: ["Alejandro Olivares", "Gabriela Borraz"],
    music: ["Emmanuel Miranda"],
    section: "multimedia",
    externalLink: "https://tutorahkids.tv/acciones-positivas",
    slides: [
      "/projects/positive-actions/slide_1.jpg",
      "/projects/positive-actions/slide_2.jpg",
      "/projects/positive-actions/slide_3.jpg"
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

/* ----------------------------------------------------------------------------,
 * Design                                                                      |
 * ---------------------------------------------------------------------------*/
export const projectIxkik = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "ixkik";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2017",
    client: "Creative Lab",
    section: "design",
    externalLink: "https://www.behance.net/gallery/81122411/IXKIK-Mexican-Logo-Design",
    slides: [
      "/projects/ixkik/slide_1.jpg",
      "/projects/ixkik/slide_2.jpg",
      "/projects/ixkik/slide_3.jpg",
      "/projects/ixkik/slide_4.jpg"
    ],
  };
};

export const projectEmNeurology = (args?: { locale?: Locale }) => {
  const locale = args?.locale;
  const slug = "em-neurology";

  const info = project({ slug, locale });

  return {
    ...info,
    year: "2023",
    client: "Dra. Fernanda Flores Alfaro",
    section: "design",
    externalLink: "https://www.behance.net/gallery/176277577/Stationery-Design-for-a-Neurologist",
    slides: [
      "/projects/em-neurology/slide_1.jpg",
      "/projects/em-neurology/slide_2.jpg",
      "/projects/em-neurology/slide_3.jpg",
      "/projects/em-neurology/slide_4.jpg"
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
    externalLink: "https://www.behance.net/gabrielaborraz",
    slides: [
       "/projects/hello-api/slide_1.jpg",
      "/projects/hello-api/slide_2.jpg"
    ],
  };
};

export const projects: Projects = {
  // Multimedia projects
  "pixelart-gniusclub" : projectPixelArtGniusClub,
  "magic-words": projectMagicWords,
  "bedtime-stories": projectBedtimeStories,
  "habib-mistery" : projectHabibMistery,
  "midot-power-kids": projectMidotPowerKids,
  "positive-actions": projectPositiveActions,
  "milly-cohen-tales": projectMillyCohenTales,
  "the-viola-journey": projectTheViolaJourney,
  "nitza-storytime": projectNitzaStorytime,
  "intorahsante":projectIntorahsante,
  // Design projects  
  "ixkik": projectIxkik,
  "em-neurology": projectEmNeurology,
  "hello-api": projectHelloAPI,
};
