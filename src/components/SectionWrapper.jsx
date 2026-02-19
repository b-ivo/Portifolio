// components/SectionWrapper.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionWrapper = ({ children, id, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${className}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background gradient that follows scroll */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${getGradientColor(id)}, transparent 70%)`,
        }}
        animate={{
          scale: isInView ? 1.2 : 1,
          opacity: isInView ? 0.3 : 0,
        }}
        transition={{ duration: 1 }}
      />

      {children}
    </motion.section>
  );
};

const getGradientColor = (id) => {
  const colors = {
    home: "#3B82F6",
    about: "#10B981",
    projects: "#F59E0B",
    contact: "#EF4444",
  };
  return colors[id] || "#3B82F6";
};

export default SectionWrapper;
