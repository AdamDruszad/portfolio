import { projects } from "../data/projects";
import Arrow from "./Arrow";
import ProjectVisual from "./ProjectVisual";

function ProjectLinks({ project }) {
  return <div className="project-links">
    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Open ${project.title} live demo in a new tab`}>Live demo <Arrow /></a>}
    <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-link project-source" aria-label={`View ${project.title} source on GitHub in a new tab`}>Source code <Arrow /></a>
    {project.demoNote && <span className="demo-note">{project.demoNote}</span>}
  </div>;
}

function Technologies({ project }) {
  return <ul className="project-technologies" aria-label={`${project.title} technologies`}>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>;
}

export default function Projects() {
  const [featured, ...otherProjects] = projects;
  const categories = { fitai: "Full-stack application", tts: "Browser-based tool", extensions: "Frontend development", gamebooster: "Desktop application", weather: "API & JavaScript" };
  return (
    <section id="projects" tabIndex={-1} className="projects-section page-shell" aria-labelledby="projects-title">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="section-index">01 /</span> Selected work</p><h2 id="projects-title">What I've <em>built.</em></h2></div>
        <p>A few things I've turned from<br />“what if” into something you can use.</p>
      </div>
      <article className="featured-project">
        <div className="featured-project__copy">
          <p className="eyebrow"><span className="project-number">01</span>{categories.fitai}</p>
          <div><h3>{featured.title}<span className="project-title-dot">.</span></h3><p className="project-tagline">A smarter way<br />to show up.</p></div>
          <p className="project-description">{featured.description}</p>
          <Technologies project={featured} />
          <ProjectLinks project={featured} />
        </div>
        <ProjectVisual kind="fitai" />
      </article>
      <div className="project-grid">{otherProjects.slice(0, 2).map((project, index) => <article className="project-story" key={project.id}>
        <ProjectVisual kind={project.id} />
        <div className="project-story__heading"><p className="eyebrow">{categories[project.id]}</p><span className="project-number">0{index + 2}</span></div>
        <h3>{project.title}</h3><p className="project-description">{project.description}</p><Technologies project={project} /><ProjectLinks project={project} />
      </article>)}</div>
      <div className="more-projects"><p className="eyebrow">More experiments, same curiosity</p>{otherProjects.slice(2).map((project, index) => <article className="project-row" key={project.id}>
        <span className="project-number">0{index + 4}</span><div className="project-row__title"><h3>{project.title}</h3><span>{categories[project.id]}</span></div><p className="project-description">{project.description}</p><ProjectLinks project={project} />
        <Technologies project={project} />
      </article>)}</div>
      <a href="https://github.com/AdamDruszad?tab=repositories" target="_blank" rel="noopener noreferrer" className="all-projects-link">More projects and learning exercises on GitHub <Arrow /></a>
    </section>
  );
}

