// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React/Next.js",
    level: 90,
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 14.667c-1.473 0-2.667-1.194-2.667-2.667s1.194-2.667 2.667-2.667 2.667 1.194 2.667 2.667-1.194 2.667-2.667 2.667zm0-6.667c-3.13 0-5.694 1.705-6.4 4 1.185 3.65 4.545 6.333 8.533 6.333 1.186 0 2.306-.239 3.334-.672.336-.142.661-.31 1.173-.594C15.684 18.257 13.91 19.333 12 19.333c-4.053 0-7.333-3.28-7.333-7.333S7.947 4.667 12 4.667c2.316 0 4.385.928 5.4 3 .152.311.239.664.312 1.022-1.012-.667-2.203-1.022-3.445-1.022z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    level: 85,
    color: "from-green-400 via-emerald-500 to-teal-600",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4.5 6.25v11.5L12 22l7.5-4.25V6.25L12 2zm-1 15.5h-2v-7h2v7zm4 0h-2v-7h2v7zm-3-11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    level: 75,
    color: "from-blue-400 via-indigo-500 to-violet-600",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125V22.875C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.15.037 1.613.113v2.738c-.463-.075-1.013-.113-1.65-.113-.812 0-1.4.15-1.763.45-.363.3-.538.746-.538 1.338v5.1h-3.15V9.938h2.888v1.163c.525-.863 1.45-1.351 2.4-1.351zm-9.038 2.625h2.55v3.638c0 .825.212 1.45.638 1.875.425.425 1.063.638 1.913.638.288 0 .575-.025.863-.075v2.4c-.45.075-.988.113-1.613.113-1.313 0-2.35-.375-3.113-1.125-.763-.75-1.144-1.813-1.144-3.188v-4.275h-1.65v-2.1c.975-.225 1.713-.675 2.213-1.35.5-.675.838-1.575 1.013-2.7h1.65v4.275zm4.838-5.363h3.15v2.363h-3.15V7.012z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    level: 80,
    color: "from-green-500 via-lime-600 to-green-700",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.193 9.389c-.58-3.95-3.414-6.853-5.01-8.312a.606.606 0 00-.783.109l-3.23 4.249c-.83 1.09-1.294 2.47-1.303 3.882-.016 3.097 2.308 6.138 5.347 6.138 3.511 0 5.484-3.522 4.979-6.066zm-5.18 5.766c-2.316 0-3.664-1.921-3.664-3.873a4.01 4.01 0 01.326-1.564l3.193 4.244a.65.65 0 001.037.001l3.315-4.254c.15.539.227 1.111.227 1.7a3.493 3.493 0 01-4.434 3.746z" />
      </svg>
    ),
  },
];

const experiences = [
  {
    year: "2026 - Present",
    title: "Senior Fullstack Engineer",
    company: "Global Tech Solutions",
    description: "Architecting scalable real-time microservices and leading high-performance frontend initiatives.",
    tags: ["React", "Node.js", "Redis", "WebSockets"]
  },
  {
    year: "2024 - 2026",
    title: "Full Stack Developer",
    company: "Innovate Labs",
    description: "Developed and optimized mission-critical web applications focusing on sub-second latency.",
    tags: ["TypeScript", "Next.js", "MongoDB", "AWS"]
  },
  {
    year: "2022 - 2024",
    title: "Junior Web Developer",
    company: "Creative Studio",
    description: "Built interactive user interfaces and collaborated on diverse client-driven digital projects.",
    tags: ["JavaScript", "React", "Express", "Tailwind"]
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="min-h-screen py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Bio & Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="glass rounded-3xl p-10 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-indigo-400">01.</span> Who I Am
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                I'm a visionary <span className="text-white font-semibold">Full-Stack Architect</span> based in Kigali, dedicated to crafting digital experiences that transcend expectation. My work lies at the intersection of <span className="text-indigo-400">robust engineering</span> and <span className="text-purple-400">artistic design</span>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                With a deep mastery of the modern web ecosystem, I build applications that are not just functional, but memorable. My philosophy is simple: write clean code, build for scale, and never stop innovating.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3 px-2">
                <span className="text-indigo-400">02.</span> Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-transparent"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <span className="px-3 py-1 glass rounded-full text-xs font-semibold text-indigo-400 border border-indigo-500/20">{exp.year}</span>
                    </div>
                    <div className="text-purple-400 font-medium mb-3">{exp.company}</div>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest text-slate-500 font-bold px-2 py-1 bg-white/5 rounded-md border border-white/5">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Skills & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="glass rounded-[2.5rem] p-10 border border-white/5 bg-slate-900/40 backdrop-blur-xl">
              <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                <span className="text-purple-400">03.</span> Tech Stack
              </h3>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-white flex items-center gap-3 text-lg">
                        <span className="p-2 glass rounded-lg text-indigo-400 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-slate-500 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 glass rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "circOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                      >
                         <motion.div 
                          className="absolute inset-0 bg-white/20 animate-pulse"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                         />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  value: "3+",
                  label: "Years Experience",
                  icon: "✨",
                  color: "from-indigo-500 to-blue-500",
                },
                {
                  value: "25+",
                  label: "Live Projects",
                  icon: "�",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  value: "100%",
                  label: "Client Delight",
                  icon: "�",
                  color: "from-emerald-400 to-teal-500",
                },
                {
                  value: "10M+",
                  label: "Lines of Code",
                  icon: "⚡",
                  color: "from-orange-500 to-amber-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="glass rounded-3xl p-8 border border-white/5 text-center transition-colors duration-500"
                >
                  <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{stat.icon}</div>
                  <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 font-bold text-xs uppercase tracking-tighter">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

