import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import BrandVisual from "./BrandVisual";

const skills = ["React", "JavaScript", "HTML & CSS", "Tailwind", "Python", "FastAPI", "SQL", "Git"];

export default function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-eyebrow">
        <p className="eyebrow">Ádám Biró <span className="eyebrow-separator">/</span> Frontend developer</p>
        <p className="availability"><span className="status-dot" />Open to part-time remote work</p>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Ideas into<br /><em>interfaces.</em><span className="hero-period" aria-hidden="true">✳</span></h1>
          <p className="hero-description">Hey, I'm Adam. A curious developer building thoughtful web experiences, one detail at a time.</p>
          <div className="hero-actions">
            <Link to="/#projects" className="button button--dark">Explore my work <Arrow direction="down" /></Link>
            <Link to="/about" className="text-link">A little about me <Arrow /></Link>
          </div>
        </div>
        <BrandVisual />
      </div>
      <div className="hero-footnote">
        <p>Based in Debrecen, Hungary<br /><span>CS student at the University of Debrecen</span></p>
        <Link to="/#projects" className="scroll-link">Scroll to discover <Arrow direction="down" /></Link>
      </div>
      <div className="toolkit-strip">
        <span className="eyebrow">My everyday toolkit</span>
        <ul aria-label="Technical skills">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </div>
    </section>
  );
}

