"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Gauge, FlaskConical, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    skills: ["React", "Next.js", "Redux Toolkit", "Node.js", "Tailwind CSS", "Webpack"],
  },
  {
    title: "Performance & A11y",
    icon: Gauge,
    skills: ["Core Web Vitals", "Lighthouse", "Lazy Loading", "Code Splitting", "WCAG"],
  },
  {
    title: "A/B Testing & CRO",
    icon: FlaskConical,
    skills: ["Optimizely", "Convert", "Kameleoon", "Adobe Target", "VWO", "AB Tasty"],
  },
  {
    title: "Tooling",
    icon: BarChart3,
    skills: ["Git", "Google Analytics", "Figma", "Jira"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#d4a853]" />
            <p className="text-sm font-mono text-[#d4a853]">// tools</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">
            What I use
          </h2>
          <p className="text-[#9a9386] max-w-lg">
            I am not going to claim I am an expert in all of these. I have shipped production code
            with each one, some more than others.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-lg bg-[#181614] border border-white/[0.04] hover:border-[#d4a853]/20 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#d4a853]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-[#d4a853]/10">
                    <category.icon size={18} className="text-[#d4a853]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#f2eee6]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIndex * 0.03 }}
                      className="px-2.5 py-1 rounded text-sm font-mono text-[#9a9386] bg-white/[0.03] border border-white/[0.05] hover:border-[#d4a853]/30 hover:text-[#f2eee6] transition-all cursor-default"
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
