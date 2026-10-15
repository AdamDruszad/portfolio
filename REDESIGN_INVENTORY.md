# Redesign inventory — portfolio

Baseline: branch `codex/frontend-fixes-20261007-141014` @ `ae7962e`, captured 2026-10-15.
This file is the contract for the redesign. Every item must exist and work afterwards.
Status column is filled in during verification (step 5).

Stack: React 19 + React Router 7 (`BrowserRouter`) + Vite 8 + Tailwind 4 (imported, styled with
hand-written CSS in `src/index.css`) + Vercel Analytics/Speed Insights. No backend, no forms, no auth.
Content lives in `src/data/projects.js`, `src/data/site.js` and the components.

## 1. Routes

| # | Route | What renders | Status |
|---|---|---|---|
| R1 | `/` | Hero, Selected work, Intro, shared Contact footer | |
| R2 | `/about` (case-sensitive) | About page + shared Contact footer | |
| R3 | `*` (any other path) | Not-found page + shared Contact footer | |
| R4 | Build output | `about.html` and `404.html` with route metadata, `robots.txt`, `sitemap.xml` (scripts/static-pages.js) | |
| R5 | `vercel.json` | `/about` rewrite, `/about/`, `/about.html`, `/index.html` redirects, security headers (unchanged) | |

## 2. Global chrome (every route)

| # | Item | Status |
|---|---|---|
| G1 | Skip link "Skip to content" → `#main-content` (focusable `main`, `tabIndex=-1`) | |
| G2 | Sticky header with wordmark "a/d." linking to `/` (accessible name "Adam Biró home") | |
| G3 | Desktop nav: Projects (`/#projects`), About (`/about`, active state), Contact (`/#contact`) | |
| G4 | Theme toggle button (sun/moon icon; label "Switch to light/dark mode"; persisted in `localStorage["portfolio-theme"]`; works when storage throws) | |
| G5 | "Let's talk" mailto link to adambiro2008@gmail.com | |
| G6 | Mobile menu toggle ("Menu"/"Close", `aria-expanded`, `aria-controls="mobile-navigation"`) | |
| G7 | Mobile menu: closes on Escape (focus returns to toggle), outside pointer-down, link click, resize to ≥768px | |
| G8 | Inline bootstrap script in `index.html` applies saved theme and `theme-color` before paint | |
| G9 | `<noscript>`: "This portfolio requires JavaScript. Contact me at adambiro2008@gmail.com or visit github.com/AdamDruszad." | |
| G10 | Navigation effects: route change updates title/meta; hash links scroll to and focus the target; otherwise scroll to top and focus `main` | |
| G11 | Vercel `<Analytics />` and `<SpeedInsights />` mounted | |
| G12 | Favicon `/favicon.svg`; self-hosted fonts with OFL licence files | |
| G13 | Reduced-motion support (no smooth scroll / transitions) | |

## 3. Home `/`

### Hero
| # | Item | Status |
|---|---|---|
| H1 | Eyebrow "Ádám Biró / Frontend developer" | |
| H2 | Availability "Open to part-time remote work" with status dot | |
| H3 | `h1` "Ideas into interfaces." (+ decorative ✳) | |
| H4 | Description "Hey, I'm Adam. A curious developer building thoughtful web experiences, one detail at a time." | |
| H5 | Primary CTA "Explore my work" → `/#projects` | |
| H6 | Secondary link "A little about me" → `/about` | |
| H7 | Brand visual (decorative, `aria-hidden`): "IDEAS → INTERFACES", "↗", code-bracket artwork, "LOGIC MEETS / A LITTLE CURIOSITY.", signature "a/d." | |
| H8 | Footnote "Based in Debrecen, Hungary" / "CS student at the University of Debrecen" | |
| H9 | "Scroll to discover" link → `/#projects` | |
| H10 | Toolkit strip "My everyday toolkit": React, JavaScript, HTML & CSS, Tailwind, Python, FastAPI, SQL, Git (list labelled "Technical skills") | |

