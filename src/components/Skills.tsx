"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Gauge, FlaskConical, BarChart3 } from "lucide-react";

const skillCategories = [
  { title: "Languages", icon: Code2, skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { title: "Frameworks & Libraries", icon: Wrench, skills: ["React", "Next.js", "Redux Toolkit", "Node.js", "Tailwind CSS", "Webpack"] },
  { title: "Performance & A11y", icon: Gauge, skills: ["Core Web Vitals", "Lighthouse", "Lazy Loading", "Code Splitting", "WCAG"] },
  { title: "A/B Testing & CRO", icon: FlaskConical, skills: ["Optimizely", "Convert", "Kameleoon", "Adobe Target", "VWO", "AB Tasty"] },
  { title: "Tooling", icon: BarChart3, skills: ["Git", "Google Analytics", "Figma", "Jira"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141210]/40 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          {/* Section number */}
          <div className="absolute -top-8 -left-4 sm:-left-8 pointer-events-none">
            <span className="text-[8rem] sm:text-[10rem] font-black text-white/[0.015] leading-none">03</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#e5bc5c]" />
            <p className="text-sm font-mono text-[#e5bc5c]">// tools</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">What I use</h2>
          <p className="text-[#b8ad9c] max-w-lg">
            Not an expert in all of these — but I have shipped production code with each one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-6 rounded-xl bg-[#181614]/80 border border-white/[0.04] hover:border-[#e5bc5c]/30 transition-all duration-400 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#e5bc5c]/[0.06] rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-[#e5bc5c]/10 group-hover:bg-[#e5bc5c]/20 transition-colors duration-300">
                    <category.icon size={18} className="text-[#e5bc5c]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#f2eee6] group-hover:text-[#e5bc5c] transition-colors duration-300">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + sIndex * 0.04 }}
                      className="px-3 py-1.5 rounded-lg text-[13px] font-mono text-[#b8ad9c] bg-white/[0.03] border border-white/[0.06] hover:border-[#e5bc5c]/30 hover:text-[#f2eee6] hover:bg-[#e5bc5c]/[0.04] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
