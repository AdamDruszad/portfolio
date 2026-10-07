import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="min-h-[80vh] bg-slate-900 pt-36 pb-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-blue-300 hover:text-blue-200 font-mono text-sm mb-8 inline-flex py-2">← Back to home</Link>
        <h1 className="font-mono text-white text-4xl md:text-6xl font-black mb-10">About me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6 font-mono text-slate-300 text-base md:text-lg leading-relaxed">
            <p>I'm Adam, a second-year Computer Science student at the University of Debrecen, where I started my BSc in 2025.</p>
            <p>I build web applications with React, JavaScript and Tailwind CSS. In FitAI, I connected a React interface to a FastAPI and PostgreSQL backend for workout planning, logging and AI coach chat.</p>
            <p>My smaller projects explore browser APIs, responsive layouts and interactive interfaces. I also built GameBooster, a Python desktop app with hardware detection and configurable profiles.</p>
            <p className="text-white font-semibold">I'm looking for part-time remote frontend work where I can contribute to a product and develop my skills in a team.</p>
          </div>
          <aside aria-label="Education and skills" className="bg-slate-800 rounded-xl p-7 border border-slate-600 h-fit">
            <h2 className="text-white font-bold font-mono text-xl mb-5">At a glance</h2>
            <dl className="flex flex-col gap-5 text-slate-300 font-mono text-sm leading-relaxed">
              <div><dt className="font-bold text-white">Location</dt><dd>Debrecen, Hungary</dd></div>
              <div><dt className="font-bold text-white">Education</dt><dd>BSc Computer Science<br />University of Debrecen<br />2025 – present</dd></div>
              <div><dt className="font-bold text-white">Training</dt><dd>Linux Essentials<br />Cisco Networking Academy, 2025</dd></div>
              <div><dt className="font-bold text-white">Languages</dt><dd>Hungarian: native<br />English: intermediate<br />Ukrainian: basic</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
