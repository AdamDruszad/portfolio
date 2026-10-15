import { githubRepositories } from "../data/profile";
import { projectNumber, projects } from "../data/projects";
import ProjectShot from "./ProjectShot";
import { ExternalLink, Note } from "./ui";

function ProjectLinks({ project }) {
  return (
    <div className="entry-links">
      {project.demo && (
        <ExternalLink href={project.demo} label={`Open ${project.title} live demo in a new tab`} className="text-link entry-demo">
          Live demo
        </ExternalLink>
      )}
      <ExternalLink href={project.source} label={`View ${project.title} source on GitHub in a new tab`} className="text-link entry-source">
        Source code
      </ExternalLink>
      {project.demoNote && <span className="entry-note">{project.demoNote}</span>}
    </div>
  );
}

function Technologies({ project }) {
  return (
    <ul className="entry-stack" aria-label={`${project.title} technologies`}>
      {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
    </ul>
  );
}

function Figure({ project, variant }) {
  return (
    <figure className={`entry-figure entry-figure--${variant}`}>
      <ProjectShot image={project.image} variant={variant} />
      <figcaption>{project.image.caption}</figcaption>
    </figure>
  );
}

function EntryMeta({ index, project }) {
  return (
    <p className="entry-meta">
      <span className="entry-number">{projectNumber(index)}</span>
      <span>{project.category}</span>
    </p>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  const cards = rest.slice(0, 2);
  const rows = rest.slice(2);

  return (
    <section id="projects" tabIndex={-1} className="projects shell" aria-labelledby="projects-title">
      <header className="section-head">
        <Note index="01" className="margin">Selected work</Note>
        <div className="section-head__main">
          <h2 id="projects-title">What I've <em>built.</em></h2>
          <p className="section-head__aside">A few things I've turned from<br />“what if” into something you can use.</p>
        </div>
      </header>

      <article className="entry entry--featured">
        <EntryMeta index={0} project={featured} />
        <div className="entry-body">
          <h3>{featured.title}<span className="entry-dot">.</span></h3>
          <p className="entry-tagline">{featured.tagline}</p>
          <p className="entry-description">{featured.description}</p>
          <Technologies project={featured} />
          <ProjectLinks project={featured} />
        </div>
        <Figure project={featured} variant="featured" />
      </article>

      <div className="entry-cards">
        {cards.map((project, index) => (
          <article className="entry entry--card" key={project.id}>
            <Figure project={project} variant="card" />
            <EntryMeta index={index + 1} project={project} />
            <h3>{project.title}</h3>
            <p className="entry-description">{project.description}</p>
            <Technologies project={project} />
            <ProjectLinks project={project} />
          </article>
        ))}
      </div>

      <div className="entry-rows">
        <Note className="entry-rows__title">More experiments, same curiosity</Note>
        {rows.map((project, index) => (
          <article className="entry entry--row" key={project.id}>
            <EntryMeta index={index + 3} project={project} />
            <h3>{project.title}</h3>
            <p className="entry-description">{project.description}</p>
            <Technologies project={project} />
            <ProjectLinks project={project} />
            <Figure project={project} variant="row" />
          </article>
        ))}
      </div>

      <ExternalLink href={githubRepositories} className="all-projects-link">
        More projects and learning exercises on GitHub
      </ExternalLink>
    </section>
  );
}
