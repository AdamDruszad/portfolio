const projects = [
  {
    title: "Learning scripts",
    description: "My python scripts, from that day when I learned it",
    tech: "Python",
    status: "done",
    link: "https://github.com/AdamDruszad/Python-Mini",
  },
  {
    title: "Browser Extension Manager ",
    description: "Frontend Mentor Project, and my first try of using JS",
    tech: "HTML, CSS, JS",
    status: "done",
    link: "https://adamdruszad.github.io/BrowserExtensionManager/",
  },
  {
    title: "Social Link Profiles ",
    description: "Frontend Mentor Project, an easy website",
    tech: "HTML, CSS",
    status: "done",
    link: "https://adamdruszad.github.io/Social_Link_Profiles/#",
  },
  {
    title: "Bouncing Ball in Terminal",
    description: "A homework assignment, from my teacher",
    tech: "C++",
    status: "done",
    link: "https://github.com/AdamDruszad/Szorgalmik/blob/main/bouncing_ball.cpp",
  },
  {
    title: "CPU Stress test",
    description: "A homework assignment, from my teacher",
    tech: "Python",
    status: "done",
    link: "https://github.com/AdamDruszad/Szorgalmik/blob/main/cpu-stresstest.py",
  },
  {
    title: "Weekly wake up routin",
    description: "A homework assignment, from my teacher",
    tech: "C++",
    status: "done",
    link: "https://github.com/AdamDruszad/Szorgalmik/blob/main/ebredes.cpp",
  },
  {
    title: "RAM Stress test",
    description: "A homework assignment, from my teacher",
    tech: "Python",
    status: "done",
    link: "https://github.com/AdamDruszad/Szorgalmik/blob/main/ram-stresstest.py",
  },
  {
    title: "Weather app",
    description: "A wheater data query web application",
    tech: "HTML, CSS, JS",
    status: "done",
    link: "https://adamdruszad.github.io/Weather-App/",
  },
  {
    title: "PC Optimizer",
    description: "Windows optimization app with GPU/CPU auto-detection",
    tech: "Python",
    status: "done",
    link: "https://github.com/AdamDruszad/pc-optimizer",
  },
  {
    title: "M4 Competition 3D modell",
    description: "A Blender project, for submission",
    tech: "Blender",
    status: "in progress",
    link: "#",
  },
];

function ProjectCard({ title, description, tech, status, link }) {
  const techColors = {
    Python: "text-green-400 bg-green-400/10",
    "C++": "text-purple-400 bg-purple-400/10",
    Blender: "text-rose-400 bg-rose-400/10",
  };

  const currentTechColor = techColors[tech] || "text-blue-400 bg-blue-400/10";

  const hasLink = link !== "#";

  const CardWrapper = hasLink ? "a" : "div";

  const cardStyles = `bg-slate-800 rounded-xl p-6 border transition-all ${
    hasLink
      ? "border-slate-600 hover:border-blue-400 active:scale-95 cursor-pointer"
      : "border-slate-700 opacity-60 cursor-default"
  }`;

  return (
    <CardWrapper
      data-aos="fade-up"
      href={hasLink ? link : undefined}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      className={cardStyles}
    >
      <h3 className="text-white text-xl font-mono mb-2 font-bold">{title}</h3>

      <p className="font-mono font-medium text-sm text-slate-500 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-3 mt-5">
        <span
          className={`${currentTechColor} px-3 py-1 rounded-full font-mono font-medium text-sm`}
        >
          {tech}
        </span>

        {status === "in progress" && (
          <span className="text-yellow-300 bg-amber-700 px-4 py-2 rounded-full font-mono font-medium text-xs">
            In Progress
          </span>
        )}
      </div>
    </CardWrapper>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-20 min-h-screen md:px-16 border border-slate-800"
    >
      <h2 className="font-mono font-bold text-slate-600 text-lg tracking-widest uppercase mb-2">
        Projects
      </h2>

      <h3 className="font-mono text-white text-4xl md:text-5xl font-black mb-12">
        What I've built
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            status={project.status}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
