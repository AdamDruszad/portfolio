import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import { Note, Status } from "./ui";

export default function Intro() {
  return (
    <section className="intro band" aria-labelledby="intro-title">
      <div className="shell intro-grid">
        <Note index="02" className="margin">The person behind the pixels</Note>
        <div className="intro-head">
          <h2 id="intro-title">Always curious.<br /><em>Always building.</em></h2>
          <Link to="/about" className="text-link">More about me <Arrow /></Link>
        </div>
        <div className="intro-copy">
          <p>I'm Adam, a Computer Science student at the University of Debrecen. I like figuring out how things work — and making them work a little better.</p>
          <p>My focus is frontend development with React and JavaScript. When a project needs more, I connect the dots with Python, FastAPI and SQL.</p>
          <Status className="status--card">
            Looking for a team to learn with<br /><strong>Open to part-time remote frontend work</strong>
          </Status>
        </div>
      </div>
    </section>
  );
}
