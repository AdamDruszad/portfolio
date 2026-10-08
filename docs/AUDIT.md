# Portfolio audit — 2026-10-08

Scope: the existing React/Vite portfolio, its route metadata, public links,
accessibility foundations, production bundle, dependencies and Vercel configuration.
The approved ivory/dark/lime visual design and project content were retained.

## Findings addressed

| Priority | Finding | Change and evidence |
| --- | --- | --- |
| High dependency advisories | The lockfile reported 12 vulnerable packages, including 9 high-severity findings. Most concern build tooling; the static site does not expose the server-only React Router features cited by several advisories. | Compatible `npm audit fix --ignore-scripts` updates only; no major version upgrades. `npm audit` now reports 0. Vite is 8.3.3 and React Router is 7.18.4. |
| Medium | Dark-mode keyboard skip link and selected text inherited pale text on a lime background. | Fixed the foreground to dark ink while preserving the design colors. |
| Medium | The live site returned HTTP 200 for a deliberately nonexistent URL; unknown routes were indistinguishable to the host from real pages. | Removed the blanket rewrite, generated a static `404.html`, and added `noindex` with no canonical URL. Hosting status needs confirmation after deployment. |
| Medium | About and missing pages inherited home-page metadata in the initial HTML. Client-side navigation changed only the title. | Central metadata now drives build entries and navigation updates. Descriptions, Open Graph text, canonical URLs and robots directives stay aligned with the route. |
| Low | Missing crawler discovery and basic response hardening. | Build generates `robots.txt` and a two-route sitemap. Vercel configuration adds MIME sniffing protection, restricted referrer detail, unused hardware-permission restrictions and a limited CSP for base URLs, plugin objects and embedding. |

## Verification

- Baseline: 7 tests, build and lint passed. Final: **12 tests, build and lint passed**.
- Added coverage for metadata changes, canonical de-duplication, noindex recovery,
  static About/404 entries and blocked browser storage.
- Final `npm audit`: **0 findings**. This is a registry check, not a guarantee that
  all application behavior is secure.
- All 10 portfolio/project/source HTTP checks returned 200. No external account,
  authentication, project data or production deployment was modified.
- Built HTML verified for home, About and 404. The 404 entry has no canonical URL
  and includes `noindex, follow`; app asset references remain intact.
- JavaScript: **259.32 kB / 81.67 kB gzip**, versus 260.31 / 81.72 before fixes.
  CSS: **34.13 kB / 8.22 kB gzip**, versus 34.11 / 8.21. These are bundle sizes,
  not Lighthouse scores or field performance measurements.
- No tracked `.env` or private-key files found by filename inspection.

## Release and future checks

- On the deployment preview, verify `/`, `/about`, `/about/`, a missing route and
  a missing asset. Unknown paths should return 404; About should return 200.
  Local Vite preview's SPA fallback does not emulate Vercel's status handling.
- Check the new response headers on that preview, including any intentional
  third-party embedding use case. The CSP is deliberately limited and does not
  restrict scripts/styles without a separately tested policy.
- Keep `src/data/site.js` aligned with the production domain when introducing a
  custom domain. Only home and About belong in the sitemap.
- Browser rendering still supplies page content. HTML entries include initial
  metadata, but they are not a full server-rendering migration. Social previews
  currently have text metadata, with no custom raster sharing card.
- Vercel Analytics and Speed Insights remain enabled. Review their deployed
  configuration and describe the actual data handling in the site's privacy
  information. Fonts are now self-hosted, so Google no longer receives a request.
  This audit does not make a legal compliance determination.
- Final cross-device browser inspection is coordinated with the main redesign
  task; these automated checks do not certify every mobile layout or interaction.

Hosting behavior follows Vercel's [custom 404 documentation](https://vercel.com/kb/guide/custom-404-page)
and [configuration reference](https://vercel.com/docs/project-configuration/vercel-json).

## Second pass — 2026-10-08

Browser-driven re-check of the first pass plus new findings. The approved visual
design and all project content were retained.

| Priority | Finding | Change and evidence |
| --- | --- | --- |
| Medium | The shared footer's "Back to top" link targeted `/#main-content`. On `/about` and unknown routes it navigated to the home page instead of scrolling the current page. | Changed to a route-relative `#main-content`. Verified in a real browser: `/about` now stays on `/about#main-content`, `scrollY` returns to 0, focus lands on `main-content`, and the About `h1` is unchanged. Covered by a new regression test. |
| Medium | Two decorative text separators failed WCAG AA on the light theme: `.eyebrow-separator` at 2.65:1 and the "/" between project technology tags at 2.66:1. | Both now use the existing `--muted` token: 5.18:1 light and 7.57:1 dark. No new colors were introduced. |
| Low | `theme-color` was hardcoded to the dark value while the inline bootstrap script could select the light theme, so light-theme visitors first painted with a dark browser chrome colour. | The meta element now precedes the bootstrap script, which sets both `data-theme` and `theme-color` together. |
| Low | Google Fonts supplied Manrope and Instrument Serif from two third-party origins on every page view. | Fonts are self-hosted from `public/fonts` (the same woff2 files, latin and latin-ext subsets, with OFL licence files alongside). The `<link>` and `preconnect` elements are gone; measured Google requests: 0. |
| Low | `public/favicon2.svg` (155 KB) was copied into every deploy but referenced nowhere, and four `src/assets` files were never imported. | All five removed. |

### Second-pass verification

- **Tests 13, lint clean, build clean, `npm audit` 0 findings.**
- Measured at true widths 320, 360, 767, 1024 and 1440 across `/`, `/about` and an
  unknown route, in both themes: no horizontal overflow, no element extending past
  the viewport, exactly one `h1` per page.
- Accessibility sweep per route: no duplicate ids, no unnamed links or buttons, no
  in-page anchors without a target, no `target="_blank"` without
  `noopener noreferrer`, no focusable elements inside `aria-hidden`, no unlabelled
  form fields, no nav/footer targets under 24 px, no exposed decorative SVGs.
- Contrast: 0 failures over 18–100 text nodes per route per theme; lowest observed
  ratio 4.68:1 (light theme). The two separator pseudo-elements measure 5.18:1 light
  and 7.57:1 dark.
- Fonts: Manrope 400–800 is served as a working variable face (measured 531.1 px at
  400 vs 566.5 px at 800 for the same string, deterministic), Instrument Serif
  italic applies to `em`, and the latin-ext subset loads on demand for Hungarian
  characters. Neither font falls back to Georgia.
- Only two console messages appear, both from `vite preview` lacking Vercel's
  reserved `/_vercel/*` endpoints; the deployed site serves real scripts at both
  paths (verified directly). No application-level console errors.
- Still not verified here: browser back/forward scroll restoration, and the
  deployed `404` status code, which only the live Vercel deployment can confirm.
