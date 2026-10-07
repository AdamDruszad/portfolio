import arrowIcon from "../assets/arrow_right.svg";

export default function Contact() {
  return (
    <footer id="contact" tabIndex={-1} className="bg-gray-950 flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-16 py-12 gap-8 border-t border-slate-800">
      <div className="min-w-0">
        <p className="font-mono tracking-widest text-slate-400 text-sm uppercase mb-2">Contact</p>
        <h2 className="font-mono font-black text-white text-3xl md:text-4xl mb-4">Let's work together</h2>
        <a href="mailto:adambiro2008@gmail.com" className="font-mono text-blue-300 hover:text-blue-200 break-all underline underline-offset-4 inline-block py-2">adambiro2008@gmail.com</a>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <a className="bg-blue-400 hover:bg-blue-300 text-black text-lg flex items-center gap-2 font-mono font-bold rounded-xl py-3 px-5 transition-colors" href="https://github.com/AdamDruszad" target="_blank" rel="noopener noreferrer">
          GitHub<img src={arrowIcon} alt="" aria-hidden="true" width="20" height="20" />
        </a>
        <a className="text-slate-200 border border-slate-400 text-lg font-mono font-bold rounded-xl py-3 px-5 hover:text-white hover:border-white transition-colors" href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-bir%C3%B3-75437b402/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
