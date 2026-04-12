import arrowIcon from '../assets/arrow_right.svg';

function Hero() {
  return (
    <section className="w-full min-h-screen bg-slate-900 bg-[url('./assets/background.svg')] bg-cover bg-no-repeat pt-32 px-6 md:px-16 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-5">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase">
          Open to work
        </span>
      </div>
      <h1 className="text-slate-600 text-5xl md:text-7xl font-black uppercase mb-4">
        Hello
        <br />
        <span className="text-white">I'm Adam</span>
      </h1>
      <p className="text-slate-400 font-medium text-xl md:text-2xl tracking-wide mb-6 font-mono">
        CS STUDENT &nbsp;·&nbsp; JUNIOR BACKEND DEV &nbsp;·&nbsp; JUNIOR 3D
        ARTIST
      </p>
      <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-xl mb-7 font-mono">
        First-year student at University of Debrecen. I have Python knowledge,
        I'm learning Web development and how to design and animate 3D objects in
        Blender.
      </p>
      <div className="flex flex-wrap gap-4 max-w-xl mb-7">
        <span className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-emerald-300 hover:ring-green-500 transition-colors cursor-pointer">
          Python
        </span>
        <span className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-emerald-300 hover:ring-green-500 transition-colors cursor-pointer">
          HTML
        </span>
        <span className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-emerald-300 hover:ring-green-500 transition-colors cursor-pointer">
          CSS/Tailwind
        </span>
        <span className="bg-amber-400 hover:bg-amber-300 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-amber-100 hover:ring-amber-400 transition-colors cursor-pointer">
          Javascript
        </span>
        <span className="bg-amber-400 hover:bg-amber-300 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-amber-100 hover:ring-amber-400 transition-colors cursor-pointer">
          React
        </span>
        <span className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-emerald-300 hover:ring-green-500 transition-colors cursor-pointer">
          SQL
        </span>
        <span className="bg-amber-400 hover:bg-amber-300 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-amber-100 hover:ring-amber-400 transition-colors cursor-pointer">
          C++
        </span>
        <span className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-full px-4 py-1.5  font-semibold font-mono ring-2 ring-emerald-300 hover:ring-green-500 transition-colors cursor-pointer">
          Blender
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <a
          href="#projects"
          className="flex items-center gap-1 text-black font-mono font-bold bg-blue-400 hover:bg-blue-300 rounded-lg px-5 py-2.5 active:scale-95 cursor-pointer transition-all"
        >
          View Projects
          <img src={arrowIcon} alt="arrow" />
        </a>
        <a
          href="#contact"
          className="text-slate-400 font-mono font-bold bg-transparent ring-1 ring-slate-400 rounded-lg px-5 py-2.5 cursor-pointer active:scale-95 hover:ring-white hover:text-white transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
