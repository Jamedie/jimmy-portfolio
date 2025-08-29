# Portfolio de Jimmy Gaucher 👋

![jimmy-portfolio](https://count.getloli.com/@jimmy-portfolio?name=jimmy-portfolio&theme=miku&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=0)

Ce dépôt contient le code source de mon portfolio personnel, développé avec le framework **Astro**.  
Il met en avant mes compétences et mes projets en tant que développeur spécialisé en **développement mobile (Unity)**, **web** et **réalité augmentée**.

➡️ **Site déployé** : [https://jimmygaucher.com](https://jimmygaucher.com)

---

## ✨ Caractéristiques

- **Performances optimisées** : site statique ultra-rapide grâce à Astro.
- **Design system modulable** : variables CSS, thèmes clair/sombre, composants réutilisables.
- **Multilingue (fr/en)** via fichiers JSON d’i18n.
- **SEO friendly** : balises `<SEO />` dédiées + `robots.txt`.
- **Responsive design** : adapté desktop, tablette, mobile.
- **Déploiement continu** via **Netlify**.

---

## 🛠️ Tech Stack

- **Framework** : [Astro](https://astro.build/)
- **Langages** : HTML, CSS, TypeScript
- **Gestion multilingue** : JSON i18n (`src/i18n/fr.json`, `src/i18n/en.json`)
- **Déploiement** : Netlify (`netlify.toml`)

---

## 📂 Structure du projet

```
/
├── public/                  # Fichiers statiques (favicon, images, robots.txt, redirects)
│   └── images/              # Logos & covers de projets
├── src/
│   ├── assets/              # Images globales (hero, fonds…)
│   ├── components/          # Composants Astro réutilisables
│   │   ├── common/          # Boutons, cartes projets, logo, quick access...
│   │   ├── icons/           # Icônes en TypeScript
│   │   ├── intro/           # Écran d’intro animé
│   │   └── layout/          # Header, Footer, Hero, Sections (About, Contact, Projects)
│   ├── data/                # Données (projets JSON, types TS)
│   ├── i18n/                # Traductions fr/en
│   ├── layouts/             # Layout principal
│   ├── pages/               # Pages multilingues ([lang]/index.astro)
│   └── styles/              # CSS global + polices
├── astro.config.mjs         # Configuration Astro
├── netlify.toml             # Configuration déploiement Netlify
├── tsconfig.json            # Config TypeScript
├── package.json             # Dépendances & scripts
└── ROADMAP.md               # Suivi du développement
```

---

## 🚀 Démarrage rapide

### 1. Cloner le dépôt

```bash
git clone https://github.com/[VOTRE-NOM-UTILISATEUR]/jimmy-portfolio.git
cd jimmy-portfolio
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Votre site est accessible sur : [http://localhost:4321](http://localhost:4321) 🎉

---

## ⚙️ Scripts disponibles

- `npm run dev` → Lance le serveur de développement avec HMR
- `npm run build` → Compile et optimise le site pour la production (`/dist`)
- `npm run preview` → Lance un serveur local pour prévisualiser le build

---

## 📄 Licence

Ce projet est sous licence **MIT**.
