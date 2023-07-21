import type { Locale } from "./types";
import { DEFAULT_LOCALE } from "./constants";

const localizePath = ({ locale, path }: { locale?: Locale; path: string }) => {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
};

export const routes = {
  root: ({ locale }: { locale: Locale }) => {
    const path = "/";

    return localizePath({ locale, path });
  },
  about: ({ locale }: { locale: Locale }) => {
    const path = "/about";

    return localizePath({ locale, path });
  },
  portfolio: {
    root: ({ locale }: { locale: Locale }) => {
      const path = "/portfolio";

      return localizePath({ locale, path });
    },
    design: ({ locale }: { locale: Locale }) => {
      const path = "/portfolio/design";

      return localizePath({ locale, path });
    },
    multimedia: ({ locale }: { locale: Locale }) => {
      const path = "/portfolio/multimedia";

      return localizePath({ locale, path });
    },
    project: ({ project, locale }: { project: string; locale: Locale }) => {
      const path = `/portfolio/${project}`;

      return localizePath({ locale, path });
    },
  },
  // blog: {
  //   root: ({ locale }: { locale: Locale }) => {
  //     const path = "/blog";

  //     return localizePath({ locale, path });
  //   },
  //   post: ({ slug, locale }: { slug: string; locale: Locale }) => {
  //     const path = `/blog/${slug}`;

  //     return localizePath({ locale, path });
  //   },
  // },
  faq: ({ locale }: { locale: Locale }) => {
    const path = "/faq";

    return localizePath({ locale, path });
  },
  contact: ({ locale }: { locale: Locale }) => {
    const path = "/contact";

    return localizePath({ locale, path });
  },
};
