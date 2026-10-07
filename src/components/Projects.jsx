import { projects } from "../data/projects";

function ProjectCard({ project }) {
  return (
    <article className="bg-slate-800 rounded-xl p-6 border border-slate-600 flex flex-col min-w-0">
      <h3 className="text-white text-xl font-mono mb-3 font-bold">{project.title}</h3>
      <p className="font-mono text-sm text-slate-300 leading-relaxed">{project.description}</p>
      <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2 my-5">
        {project.tech.map((tech) => (
          <li key={tech} className="text-blue-200 bg-blue-400/10 px-3 py-1 rounded-full font-mono text-xs">{tech}</li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-sm">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4 py-2" aria-label={`Open ${project.title} live demo in a new tab`}>Live demo</a>
        )}
        <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline underline-offset-4 py-2" aria-label={`View ${project.title} source on GitHub in a new tab`}>GitHub</a>
        {project.demoNote && <span className="text-slate-300 text-xs">{project.demoNote}</span>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" tabIndex={-1} className="bg-slate-900 px-6 py-20 md:px-16 border-y border-slate-800">
      <p className="font-mono font-bold text-slate-400 text-sm tracking-widest uppercase mb-2">Selected projects</p>
      <h2 className="font-mono text-white text-4xl md:text-5xl font-black mb-10">What I've built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <a href="https://github.com/AdamDruszad?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 py-2 text-blue-300 underline underline-offset-4 font-mono">More projects and learning exercises on GitHub</a>
    </section>
  );
}
