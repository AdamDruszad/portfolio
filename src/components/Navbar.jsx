import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    setIsOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 bg-slate-900/80 backdrop-blur-sm w-full flex justify-between items-center px-6 md:px-16 py-8 z-50">
      <div className="font-black text-5xl font-mono">
        <Link to="/">
          <span className="bg-linear-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text animate-pulse [animation-duration:3s]">
            A
          </span>
          <span className="text-white animate-pulse">/</span>
          <span className="bg-linear-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text animate-pulse [animation-duration:2s]">
            D
          </span>
        </Link>
      </div>

      <ul className="hidden md:flex gap-12 text-slate-400 font-mono text-xl font-semibold">
        <button
          onClick={() => scrollTo("projects")}
          className="hover:text-white transition-colors"
        >
          Projects
        </button>
        <Link to="/about" className="hover:text-white transition-colors">
          About
        </Link>
        <button
          onClick={() => scrollTo("contact")}
          className="hover:text-white transition-colors"
        >
          Contact
        </button>
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 px-6 py-6 flex flex-col gap-6">
          <button
            onClick={() => scrollTo("projects")}
            className="text-left text-slate-400 hover:text-white font-mono text-xl font-semibold transition-colors"
          >
            Projects
          </button>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white font-mono text-xl font-semibold transition-colors"
          >
            About
          </Link>
          <button
            onClick={() => scrollTo("contact")}
            className="text-left text-slate-400 hover:text-white font-mono text-xl font-semibold transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
