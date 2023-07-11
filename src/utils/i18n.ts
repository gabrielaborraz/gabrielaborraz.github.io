import { DEFAULT_LOCALE, LOCALES } from "../constants";

export const getLocaleFromUrl = (url: URL) => {
  const [, locale] = url.pathname.split("/");

  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
};
