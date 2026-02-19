// src/components/ScrollProgress.jsx
import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const sectionColors = {
  home: "#6366f1",
  about: "#8b5cf6",
  projects: "#ec4899",
  contact: "#f43f5e",
};

const ScrollProgress = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [direction, setDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  const springProgress = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    springProgress.set(scrollProgress);
  }, [scrollProgress, springProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (currentScrollY / docHeight) * 100;

      if (currentScrollY > lastScrollY) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setDirection("up");
      }

      setScrollProgress(scrollPercent);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-1 z-50"
        style={{
          width: springProgress.get() + "%",
          backgroundColor: sectionColors[activeSection] || sectionColors.home,
          boxShadow: `0 0 10px ${sectionColors[activeSection] || sectionColors.home}`,
        }}
      />

      <motion.div
        className="fixed top-4 right-4 z-50 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 border border-slate-700"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: sectionColors[activeSection] }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-slate-300">
          {direction === "down" ? "↓ Scrolling down" : "↑ Scrolling up"}
        </span>
        <span className="text-slate-500">|</span>
        <motion.span
          key={scrollProgress}
          className="text-white font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {Math.round(scrollProgress)}%
        </motion.span>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
