export type Locale = "fr" | "en";

const cache: Partial<Record<Locale, Record<string, string>>> = {};

export async function loadTranslations(
  locale: Locale
): Promise<Record<string, string>> {
  if (cache[locale]) return cache[locale]!;
  const data = await import(`../../public/locales/${locale}.json`);
  cache[locale] = data.default;
  return data.default;
}
