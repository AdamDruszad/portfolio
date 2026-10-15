import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-theme";
const THEME_COLORS = { light: "#f4f1e8", dark: "#121318" };
const darkQuery = () => window.matchMedia?.("(prefers-color-scheme: dark)");

function savedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch { /* The toggle still works when browser storage is unavailable. */ }
  return null;
}

// Without a saved choice the site follows the operating system, like the bootstrap
// script in index.html; an explicit toggle is remembered and wins from then on.
export default function ThemeToggle() {
  const explicit = useRef(savedTheme() !== null);
  const [theme, setTheme] = useState(() => savedTheme() ?? (darkQuery()?.matches ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  useEffect(() => {
    const media = darkQuery();
    if (!media?.addEventListener) return undefined;
    const onChange = (event) => { if (!explicit.current) setTheme(event.matches ? "dark" : "light"); };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    explicit.current = true;
    setTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* Storage is optional. */ }
  }

  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} title={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
        <path className="theme-toggle__half" d="M12 3.75a8.25 8.25 0 0 1 0 16.5Z" fill="currentColor" />
      </svg>
    </button>
  );
}
