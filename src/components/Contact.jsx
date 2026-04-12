function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gray-950 w-full flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-16 py-12 border-t border-slate-800"
    >
      <div>
        <p className="font-mono font-black text-slate-600 text-lg tracking-widest uppercase mb-2">
          Contact
        </p>
        <h2 className="font-mono font-black text-white text-4xl md:text-5xl mb-2">
          Let's work together
        </h2>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=adambiro2008@gmail.com"
          className="font-mono tracking-widest text-slate-600 hover:text-slate-500 break-all"
        >
          adambiro2008@gmail.com
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=adambiro2008@gmail.com"
          className="font-mono tracking-widest text-slate-600 hover:text-slate-500 break-all"
        >
          adambiro2008@gmail.com
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-0">
        <a
          className="bg-blue-400 hover:bg-blue-300 text-black text-lg flex items-center gap-1 font-mono font-bold rounded-xl py-2.5 px-4.5 hover:scale-105 cursor-pointer transition-all"
          href="https://github.com/AdamDruszad"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <img src="./src/assets/arrow_right.svg" alt="arrow" />
        </a>{" "}
        <a
          className="bg-transparent text-slate-500 border border-slate-500 text-lg flex items-center gap-1 font-mono font-bold rounded-xl py-2.5 px-5 hover:scale-105 cursor-pointer transition-all"
          href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-bir%C3%B3-75437b402/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Contact;
