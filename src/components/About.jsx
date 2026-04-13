import { Link } from "react-router-dom";

function About() {
  return (
    <div
      data-aos="fade-up"
      className="min-h-screen bg-slate-900 pt-32 pb-20 px-6 md:px-16 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <Link
          to="/"
          className="text-blue-400 hover:text-blue-300 font-mono text-sm mb-8 inline-flex items-center gap-2 transition-colors"
        >
          <span>&larr;</span> Back to Home
        </Link>

        <h1 className="font-mono text-white text-4xl md:text-6xl font-black mb-12 uppercase">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6 font-mono text-slate-400 text-base md:text-lg leading-relaxed">
            <p>
              I'm Adam, a first-year Computer Science student at the University
              of Debrecen. I started programming with a simple goal: solve real
              problems.
            </p>
            <p>
              My first serious project was GameBooster — a Python app I built to
              optimize Windows performance on my own machine. It taught me more
              than any tutorial could. Right now I'm expanding into web
              development and 3D modeling in Blender. I'm not just learning
              tools — I'm learning how to think like an engineer.
            </p>
            <p className="text-white font-semibold mt-4">
              I'm looking for a remote opportunity where I can contribute, grow
              fast, and work alongside people who take their craft seriously.
            </p>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 sticky top-32">
              <h3 className="text-white font-bold font-mono text-xl mb-6">
                Fast Facts
              </h3>

              <ul className="flex flex-col gap-5 text-slate-400 font-mono text-sm">
                <li className="flex items-center gap-4">
                  <span className="text-2xl">📍</span> Based in Transcarpathia,
                  Ukraine
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl">🎓</span> CS @ Uni of Debrecen
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl">🎮</span> CS2 & GTA Online
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl">🏋️</span> Gym & Football
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl">🚗</span> BMW enthusiast (M4 & F30)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
