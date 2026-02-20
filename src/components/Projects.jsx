// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ["all", "web", "mobile", "ai/ml"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    },
  };

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of my most ambitious projects, spanning from highly scalable web platforms to intelligent mobile ecosystems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-16 flex-wrap"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-8 py-3 rounded-2xl font-bold transition-all duration-500 overflow-hidden group ${
                filter === cat
                  ? "text-white"
                  : "glass text-slate-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 -z-10 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 uppercase tracking-widest text-xs">
                {cat}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={projectVariants}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-slate-900 border border-white/5"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image & Overlay */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.1 : 1,
                      filter: hoveredProject === project.id ? "brightness(0.3) blur(2px)" : "brightness(0.6)"
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <motion.div
                    animate={{ y: hoveredProject === project.id ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {project.tags.slice(0, 1).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400 border border-white/10 backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:gradient-text transition-all duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-500"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.div>
                      <span className="text-xs font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore Project</span>
                    </div>
                  </motion.div>
                </div>

                {/* Top Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/90 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 100, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="glass rounded-[3rem] max-w-6xl w-full h-full max-h-[90vh] overflow-hidden border border-white/10 flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 z-50 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Visual Side */}
                <div className="w-full md:w-1/2 h-72 md:h-auto relative bg-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 md:from-transparent" />
                </div>

                {/* Modal Content Side */}
                <div className="w-full md:w-1/2 p-10 md:p-16 overflow-y-auto bg-slate-900/50 flex flex-col">
                  <div className="mb-10">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-5xl font-black text-white mb-6 tracking-tight"
                    >
                      {selectedProject.title}
                    </motion.h2>
                    <p className="text-slate-300 text-lg leading-relaxed font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-10 mb-12">
                    {/* Features */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-6">Execution & Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, i) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4 p-4 glass rounded-2xl border border-white/5"
                          >
                            <span className="text-purple-400 mt-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-slate-300 text-sm font-semibold">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 mb-6">Technology Blueprint</h3>
                      <div className="flex flex-wrap gap-3 text-white">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs font-bold tracking-wider uppercase text-indigo-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap gap-6 pt-10 border-t border-white/5">
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold text-center shadow-[0_0_30px_rgba(79,70,229,0.3)]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Live Experience
                    </motion.a>
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 glass rounded-2xl text-white font-bold border border-white/10 hover:bg-white/5 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Open Architecture
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

