import { Link } from "react-router-dom";
import { skills } from "../data/profile";
import Arrow from "./Arrow";
import BrandVisual from "./BrandVisual";
import { Note, Status } from "./ui";

export default function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="margin hero-meta">
          <Note>Ádám Biró <span className="note-sep">/</span> Frontend developer</Note>
          <Status>Open to part-time remote work</Status>
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">
            Ideas into<br /><em>interfaces.</em><span className="hero-star" aria-hidden="true">✳</span>
          </h1>
          <p className="hero-lede">Hey, I'm Adam. A curious developer building thoughtful web experiences, one detail at a time.</p>
          <div className="hero-actions">
            <Link to="/#projects" className="button">Explore my work <Arrow direction="down" /></Link>
            <Link to="/about" className="text-link">A little about me <Arrow /></Link>
          </div>
        </div>

        <BrandVisual />
      </div>

      <div className="hero-foot">
        <p className="hero-place">Based in Debrecen, Hungary<span>CS student at the University of Debrecen</span></p>
        <Link to="/#projects" className="scroll-link">Scroll to discover <Arrow direction="down" /></Link>
      </div>

      <div className="toolkit">
        <Note>My everyday toolkit</Note>
        <ul aria-label="Technical skills">
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
}
