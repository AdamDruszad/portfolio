import { Link } from "react-router-dom";
import arrowIcon from "../assets/arrow_right.svg";

const skills = ["React", "JavaScript", "HTML", "CSS / Tailwind", "Python", "FastAPI", "SQL", "Git"];

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-slate-900 bg-[url('./assets/background.svg')] bg-cover bg-no-repeat pt-36 pb-16 px-6 md:px-16 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-5">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
        <span className="text-emerald-300 font-bold tracking-widest text-sm uppercase">Open to part-time remote work</span>
      </div>
      <h1 className="text-slate-400 text-5xl md:text-7xl font-black uppercase mb-4">Hello<br /><span className="text-white">I'm Adam</span></h1>
      <p className="text-slate-300 font-medium text-xl md:text-2xl tracking-wide mb-6 font-mono">CS STUDENT · JUNIOR FRONTEND DEVELOPER</p>
      <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl mb-7 font-mono">
        I'm a second-year Computer Science student at the University of Debrecen.
        I build React and JavaScript interfaces and connect them to Python backends.
        My projects include an AI workout tracker and a browser-based text-to-speech app.
      </p>
      <ul aria-label="Technical skills" className="flex flex-wrap gap-3 max-w-2xl mb-8">
        {skills.map((skill) => <li key={skill} className="bg-emerald-400 text-slate-950 rounded-full px-4 py-1.5 font-semibold font-mono">{skill}</li>)}
      </ul>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <Link to="/#projects" className="flex items-center gap-2 text-black font-mono font-bold bg-blue-400 hover:bg-blue-300 rounded-lg px-5 py-3 transition-colors">
          View projects<img src={arrowIcon} alt="" aria-hidden="true" width="20" height="20" />
        </Link>
        <Link to="/#contact" className="text-slate-200 font-mono font-bold ring-1 ring-slate-400 rounded-lg px-5 py-3 hover:ring-white hover:text-white transition-colors">Contact me</Link>
      </div>
    </section>
  );
}
