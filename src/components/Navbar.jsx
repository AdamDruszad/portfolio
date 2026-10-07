import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Arrow from "./Arrow";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const { pathname, hash } = useLocation();
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setIsOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onDesktop = (event) => { if (event.matches) setIsOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    media.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      media.removeEventListener("change", onDesktop);
    };
  }, [isOpen]);

  function links() {
    return <>
      <li><Link to="/#projects" onClick={close} aria-current={pathname === "/" && hash === "#projects" ? "location" : undefined}>Projects</Link></li>
      <li><NavLink to="/about" onClick={close}>About</NavLink></li>
      <li><Link to="/#contact" onClick={close} aria-current={hash === "#contact" ? "location" : undefined}>Contact</Link></li>
    </>;
  }

  return (
    <header className="site-header">
      <nav ref={navRef} aria-label="Main navigation" className="navbar page-shell">
        <Link to="/" onClick={close} aria-label="Adam Biró home" className="wordmark">a<span>/</span>d<span className="wordmark-dot">.</span></Link>
        <ul className="desktop-navigation">{links()}</ul>
        <div className="nav-actions"><ThemeToggle /><a className="nav-contact" href="mailto:adambiro2008@gmail.com">Let's talk <Arrow /></a></div>
        <button ref={toggleRef} type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"} className="menu-toggle">
          <span>{isOpen ? "Close" : "Menu"}</span><span className={`menu-icon${isOpen ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>
        <ul id="mobile-navigation" hidden={!isOpen} className="mobile-navigation">{links()}</ul>
      </nav>
    </header>
  );
}