### Selected work (`#projects`, focusable)
| # | Item | Status |
|---|---|---|
| P1 | Eyebrow "01 / Selected work", `h2` "What I've built.", aside "A few things I've turned from “what if” into something you can use." | |
| P2 | Featured FitAI (01, "Full-stack application"): title "FitAI.", tagline "A smarter way to show up.", description, tech React/JavaScript/FastAPI/PostgreSQL, Live demo (fitness-app-two-tawny.vercel.app), Source code (github.com/AdamDruszad/fitness-app), note "Account required" | |
| P3 | FitAI illustration: FitAI wordmark, mock window "FitAI / Your plan", sidebar (Your plan, Workout log, AI coach, "YOUR NEXT REP STARTS HERE."), dashboard ("LET'S GET MOVING", "Your plan", "Today's workout / Upper body / Strength & conditioning · 5 exercises / Start your workout", "This week's plan" MON Upper body, WED Lower body, FRI Full body), caption "INTERFACE PREVIEW · SAMPLE WORKOUT" | |
| P4 | Text to Speech Converter (02, "Browser-based tool"): description, tech JavaScript/Web Speech API/Tailwind CSS/Vite, Live demo (text-to-speech-converter-five-orpin.vercel.app), Source code | |
| P5 | TTS illustration: soundwave, "A voice for every word.", "Text to Speech / Powered by the Web Speech API", "Aa → ♪", caption "BROWSER AUDIO / JAVASCRIPT" | |
| P6 | Browser Extension Manager (03, "Frontend development"): description, tech HTML/CSS Grid/JavaScript, Live demo (browser-extension-manager-theta.vercel.app), Source code | |
| P7 | Extensions illustration: header "Extensions", "Extensions list", "All / Active", DevLens, StyleSpy, SpeedBoost, JSONWizard with descriptions, Remove, toggles, caption "RESPONSIVE UI / FRONTEND MENTOR" | |
| P8 | "More experiments, same curiosity" list | |
| P9 | GameBooster (04, "Desktop application"): description, tech Python/CustomTkinter/PyInstaller, Source code only (no demo) | |
| P10 | Weather App (05, "API & JavaScript"): description, tech HTML/CSS/JavaScript/REST API, Live demo (weather-app-coral.vercel.app), Source code | |
| P11 | Every external project link opens in a new tab with `rel="noopener noreferrer"` and an accessible name ("Open X live demo in a new tab", "View X source on GitHub in a new tab") | |
| P12 | "More projects and learning exercises on GitHub" → github.com/AdamDruszad?tab=repositories | |

### Intro
| # | Item | Status |
|---|---|---|
| I1 | Eyebrow "02 / The person behind the pixels", `h2` "Always curious. Always building." | |
| I2 | Link "More about me" → `/about` | |
| I3 | Copy: "I'm Adam, a Computer Science student at the University of Debrecen. I like figuring out how things work — and making them work a little better." and "My focus is frontend development with React and JavaScript. When a project needs more, I connect the dots with Python, FastAPI and SQL." | |
| I4 | Note with status dot: "Looking for a team to learn with" / "Open to part-time remote frontend work" | |

## 4. Shared contact footer (`#contact`, focusable, on every route)
| # | Item | Status |
|---|---|---|
| C1 | Eyebrow "03 / Have something in mind?" and availability "Let's make it happen" | |
| C2 | `h2` "Good things start with a conversation." | |
| C3 | Large arrow mailto link (label "Email Adam to start a conversation") | |
| C4 | Email link "adambiro2008@gmail.com" (mailto) | |
| C5 | "Have an opportunity, an idea, or just want to say hi? I'd love to hear from you." | |
| C6 | Footer wordmark "a/d." → `/` | |
| C7 | "© {current year} Ádám Biró" and "Built with care. And React." | |
| C8 | GitHub (github.com/AdamDruszad) and LinkedIn (linkedin.com/in/ádám-biró-75437b402) links, new tab, noopener | |
| C9 | "Back to top" → `#main-content` on the current route (does not navigate home) | |

## 5. About `/about`
| # | Item | Status |
|---|---|---|
| A1 | "Back to home" link → `/` | |
| A2 | Eyebrow "A little introduction", `h1` "About me", aside "Developer. Student. A work in progress, in the best way." | |
| A3 | Compact brand visual (same artwork/text as H7) | |
| A4 | Lead "Curiosity brought me here. Building keeps me going." | |
| A5 | Three story paragraphs (second-year CS student, BSc started 2025; React/JS/Tailwind and FitAI with FastAPI + PostgreSQL; smaller projects + GameBooster) | |
| A6 | Link "Take a look at my work" → `/#projects` | |
| A7 | Aside "Education and skills": `h2` "A little more context." with dl: 01 Based in Debrecen, Hungary; 02 Education BSc Computer Science, University of Debrecen · 2025 – present; 03 Training Linux Essentials, Cisco Networking Academy · 2025; 04 Languages Hungarian Native, English Intermediate, Ukrainian Basic | |
| A8 | Opportunity box with status dot: "I'm looking for part-time remote frontend work where I can contribute to a product and develop my skills in a team." + link "Let's connect" → `/#contact` | |

## 6. Not found `*`
| # | Item | Status |
|---|---|---|
| N1 | Eyebrow "404 / A small detour", `h1` "Page not found", copy "That page does not exist. You can find my projects on the home page." | |
| N2 | Button "Back to home" → `/` | |
| N3 | `robots` = "noindex, follow" and no canonical while on this route; restored on navigation home | |

## 7. Metadata (src/data/site.js)
| # | Item | Status |
|---|---|---|
| M1 | Per-route `title`, `description`, `robots`, `og:title`, `og:description`, `og:type`, canonical + `og:url` (none on 404) | |
| M2 | Single copy of each tag after client-side navigation | |

## 8. UI states
This is a static portfolio: there is no data fetching, so no loading, empty, error or success
states exist beyond the ones below.

| # | State | Status |
|---|---|---|
| S1 | Dark theme / light theme (both complete) | |
| S2 | Mobile menu open / closed | |
| S3 | Active nav item: About on `/about`; Projects/Contact `aria-current="location"` when their hash is active | |
| S4 | Hover/focus-visible states on every link and button | |
| S5 | Project without a live demo (GameBooster) shows only Source code | |
| S6 | Project with a demo note (FitAI "Account required") | |
| S7 | JavaScript disabled → noscript message | |
| S8 | Storage blocked → theme toggle still works | |
