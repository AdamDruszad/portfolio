import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 w-full flex justify-between items-center px-6 md:px-16 py-8 z-50">
      <div className="font-black text-5xl font-mono cursor-pointer">
        <Link to="/">
          {" "}
          <span className="bg-linear-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text animate-pulse [animation-duration:3s]">
            A
          </span>
          <span className="text-white animate-pulse">/</span>
          <span className="bg-linear-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text animate-pulse [animation-duration:2s]">
            D
          </span>{" "}
        </Link>
      </div>

      <ul className="flex gap-12 text-slate-400 font-mono text-xl font-semibold">
        <a
          href="#projects"
          className="hover:text-white cursor-pointer transition-colors"
        >
          Projects
        </a>
        <li className="hover:text-white cursor-pointer transition-colors">
          <Link to="/about">About</Link>
        </li>
        <a
          href="#contact"
          className="hover:text-white cursor-pointer transition-colors"
        >
          Contact
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
