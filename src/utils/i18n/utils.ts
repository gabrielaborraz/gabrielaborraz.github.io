import { DEFAULT_LOCALE, LOCALES } from "../../constants";

import { ui } from "./ui";

export function getLocaleFromUrl(url: URL) {
  const [, locale] = url.pathname.split("/");

  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function useTranslations(locale: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof DEFAULT_LOCALE]) {
    return ui[locale][key] || ui[DEFAULT_LOCALE][key];
  };
}
