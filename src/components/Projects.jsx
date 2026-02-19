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

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Showcasing my best work in web and mobile development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                  : "glass text-slate-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="glass rounded-3xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Live Demo Button on Hover */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-900 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo 🔗
                  </motion.a>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.title === "Real-Time Chat App" && (
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs text-white font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 glass rounded-full text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 glass rounded-full text-xs text-slate-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Features Preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs text-slate-500 flex items-center gap-1"
                      >
                        <span className="text-indigo-400">✓</span> {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent`}
                  />
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold gradient-text">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.title === "Real-Time Chat App" && (
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm text-white font-medium">
                        🔥 Live Demo Available
                      </span>
                    )}
                  </div>

                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-slate-300"
                        >
                          <span className="text-indigo-400 text-xl">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 glass rounded-xl text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {selectedProject.title === "Real-Time Chat App"
                        ? "🚀 Launch Chat App"
                        : "🔗 View Live Demo"}
                    </motion.a>

                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-4 glass rounded-xl text-white font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        GitHub 📦
                      </motion.a>
                    )}

                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-4 glass rounded-xl text-white font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Close ✕
                    </motion.button>
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
