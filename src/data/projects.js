// Order matters: the first project is featured, the next two get large screenshot cards and the
// rest are listed as compact rows. Numbers are derived from this order.
//
// Screenshots live in public/projects/<name>-<width>.webp (800 and 1600 wide, 16:10). They are
// captured from the running apps; FitAI and Weather use sample data because their real data
// needs an account or an API key.
export const projects = [
  {
    id: "fitai",
    title: "FitAI",
    category: "Full-stack application",
    tagline: "A smarter way to show up.",
    description: "A workout planner and tracker with an AI coach. The coach drafts training plans you review before activating them and answers with your plan and recent sessions in mind. Workouts are logged set by set, and unsaved sessions survive reloads and dropped connections.",
    tech: ["React", "FastAPI", "PostgreSQL", "Claude API", "PWA"],
    source: "https://github.com/AdamDruszad/fitness-app",
    demo: "https://fitness-app-two-tawny.vercel.app",
    demoNote: "No sign-up needed: use “Try the demo” on the login page",
    image: {
      name: "fitai",
      caption: "Dashboard · sample data",
      alt: "FitAI dashboard in the dark theme: the next workout, Upper body pull with three exercises and an Open workout button, an at-a-glance panel and recent sessions. Sample data.",
      phone: {
        name: "fitai-phone",
        width: 480,
        height: 1039,
        alt: "The same FitAI dashboard on a phone, with the bottom navigation bar.",
      },
    },
  },
  {
    id: "tts",
    title: "Text to Speech Converter",
    category: "Browser-based tool",
    description: "A browser text-to-speech app built on the Web Speech API. Pick a voice, reading speed and pitch; a cue lamp shows when a voice is starting or speaking, and if a voice fails to start, the next one is tried.",
    tech: ["JavaScript", "Web Speech API", "Tailwind CSS", "Vite"],
    source: "https://github.com/AdamDruszad/text-to-speech-converter",
    demo: "https://text-to-speech-converter-five-orpin.vercel.app",
    image: {
      name: "tts",
      caption: "Speaking · cue lamp lit",
      alt: "Text to Speech workspace: sample text on the left, voice, reading speed and pitch controls on the right, and a red cue lamp beside the Stop button while a voice is speaking.",
    },
  },
  {
    id: "extensions",
    title: "Browser Extension Manager",
    category: "Frontend development",
    description: "A Frontend Mentor UI challenge, reworked: filter, enable and remove extensions with an Undo, with changes saved and a theme that follows the system. It uses bundled sample data and never touches your real browser.",
    tech: ["HTML", "CSS Grid", "JavaScript"],
    source: "https://github.com/AdamDruszad/BrowserExtensionManager",
    demo: "https://browser-extension-manager-theta.vercel.app",
    image: {
      name: "extensions",
      caption: "All extensions · light theme",
      alt: "Browser Extension Manager in the light theme: a blue side panel reading Good tools. Less clutter., All, Active and Inactive filters, and a list of extensions with Remove buttons and on/off switches.",
    },
  },
  {
    id: "gamebooster",
    title: "GameBooster",
    category: "Desktop application",
    description: "A Windows game optimizer in Python. It detects the CPU, GPU and power state, applies profile-based tweaks that can be fully undone, and monitors CPU, RAM and GPU in real time. Packaged as a desktop executable.",
    tech: ["Python", "CustomTkinter", "PyInstaller"],
    source: "https://github.com/AdamDruszad/pc-optimizer",
    image: {
      name: "gamebooster",
      caption: "Gaming profile active",
      alt: "GameBooster desktop window: live CPU, RAM and integrated GPU readouts, the Gaming profile with a Boost button, and a log of the applied tweaks. Interface in Hungarian.",
    },
  },
  {
    id: "weather",
    title: "Weather App",
    category: "API & JavaScript",
    description: "Current weather for any city, colour-coded by condition, with Celsius and Fahrenheit and dark and light modes. A small serverless proxy keeps the OpenWeather API key out of the browser.",
    tech: ["HTML", "CSS", "JavaScript", "Serverless API"],
    source: "https://github.com/AdamDruszad/Weather-App",
    demo: "https://weather-app-coral.vercel.app",
    image: {
      name: "weather",
      caption: "Moderate rain · sample reading",
      alt: "Weather app showing London at 11 °C with moderate rain on a blue condition panel, low and high temperatures, and a details column with feels-like, humidity, wind and visibility. Sample reading.",
    },
  },
];

export const projectNumber = (index) => String(index + 1).padStart(2, "0");
