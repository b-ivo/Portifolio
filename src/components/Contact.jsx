// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: "📧",
                title: "Email",
                value: "ivobryan12@gmail.com",
                link: "mailto:ivobryan12@gmail.com",
              },
              {
                icon: "📱",
                title: "Phone",
                value: "+250 722 722 861",
                link: "tel:+250722722861",
              },
              {
                icon: "📍",
                title: "Location",
                value: "San Francisco, CA",
                link: "#",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="glass rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="text-sm text-slate-400">{item.title}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-400">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
                  </div>
                ) : isSubmitted ? (
                  "✓ Message Sent Successfully!"
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            {
              icon: "📧",
              link: "mailto:ivobryanntwalishema@gmail.com",
              label: "Email",
              color: "from-indigo-500 to-purple-500",
            },
            {
              icon: "💼",
              link: "https://linkedin.com/in/ivobryan",
              label: "LinkedIn",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: "🐱",
              link: "https://github.com/b-ivo",
              label: "GitHub",
              color: "from-gray-500 to-slate-500",
            },
            {
              icon: "🐦",
              link: "https://twitter.com/b-ivo",
              label: "Twitter",
              color: "from-sky-500 to-blue-500",
            },
            {
              icon: "📷",
              link: "https://instagram.com/b.__ivo",
              label: "Instagram",
              color: "from-pink-500 to-rose-500",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 glass rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${social.color} bg-opacity-20`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
