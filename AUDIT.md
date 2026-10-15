# Portfolio audit and redesign — 2026-10-15

Scope: the whole frontend (`src/`, `index.html`, `scripts/static-pages.js`, `vercel.json`).
Baseline: `codex/frontend-fixes-20261007-141014` @ `ae7962e` (which already includes the
technical audit passes in [`docs/AUDIT.md`](docs/AUDIT.md)). The redesign is on branch `redesign`.
The content contract is [`REDESIGN_INVENTORY.md`](REDESIGN_INVENTORY.md).

Evidence sources:
- Screenshots: `docs/redesign-screenshots/before/*.png` and `after/*.png` (390px and 1440px,
  dark and light themes). They are kept out of git through `.git/info/exclude`.
- A measurement script walks every visible, non-`aria-hidden` text node and reports font size,
  WCAG contrast against the resolved background, link/button target sizes, the heading outline
  and horizontal overflow (`.claude/tools/portfolio-audit.mjs` in the workspace root).
- `npm test`, `npm run lint`, `npm run build` and `npm audit`.

## Baseline facts

| Check | Result |
|---|---|
| Tests / lint / build / `npm audit` | 13 passed / clean / ok / 0 vulnerabilities |
| JS bundle | 259.33 kB (81.68 kB gzip): React, React DOM, React Router, Vercel Analytics + Speed Insights |
| CSS bundle | 34.19 kB (8.30 kB gzip) |
| Fonts | 4 self-hosted woff2 files, 74 kB in total; no preload |
| Images | none (all artwork is inline SVG or HTML/CSS) |
| Horizontal overflow | 0 px at 390 and 1440, both themes, all routes |
| Contrast failures | 0 (both themes) |
| Targets under 24 px | 0 |
| **Visible text under 12 px** | **home 58% at 390px (69 of 119 nodes; 42 of them 9px), 49% at 1440px**; About 37–39%; 404 39–43% |
| Page height at 390 px | home 5,348 px, About 2,279 px |

## Scores — before

| Area | Score | Evidence |
|---|---|---|
| Visual design & consistency | **6** | Cohesive ivory/ink/lime palette and confident display type. However, the look is a widely used "editorial dark + lime + serif-italic word" template: the serif italic swap repeats in 7 headings (Hero.jsx:16, Projects.jsx:23, Intro.jsx:6, Contact.jsx:8, About.jsx:9/11/17). The hero's largest element is generic `</>` clip-art inside orbit ellipses (BrandVisual.jsx:6-15) that says nothing about the work. In light mode the featured FitAI card and the whole contact footer stay near-black (index.css:170, :290), producing hard jumps. |
| UX & navigation | **7** | Clear three-route IA, a skip link, working hash navigation and focus management (App.jsx:14-30), and back links. Weak points: the shared footer says "03 /" on About and 404, where no 01/02 exist (Contact.jsx:7). The only contact path is `mailto:`, which does nothing for webmail users and offers no copy option. Duplicate adjacent links: two mailto links side by side (Contact.jsx:8-9), and "Scroll to discover" repeats "Explore my work" (Hero.jsx:19/27). |
| Responsiveness / mobile | **7** | No overflow from 320 to 1440 px and real layout changes per breakpoint. But mobile type is tiny (42 text nodes at 9px on the home page), the home page is 5,348 px tall at 390 px, and about 130 lines of breakpoint overrides patch individual pixel values (index.css:340-490). |
| Accessibility | **7** | Strong foundations: skip link, `:focus-visible` rings, disclosure semantics with Escape/outside-click handling (Navbar.jsx:13-34), reduced-motion support, 0 contrast failures, and 44 px targets. Main issue: legibility. About half of all text is 8–11px monospace caps with wide tracking (`.eyebrow` 11px, `.availability` 10px, footer 9px; index.css:102, 117, 307), which low-vision and mobile readers struggle with. The theme ignores `prefers-color-scheme` and forces dark on first visit (index.html:11, ThemeToggle.jsx:9). |
| Performance | **7** | No images, self-hosted fonts with `font-display: swap`, and 8 kB gzip CSS. But 81.7 kB gzip of JS for three static routes. The fonts are not preloaded, so the 114px headline repaints when Manrope arrives. Nothing is code-split. (Lighthouse not measured; these are bundle facts.) |
| Code quality & structure | **6** | Lint is clean, there are 13 behavioural tests, and route metadata is centralised. Against that: 17 JSX lines exceed 200 characters (Contact.jsx:10 is 626), which makes diffs unreadable. Content is split between data and components: project categories (Projects.jsx:19), FitAI's tagline (:29) and numbering (`0{index + 2}`, :38) are hard-coded. Tailwind is imported but not one utility class is used (index.css:1), so it is only a CSS reset. One 494-line stylesheet holds magic numbers, and the email address is repeated in 4 places. |
| SEO basics | **7** | Per-route titles, descriptions, canonical URLs, robots directives and Open Graph text. Static `about.html`/`404.html`, a sitemap and `robots.txt` (scripts/static-pages.js). Missing: `og:image`/Twitter card (links shared on LinkedIn get a bare preview), `og:site_name`, and structured data. The `<title>` says "Full-Stack Developer" (site.js:3) while the page itself says "Frontend developer" (Hero.jsx:11) and the README says junior frontend. |
| Security red flags | **8** | No secrets in the repo; every `target="_blank"` has `noopener noreferrer`; no forms or user input. Reported only: the CSP in `vercel.json` sets just `base-uri`, `object-src` and `frame-ancestors`, with no `script-src`/`style-src`. The email address is published in plain text (intentional, but it will attract spam). |

