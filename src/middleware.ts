import { defineMiddleware } from "astro:middleware";

// 1. Définir les langues supportées et la langue par défaut
const SUPPORTED_LANGS = ["fr", "en"];
const DEFAULT_LANG = "fr";

export const onRequest = defineMiddleware((context, next) => {
  const { url, request } = context;

  // Extrait le premier segment du chemin (ex: "fr" dans "/fr/about")
  const langFromUrl = url.pathname.split("/")[1];

  // Si l'URL contient déjà un préfixe de langue valide, on laisse Astro continuer.
  if (SUPPORTED_LANGS.includes(langFromUrl)) {
    return next();
  }

  // --- Logique de redirection pour les nouvelles visites ---

  // On détecte la langue préférée du navigateur
  const langHeader = request.headers.get("accept-language");
  let userLang = DEFAULT_LANG;

  if (langHeader) {
    // On prend la toute première langue de la liste. C'est une approche simple mais efficace.
    // "fr-FR,fr;q=0.9,en;q=0.8" -> "fr"
    const preferredLang = langHeader.split(",")[0].split("-")[0].toLowerCase();

    if (SUPPORTED_LANGS.includes(preferredLang)) {
      userLang = preferredLang;
    }
  }

  // On construit la nouvelle URL avec le préfixe de langue
  const newPath = `/${userLang}${url.pathname}`;
  const redirectUrl = new URL(newPath, url);

  // On redirige le visiteur.
  // Le code 307 (Temporary Redirect) est approprié ici.
  return Response.redirect(redirectUrl, 307);
});
