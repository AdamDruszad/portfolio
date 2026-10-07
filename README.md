# Biró Ádám — Developer Portfolio

My portfolio as a Computer Science student at the University of Debrecen, looking for part-time remote junior frontend work. Built with React, React Router, Tailwind CSS and Vite.

[Live portfolio](https://portfolio-orpin-eight-240etcohnd.vercel.app/) · [Source](https://github.com/AdamDruszad/portfolio)

## Features

- Selected projects with separate source-code and demo links: FitAI, Text to Speech Converter, Browser Extension Manager, GameBooster and Weather App.
- Home and About routes, a shared contact section, and a not-found page.
- Mobile navigation with Escape-to-close, outside-click dismissal and focus restoration.
- Section links that work from other routes, a skip link, visible keyboard focus and reduced-motion support.
- Page titles, descriptive metadata and a Vercel rewrite for direct visits to React Router routes.

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
```

The production build is generated in `dist/`. Tests use Vitest and JSDOM to check route and section navigation, menu behavior and the not-found route. They do not replace visual checks on real mobile devices.

## Content and deployment

- `src/data/projects.js`: project descriptions, technologies and links.
- `src/components/Hero.jsx` and `About.jsx`: introduction and background.
- `src/components/Contact.jsx`: contact details and profile links.
- `src/App.jsx`: routes, page titles and navigation focus.

For Vercel, use the Vite preset, `npm run build` and output directory `dist`. `vercel.json` routes direct page requests to the SPA entry point. The existing Vercel Analytics and Speed Insights integrations are retained. A local build does not update the live deployment; deploy the reviewed changes through the repository's normal workflow.
