import type { Locale } from "./types";
import { DEFAULT_LOCALE } from "./constants";

export const routes = {
  root: ({ locale }: { locale: Locale }) => {
    return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
  },
  about: ({ locale }: { locale: Locale }) => {
    const path = "/about";

    return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
  },
  portfolio: {
    root: ({ locale }: { locale: Locale }) => {
      const path = "/portfolio";

      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
    },
    design: ({ locale }: { locale: Locale }) => {
      const path = "/portfolio/design";

      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
    },
    multimedia: ({ locale }: { locale: Locale }) => {
      const path = "/portfolio/multimedia";

      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
    },
    project: ({ project, locale }: { project: string; locale: Locale }) => {
      const path = `/portfolio/${project}`;

      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
    },
  },
  blog: {
    root: ({ locale }: { locale: Locale }) => {
      const path = "/blog";

      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
    },
    post: ({ slug, locale }: { slug: string; locale: Locale }) => {
      const path = `/blog/${slug}`;

      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
    },
  },
  faq: ({ locale }: { locale: Locale }) => {
    const path = "/faq";

    return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
  },
  contact: ({ locale }: { locale: Locale }) => {
    const path = "/contact";

    return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
  },
};
