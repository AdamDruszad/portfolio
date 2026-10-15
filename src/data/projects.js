// Order matters: the first project is featured, the next two get illustrated cards and the
// rest are listed as compact rows. Numbers are derived from this order.
export const projects = [
  {
    id: "fitai",
    title: "FitAI",
    category: "Full-stack application",
    tagline: "A smarter way to show up.",
    description: "A workout tracker with a React interface, a Python REST API and an AI coach. Includes workout logging, exercise history and streamed chat responses.",
    tech: ["React", "JavaScript", "FastAPI", "PostgreSQL"],
    source: "https://github.com/AdamDruszad/fitness-app",
    demo: "https://fitness-app-two-tawny.vercel.app",
    demoNote: "Account required",
    visualCaption: "Interface preview · sample workout",
  },
  {
    id: "tts",
    title: "Text to Speech Converter",
    category: "Browser-based tool",
    description: "A browser-based speech app with voice selection, playback controls and error handling. Built around the Web Speech API and differences in browser voice loading.",
    tech: ["JavaScript", "Web Speech API", "Tailwind CSS", "Vite"],
    source: "https://github.com/AdamDruszad/text-to-speech-converter",
    demo: "https://text-to-speech-converter-five-orpin.vercel.app",
    visualCaption: "Browser audio / JavaScript",
  },
  {
    id: "extensions",
    title: "Browser Extension Manager",
    category: "Frontend development",
    description: "A Frontend Mentor UI challenge with responsive cards, active and inactive filters, extension controls and light and dark themes.",
    tech: ["HTML", "CSS Grid", "JavaScript"],
    source: "https://github.com/AdamDruszad/BrowserExtensionManager",
    demo: "https://browser-extension-manager-theta.vercel.app",
    visualCaption: "Responsive UI / Frontend Mentor",
  },
  {
    id: "gamebooster",
    title: "GameBooster",
    category: "Desktop application",
    description: "A Python desktop application for Windows with hardware detection, performance profiles and saved settings. Packaged as a desktop executable.",
    tech: ["Python", "CustomTkinter", "PyInstaller"],
    source: "https://github.com/AdamDruszad/pc-optimizer",
  },
  {
    id: "weather",
    title: "Weather App",
    category: "API & JavaScript",
    description: "A JavaScript weather app with city search, asynchronous REST API requests and weather-dependent backgrounds.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    source: "https://github.com/AdamDruszad/Weather-App",
    demo: "https://weather-app-coral.vercel.app",
  },
];

export const projectNumber = (index) => String(index + 1).padStart(2, "0");
