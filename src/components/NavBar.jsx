// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollProgress from "./ScrollProgress";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { name: "Home", id: "home", icon: "🏠" },
  { name: "About", id: "about", icon: "👨‍💻" },
  { name: "Projects", id: "projects", icon: "🚀" },
  { name: "Contact", id: "contact", icon: "📧" },
];

const NavBar = () => {
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress activeSection={activeSection} />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              IB
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <motion.a
              href="#"
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume 📄
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🍔</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
