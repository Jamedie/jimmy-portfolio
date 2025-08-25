export type Localized = { fr: string; en: string };

export type Project = {
  slug: string;
  year: number;
  featured?: boolean;
  title: Localized;
  description: Localized;
  tech: string[];
  links: { demo?: string; github?: string };
  cover: string;
  icon: string;
};