## Top 10 problems, ranked by impact

1. **Micro-typography everywhere.** 49–58% of visible home-page text is under 12px. Why it matters: recruiters skim; 9–11px monospace caps are the labels that carry structure (section names, availability, categories), so the scaffolding of the page is the hardest part to read, especially on phones.
2. **The hero is spent on generic artwork.** The `</>`-in-orbits graphic fills about 45% of the first screen and is decorative clip-art. Why it matters: the first screen is the only one many visitors see, and it shows nothing specific about Adam or his work.
3. **A template visual identity.** Dark + lime + serif-italic word swaps is a familiar 2024 portfolio formula, repeated in 7 headings. Why it matters: a portfolio is itself a design sample; borrowed polish reads as borrowed.
4. **Dark slabs in light mode.** The featured project and footer ignore the theme. Why it matters: light-mode visitors get two abrupt full-width inversions, and the theme toggle feels half-finished.
5. **The theme ignores the OS preference.** Why it matters: first-time visitors who prefer light (or need it for glare or astigmatism) get dark until they find the toggle.
6. **Contact is mailto-only, with redundant links.** Why it matters: contact is the conversion goal, and `mailto:` silently fails without a configured mail client. Duplicate links add tab stops and noise.
7. **Hard-to-maintain components.** 200–600-character JSX lines and content hard-coded in components. Why it matters: adding a project or changing a category means editing markup, and reviews of small changes are unreadable.
8. **No social preview image or structured data.** Why it matters: job hunting happens on LinkedIn and in messages, where a link without an image is easy to scroll past; structured data helps search engines tie the name to the site.
9. **A long mobile page.** 5,348 px at 390px, about 1,400px of it decorative illustrations. Why it matters: the contact section sits behind about six screens of scrolling.
10. **Inconsistent role in the title.** "Full-Stack Developer" in the `<title>` versus "Frontend developer" on the page. Why it matters: the search result and the page contradict each other. *Not changed:* this is a factual claim the owner must decide (see "Owner action items").

## Redesign direction — "Lab notebook"

Adam presents himself as a student who is "a work in progress, in the best way" and "always
curious, always building". The new direction leans into that instead of borrowing a studio aesthetic:
the site reads like a well-kept engineering notebook.

- **Ground:** warm paper with a faint graph grid behind the hero artwork only. Dark mode is the same notebook at night (blue-black paper, chalky ink), not a different palette.
- **Colour:** paper / ink / graphite / rule, plus two marks that work like a pen and a highlighter. Blue ink is for everything you can act on (links, buttons, focus). A highlighter stroke replaces the serif-italic word swap on the emphasised word of each heading. No other colours appear outside the project illustrations, which keep each project's own UI colours.
- **Type:** Bricolage Grotesque (variable, with optical sizing) for headings and text, and JetBrains Mono for margin notes (section numbers, categories, meta). A 1.25-ratio fluid scale with **no visible text below 12px**; body text is 17px.
- **Layout:** a left margin column on desktop carries the annotations (section numbers, categories, availability), the way notes sit in a notebook margin. On mobile the notes move inline above each heading. Projects are numbered entries with a spec line (stack) and their links.
- **Hero artwork:** the clip-art is redrawn as a "sketch → interface" figure (a dashed wireframe becomes a finished card) that literally illustrates "Ideas into interfaces". It keeps the original captions.
- **Motion:** highlighter strokes draw in once, cards lift 2px on hover, and press states compress slightly. Everything is disabled under `prefers-reduced-motion`.
