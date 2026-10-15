# Privacy policy — factual outline (internal, NOT published)

> **What this file is.** A factual inventory of what this site actually collects, stores and
> sends, so a real privacy policy can be written on top of it. It was produced by inspecting the
> code and the live deployment on 2026-10-08, not from memory.
>
> **What this file is not.** It is not a privacy policy and it is not legal advice. It does not
> address jurisdiction-specific obligations (GDPR, CCPA, ePrivacy, etc.), it makes no claims
> about lawfulness of processing, and it has not been reviewed by a lawyer. Do not publish this
> file as-is. See "Open questions" at the end.

---

## 1. What the site is

A static, client-rendered single-page portfolio (React 19 + Vite) hosted on Vercel. There is no
server-side application code, no database, and no user accounts.

**Verified by:** `npm run build` output contains only `index.html`, hashed JS/CSS, fonts, and the
static `about.html` / `404.html` / `robots.txt` / `sitemap.xml` generated at build time.

## 2. What the site does NOT do

Each of these was checked directly in the source on 2026-10-08:

| Checked | Finding |
| --- | --- |
| User accounts / login | None. No auth, no session, no user records. |
| Data-collection forms | None. The contact section is `mailto:` links only (`src/components/Contact.jsx`). Nothing is submitted to a server. |
| Backend / API calls | None. No `fetch`, `axios` or `XMLHttpRequest` anywhere in `src/`. |
| Cookies | None set by the site. `Set-Cookie` is absent from the live response headers on `/`. |
| `sessionStorage` | Not used. |
| Third-party embeds | None. No iframes, no embedded players, no social widgets. |
| Third-party fonts | None. Manrope and Instrument Serif are self-hosted from `/fonts/` (OFL licence included in `public/fonts/`). Google Fonts was removed in commit `083746a`. |
| Advertising / trackers | None beyond the Vercel tooling in section 4. |
| Personal data input | None is requested or accepted. |

## 3. Data stored on the visitor's own device

| Item | Key | Purpose | Leaves the device? |
| --- | --- | --- | --- |
| Theme preference (`light` / `dark`) | `localStorage["portfolio-theme"]` | Remember the visitor's colour theme across visits. | **No.** It is read and written only by the browser on that device. |

Storage access is wrapped in `try/catch` (`src/components/ThemeToggle.jsx`), so the site still
works when storage is blocked. No fingerprinting or identifier is stored.

## 4. Third-party services that ARE in use

Both are Vercel first-party tooling, loaded from **this site's own origin**:

- `/_vercel/insights/script.js` — Vercel Web Analytics
- `/_vercel/speed-insights/script.js` — Vercel Speed Insights

**Verified on the live deployment (2026-10-08):** both scripts return HTTP 200 from the site's own
domain, and neither script body contains any absolute external URL — so loading them does not by
itself contact a third-party domain. Neither the page nor the scripts set a cookie.

**What they are for:**
- *Web Analytics* — aggregate page-view and traffic measurement (which pages are visited, referrer,
  coarse browser/OS/screen/country).
- *Speed Insights* — Core Web Vitals performance measurement (TTFB, FCP, LCP, INP, CLS).

**Declared behaviour of these Vercel products** (per Vercel's published documentation — this part
was *not* verified from our own code and should be re-confirmed in the dashboard, see below):
no cookies, no cross-site or cross-visitor tracking, visitor IPs anonymised, and data tied to
aggregate reporting rather than individuals.

> ⚠️ **Confirm before publishing:** log into Vercel → project → *Settings → Web Analytics* and
> *Settings → Speed Insights*, and check (a) the current data-retention period, (b) whether IP
> anonymisation / Do Not Track respect is on, (c) whether any option requiring visitor consent is
> enabled. Vercel's defaults and wording change over time; the numbers must come from the
> dashboard, not from this file.

## 5. Outbound links

The site links **out** to other sites. Following one takes the visitor off this site, where that
site's own privacy policy applies. The current set (from `src/data/site.js` and the components):

- `github.com` / `github.com/AdamDruszad`
- `www.linkedin.com`
- `fitness-app-two-tawny.vercel.app`
- `text-to-speech-converter-five-orpin.vercel.app`
- `weather-app-coral.vercel.app`
- `browser-extension-manager-theta.vercel.app`

These are ordinary `<a href>` links. The site does not embed them, does not wrap them in tracking
parameters, and receives nothing when a visitor clicks one.

Note: two of those linked apps are separate projects that have their own backends and their own
data practices. They are not covered by anything said here.

## 6. Hosting

Vercel, Inc. hosts the site and, as the hosting provider, necessarily processes connection data
(e.g. IP address, request time) to deliver it. Vercel acts as a processor/hosting provider for the
site owner. Vercel's own privacy notice should be linked from any published policy.

## 7. Children

The site is a professional portfolio and is not directed at children. No age information is
collected, because no information is collected at all beyond the analytics in section 4.

## 8. "Your rights" section — cannot be drafted here

A real policy usually tells people how to access, correct or delete their data. Because this site
stores nothing server-side about any visitor, there is nothing for the site owner to access or
delete — the only data about a visitor lives in that visitor's own browser and in Vercel's
aggregate analytics. **How to word that correctly, and whether a deletion/contact mechanism must
be offered, is a legal question and is deliberately left open.**

---

## Open questions for whoever finalises the policy

1. **Is consent required?** Depending on the jurisdictions targeted, loading analytics — even
   cookie-less, same-origin, first-party analytics — may still require prior consent or at least a
   clear notice. That is a legal determination, not a technical one.
2. **Retention period** — must be stated, and must match the Vercel dashboard (section 4).
3. **Contact route** — a published policy normally names a contact address. The obvious candidate
   is the one already on the site, but confirm that is the address to use for privacy requests.
4. **Scope of linked apps** — decide whether the policy should say explicitly that it covers only
   this portfolio and not the linked projects.
5. **Analytics off entirely** — if the answer to question 1 is "consent needed" and consent is
   unwanted, the simplest compliant option is to remove `<Analytics />` and `<SpeedInsights />`
   from `src/App.jsx` and drop the two `@vercel/*` dependencies. That is a small, reversible change
   and would make most of this document moot.

## Source references

- `src/App.jsx` — `<Analytics />`, `<SpeedInsights />` (lines 3–4, 55–56)
- `src/components/ThemeToggle.jsx` — the only storage access in the project
- `src/components/Contact.jsx`, `src/components/Navbar.jsx` — `mailto:` links, no forms
- `src/data/site.js` — canonical URL and outbound project links
- `index.html`, `vercel.json` — no third-party resources, no cookie-setting config
