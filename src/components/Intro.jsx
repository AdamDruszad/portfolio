import { Link } from "react-router-dom";
import Arrow from "./Arrow";

export default function Intro() {
  return <section className="intro-section" aria-labelledby="intro-title"><div className="page-shell intro-grid">
    <div><p className="eyebrow"><span className="section-index">02 /</span> The person behind the pixels</p><h2 id="intro-title">Always curious.<br /><em>Always building.</em></h2><Link to="/about" className="text-link">More about me <Arrow /></Link></div>
    <div className="intro-copy"><p>I'm Adam, a Computer Science student at the University of Debrecen. I like figuring out how things work — and making them work a little better.</p><p>My focus is frontend development with React and JavaScript. When a project needs more, I connect the dots with Python, FastAPI and SQL.</p><div className="intro-note"><span className="status-dot" /><p>Looking for a team to learn with<br /><strong>Open to part-time remote frontend work</strong></p></div></div>
  </div></section>;
}

