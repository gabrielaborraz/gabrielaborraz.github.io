import { home } from "./ui/home";
import { portfolio } from "./ui/portfolio";
import { blog } from "./ui/blog";
import { about } from "./ui/about";
import { faq } from "./ui/faq";
import { contact } from "./ui/contact";
import { projects } from "./ui/projects";
import { navigation } from "./ui/navigation";
import { footer } from "./ui/footer";

export const ui = {
  es: {
    ...home.es,
    ...about.es,
    ...portfolio.es,
    ...blog.es,
    ...faq.es,
    ...contact.es,
    ...projects.es,
    ...navigation.es,
    ...footer.es,
  },
  en: {
    ...home.en,
    ...about.en,
    ...portfolio.en,
    ...blog.en,
    ...faq.en,
    ...contact.en,
    ...projects.en,
    ...navigation.en,
    ...footer.en,
  },
} as const;
