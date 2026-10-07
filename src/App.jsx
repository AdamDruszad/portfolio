import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Intro from "./components/Intro";
import Arrow from "./components/Arrow";

function NavigationEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    document.title = `${pathname === "/about" ? "About | " : pathname === "/" ? "" : "Page not found | "}Biró Ádám — Frontend Developer`;
    let anchor = "";
    try { anchor = decodeURIComponent(hash.slice(1)); } catch { /* An invalid hash falls back to the page start. */ }
    const target = anchor ? document.getElementById(anchor) : null;
    if (target) {
      target.scrollIntoView({ block: "start" });
      target.focus({ preventScroll: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname, hash, key]);
  return null;
}

function NotFound() {
  return <section className="not-found page-shell">
    <p className="eyebrow">404 / A small detour</p>
    <h1>Page not found</h1>
    <p>That page does not exist. You can find my projects on the home page.</p>
    <Link className="button button--dark" to="/">Back to home <Arrow /></Link>
  </section>;
}

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <NavigationEffects />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<><Hero /><Projects /><Intro /></>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Contact />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}
