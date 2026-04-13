import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

import { Analytics } from "@vercel/analytics/react";

import { ReactLenis } from "lenis/react";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1.2 }}>
        <main className="bg-slate-900 min-h-screen relative">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Analytics />
        </main>
      </ReactLenis>
    </Router>
  );
}

export default App;
