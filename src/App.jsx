import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesCanvas from "./components/ParticlesCanvas";

function App() {
  return (
    <div className="relative bg-slate-900 selection:bg-indigo-500 selection:text-white">
      <ParticlesCanvas />
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 bg-slate-950/50 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-4 text-white font-bold tracking-widest uppercase text-xs">© 2026 Ivo Bryan. Mastered with Passion.</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="mt-8 text-[10px] text-slate-700 uppercase tracking-[0.3em]">
            Built with React • Framer Motion • Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

