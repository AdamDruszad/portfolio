# Biró Ádám — Developer Portfolio

My portfolio as a Computer Science student at the University of Debrecen, looking for part-time remote junior frontend work. Built with React, React Router, Tailwind CSS and Vite.

[Live portfolio](https://portfolio-orpin-eight-240etcohnd.vercel.app/) · [Source](https://github.com/AdamDruszad/portfolio)

## Features

- Selected projects with separate source-code and demo links: FitAI, Text to Speech Converter, Browser Extension Manager, GameBooster and Weather App.
- Home and About routes, a shared contact section, and a not-found page.
- Mobile navigation with Escape-to-close, outside-click dismissal and focus restoration.
- Section links that work from other routes, a skip link, visible keyboard focus and reduced-motion support.
- Page-specific titles, descriptions, canonical URLs, a sitemap and a Vercel route for direct About visits.
- A generated static 404 entry with `noindex`, and a matching client-side not-found page.
- Persistent dark/light themes, including a working toggle when browser storage is unavailable.

## Run locally

Use Node.js 24.15 or newer in the Node 24 release line and npm. `.nvmrc` selects Node 24; `package.json` lists all supported Node ranges.

```bash
git clone https://github.com/AdamDruszad/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open the address printed by Vite.

```bash
npm run lint
npm test
npm run build
npm run preview
npm audit
```

The production build is generated in `dist/`. Tests use Vitest and JSDOM to check route and section navigation, menu behavior and the not-found route. They do not replace visual checks on real mobile devices.

## Content and deployment

- `src/data/projects.js`: project descriptions, technologies and links.
- `src/components/Hero.jsx` and `About.jsx`: introduction and background.
- `src/components/Contact.jsx`: contact details and profile links.
- `src/App.jsx`: routes and navigation focus.
- `src/data/site.js`: the canonical production URL and metadata for each route.
- `scripts/static-pages.js`: generates About/404 HTML metadata, `robots.txt` and `sitemap.xml` during the build.

For Vercel, use the Vite preset, `npm run build` and output directory `dist`. `vercel.json` rewrites only `/about` to its generated HTML entry; unknown URLs use Vercel's static `404.html` handling instead of receiving the home page with a 200 response. Add any future public route to both the metadata/build entries and hosting configuration. Vite's local preview keeps its own SPA fallback behavior, so verify the final HTTP status and headers on a deployment preview before release.

The existing Vercel Analytics, Speed Insights and Google Fonts integrations are retained. Keep their actual configuration and data handling reflected in any published privacy information. A local build does not update the live deployment; deploy reviewed changes through the repository's normal workflow. See `docs/AUDIT.md` for the audit scope and remaining checks.
