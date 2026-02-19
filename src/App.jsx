import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative bg-slate-900">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 glass">
        <p className="mb-2">© 2026 Ivo Bryan. All rights reserved.</p>
        <p className="text-sm text-slate-600">
          Built with React, Framer Motion, and Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
