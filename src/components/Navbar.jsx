import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
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
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  function links(mobile = false) {
    const style = `block py-2 text-slate-300 hover:text-white transition-colors ${mobile ? "text-xl" : ""}`;
    return (
      <>
        <li><Link to="/#projects" onClick={close} className={style}>Projects</Link></li>
        <li><NavLink to="/about" onClick={close} className={style}>About</NavLink></li>
        <li><Link to="/#contact" onClick={close} className={style}>Contact</Link></li>
      </>
    );
  }

  return (
    <nav ref={navRef} aria-label="Main navigation" className="fixed top-0 bg-slate-900/95 backdrop-blur-sm w-full flex justify-between items-center px-6 md:px-16 py-5 z-50 border-b border-slate-800">
      <Link to="/" onClick={close} aria-label="Adam Biró home" className="font-black text-4xl font-mono">
        <span className="text-emerald-300">A</span><span className="text-white">/</span><span className="text-blue-300">D</span>
      </Link>
      <ul className="hidden md:flex gap-10 font-mono text-lg font-semibold">{links()}</ul>
      <button ref={toggleRef} type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"} className="md:hidden flex flex-col justify-center gap-1.5 cursor-pointer w-11 h-11 p-2">
        <span aria-hidden="true" className={`block w-6 h-0.5 bg-white ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span aria-hidden="true" className={`block w-6 h-0.5 bg-white ${isOpen ? "opacity-0" : ""}`} />
        <span aria-hidden="true" className={`block w-6 h-0.5 bg-white ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>
      <ul id="mobile-navigation" hidden={!isOpen} className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 px-6 py-5 flex flex-col gap-3 font-mono font-semibold">{links(true)}</ul>
    </nav>
  );
}
