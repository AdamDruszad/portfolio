import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import BrandVisual from "./BrandVisual";

export default function About() {
  return (
    <section className="about-section page-shell" aria-labelledby="about-title">
      <Link to="/" className="text-link back-link"><Arrow direction="left" /> Back to home</Link>
      <div className="section-heading"><div><p className="eyebrow">A little introduction</p><h1 id="about-title">About <em>me</em></h1></div><p>Developer. Student.<br />A work in progress, in the best way.</p></div>
      <div className="about-grid"><BrandVisual compact /><div className="about-story">
        <p className="about-lead">Curiosity brought me here.<br /><em>Building keeps me going.</em></p>
        <p>I'm Adam, a second-year Computer Science student at the University of Debrecen, where I started my BSc in 2025.</p>
        <p>I build web applications with React, JavaScript and Tailwind CSS. In FitAI, I connected a React interface to a FastAPI and PostgreSQL backend for workout planning, logging and AI coach chat.</p>
        <p>My smaller projects explore browser APIs, responsive layouts and interactive interfaces. I also built GameBooster, a Python desktop app with hardware detection and configurable profiles.</p>
        <Link to="/#projects" className="text-link">Take a look at my work <Arrow /></Link>
      </div></div>
      <aside aria-label="Education and skills" className="about-details"><h2>A little more <em>context.</em></h2><dl>
        <div><dt>01 / Based in</dt><dd>Debrecen, Hungary</dd></div>
        <div><dt>02 / Education</dt><dd>BSc Computer Science<span>University of Debrecen · 2025 – present</span></dd></div>
        <div><dt>03 / Training</dt><dd>Linux Essentials<span>Cisco Networking Academy · 2025</span></dd></div>
        <div><dt>04 / Languages</dt><dd>Hungarian <span>Native</span><br />English <span>Intermediate</span><br />Ukrainian <span>Basic</span></dd></div>
      </dl></aside>
      <div className="about-opportunity"><span className="status-dot" /><p>I'm looking for part-time remote frontend work where I can contribute to a product and develop my skills in a team.</p><Link to="/#contact" className="text-link">Let's connect <Arrow /></Link></div>
    </section>
  );
}

