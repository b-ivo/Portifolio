import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const nameLetters = "Ivo Bryan".split("");

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-8 border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="gradient-text font-bold tracking-wider uppercase text-xs">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white"
            >
              Building the <br />
              <span className="gradient-text">Future</span> 
              {" "}of Web
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
              Hi, I'm <span className="text-white font-bold">Ivo Bryan</span>. 
              I architect high-performance digital solutions where 
              <span className="text-indigo-400 font-semibold"> elegance</span> meets 
              <span className="text-purple-400 font-semibold"> engineering</span>.
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              <motion.a
                href="#projects"
                className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                whileHover={{ scale: 1.05, shadow: "0_0_30px_rgba(79,70,229,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-10 py-5 glass rounded-2xl text-white font-bold text-lg border border-white/5 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Trusted by/Small Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-10 border-t border-white/5 flex gap-12"
            >
              {[
                { label: "EXPERIENCE", value: "3+ YRS" },
                { label: "PROJECTS", value: "25+" },
                { label: "CLIENTS", value: "100%" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xs font-black text-slate-500 mb-1 tracking-widest">{stat.label}</div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              {/* Floating Shapes */}
              <motion.div 
                animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-[4rem] backdrop-blur-3xl border border-white/10 flex items-center justify-center"
              >
                <span className="text-8xl">🚀</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/20 rounded-[5rem] backdrop-blur-3xl border border-white/10 flex items-center justify-center"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-xl bg-white/10 animate-pulse" />)}
                </div>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-96 h-96 bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 rounded-full blur-[80px]" 
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-2 border-dashed border-white/10 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-indigo-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

