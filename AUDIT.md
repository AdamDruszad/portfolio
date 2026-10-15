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

---

## After the redesign — verification (2026-10-15)

Measured with the same scripts, routes, widths and themes as the baseline.
Screenshots: `docs/redesign-screenshots/after/{light,dark}-{home,about,does-not-exist}-{390,1440}.png`
(the baseline's unprefixed files are the dark default; `light-*` are its light theme).

| Check | Before | After |
|---|---|---|
| Tests / lint / build / `npm audit` | 13 / clean / ok / 0 | **18** / clean / ok / 0 |
| Browser interaction checks (real Edge) | — | **26/26** (`.claude/tools/portfolio-interactions.mjs`) |
| **Visible text under 12px** (home, 390 / 1440) | **58% / 49%** | **0% / 0%** (every route, both themes) |
| Smallest visible text | 8px | 12px (figure captions, footer credit) |
| Body copy size | 12–15px | 16–17px fluid |
| Contrast failures | 0 | 0 (after fixing a separator regression, see below) |
| Targets under 24px | 0 | 0 |
| Horizontal overflow | 0 | 0 |
| First Tab reaches the skip link | **no** (focus started inside `<main>`) | yes |
| Page height, home at 390 / 1440 | 5,348 / 3,900 px | 5,933 / 4,364 px |
| JS (gzip) | 81.68 kB | 82.42 kB |
| CSS (gzip) | 8.30 kB | 8.78 kB |
| Fonts per visit (latin subsets) | 47 kB, no preload | 117 kB, display face preloaded |
| Social preview image / structured data | none / none | 1200×630 PNG (74 kB) / Person JSON-LD |
| JSX lines over 200 characters | 17 (max 626) | 2 (both are prose paragraphs in About.jsx) |

## Scores — after

| Area | Before | After | Evidence |
|---|---|---|---|
| Visual design & consistency | 6 | **8** | One token system (index.css `:root` / `[data-theme="dark"]`) drives both themes; no inverted slabs in light mode. The identity is specific to the content ("lab notebook": margin notes, highlighter, numbered entries, sketch-to-interface hero). Remaining: the project figures are still hand-built miniature mock-ups, not real screenshots of the projects. |
| UX & navigation | 7 | **8** | Copy-email fallback, route-aware section numbering, the first Tab reaches the skip link, and the theme respects the OS. The header nav aligns with the content column. Remaining: the duplicate mailto pair and "Scroll to discover" were kept because they are in the inventory contract. |
| Responsiveness / mobile | 7 | **8** | Mobile-first stylesheet with six breakpoints instead of desktop-first pixel overrides; 0 px overflow at 390 and 1440; nothing under 12px. Remaining: the mobile home page is 11% taller (5,933 px) because body text grew from 12–13px to 16–17px. Contact is one tap away from the menu. |
| Accessibility | 7 | **9** | 0% sub-12px text, 0 contrast failures in both themes, and a focus ring on every tab stop. First-load focus is fixed (App.jsx `NavigationEffects`). Figure disclaimers are real `<figcaption>`s, the copy result is announced via `role="status"`, and reduced motion is honoured (verified). Remaining: decorative text inside the `aria-hidden` illustrations is still miniature. |
| Performance | 7 | **7** | JS and CSS are essentially unchanged (+0.7 kB / +0.5 kB gzip), and the display font is now preloaded, so the headline no longer repaints late. The trade-off is font weight, about 2.5× (117 kB): Bricolage's optical-size axis plus a real monospace. Switching to Bricolage's weight-only file would save about 36 kB at some cost to small-size rendering. |
| Code quality & structure | 6 | **8** | Content lives in `src/data/` (projects with category, tagline and caption; profile with email, socials and skills), with shared primitives in `components/ui.jsx`. The email literal appears once in `src` (plus the static `noscript` and JSON-LD in index.html). Readable JSX; tests cover the new behaviour. Remaining: Tailwind still contributes only the reset and `@theme` tokens, and no utilities are used. The stylesheet is longer (864 formatted lines) but token-driven. |
| SEO basics | 7 | **9** | Adds `og:image` + dimensions + alt, `og:site_name`, `twitter:card`, and Person JSON-LD (verified to parse). The static builder no longer duplicates sharing tags (new test). Remaining: the title/hero role mismatch (owner decision, below) and client-rendered body content. |
| Security red flags | 8 | **8** | No change to `vercel.json`, no new third parties, and every new-tab link is `noopener noreferrer` (12 checked). The JSON-LD repeats the already-public email address. |

### Regression caught during verification
The first after-measurement found the "/" separators at 1.97:1 (light) and 2.13:1 (dark). The new
design had coloured them with the rule token, undoing a fix from the 2026-10-08 audit. They now use
the graphite text token: 6.3:1 light and 6.8:1 dark.

## Biggest improvements
1. Readability: no visible text under 12px (from about half of all text), with 16–17px body copy.
2. A distinct, content-specific identity instead of a template look, consistent across both themes.
3. Keyboard users land on the skip link first (a pre-existing focus bug, fixed and covered by a test).
4. Contact works without a mail client (Copy button), and section numbering makes sense on every route.
5. Links shared on LinkedIn and in messages now get a preview card, and search engines get Person data.

## Not done or not verified
- Not tested on physical phones or in Safari/Firefox; all browser checks used Microsoft Edge (Chromium).
- Lighthouse and field performance were not measured; the numbers above are bundle and font sizes.
- Hosting behaviour (real 404 status, headers) can only be confirmed on a Vercel preview deployment.

## Owner action items (not changed, by design)
- **Role in the title.** `src/data/site.js:3` says "Full-Stack Developer"; the hero, JSON-LD and README say frontend. Pick one; the title feeds every search result and the sitemap entries.
- **CSP.** `vercel.json` sets only `base-uri`, `object-src` and `frame-ancestors`. A `script-src`/`style-src` policy would need the inline theme bootstrap and the JSON-LD hashed, or moved to files, and then testing against Vercel Analytics.
- **Font budget.** If the 117 kB of fonts matters more than optical sizing, swap `bricolage-grotesque-latin.woff2` for Fontsource's `wght` file (41 kB).
