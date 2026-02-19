// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React/Next.js",
    level: 90,
    color: "from-cyan-400 to-blue-500",
    icon: "⚛️",
  },
  {
    name: "Node.js",
    level: 85,
    color: "from-green-400 to-emerald-500",
    icon: "🟢",
  },
  {
    name: "TypeScript",
    level: 70,
    color: "from-blue-400 to-indigo-500",
    icon: "📘",
  },
  {
    name: "Socket.io",
    level: 60,
    color: "from-gray-400 to-slate-500",
    icon: "🔌",
  },
  {
    name: "MongoDB",
    level: 80,
    color: "from-green-400 to-lime-500",
    icon: "🍃",
  },
  {
    name: "Express",
    level: 80,
    color: "from-purple-400 to-pink-500",
    icon: "📹",
  },
];

const experiences = [
  {
    year: "2026 - Present",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    description:
      "Leading development of real-time applications with React and Socket.io",
  },
  {
    year: "2023 - 2025",
    title: "Full Stack Developer",
    company: "StartupHub",
    description:
      "Built multiple web applications from scratch using MERN stack",
  },
  {
    year: "2022 - 2023",
    title: "Junior Developer",
    company: "Digital Agency",
    description:
      "Developed responsive websites and learned modern web technologies",
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-slate-900">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Who am I?
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                I'm a passionate full-stack developer with expertise in building
                real-time applications. I specialize in creating seamless chat
                experiences, collaborative tools, and interactive web
                applications that users love.
              </p>

              <p className="text-slate-400 mb-8 leading-relaxed">
                With 3+ years of experience, I've worked on various projects
                ranging from real-time chat applications to complex dashboards.
                I'm passionate about clean code, performance optimization, and
                creating smooth user experiences.
              </p>

              <h4 className="text-xl font-semibold mb-4 text-white">
                Experience
              </h4>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-indigo-500/30"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                    <span className="text-sm text-indigo-400">{exp.year}</span>
                    <h5 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h5>
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                    <p className="text-slate-500 text-sm mt-1">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
           
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium flex items-center gap-2">
                        <span>{skill.icon}</span> {skill.name}
                      </span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 glass rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "20+",
                  label: "Projects",
                  icon: "🚀",
                  color: "from-indigo-500 to-purple-500",
                },
                {
                  value: "15+",
                  label: "Happy Clients",
                  icon: "😊",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  value: "5k+",
                  label: "Hours Coding",
                  icon: "💻",
                  color: "from-orange-500 to-red-500",
                },
                {
                  value: "30+",
                  label: "Technologies",
                  icon: "🔧",
                  color: "from-pink-500 to-rose-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 text-center"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`text-3xl mb-2 bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
