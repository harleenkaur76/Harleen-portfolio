"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Optiphoenix",
    period: "2022 – Present",
    duration: "3+ years",
    summary:
      "Joined as an intern and somehow they kept me around. I now handle the full frontend lifecycle for A/B experiments across multiple enterprise clients. My day-to-day is React components in the morning, debugging why an Optimizely variation is not firing in the afternoon, and writing CSS that has to work in whatever ancient build system the client runs.",
    highlights: [
      "Built a Node.js/Gulp CLI that automated experiment creation via the Optimizely REST API. The whole team uses it now, which is both flattering and slightly terrifying.",
      "Shipped 100+ experiments across Convert, Kameleoon, VWO, Adobe Target, and others. I have strong opinions about which platforms are good and which ones make you cry.",
      "Fixed a race condition in a Microsoft SPA experiment that was causing duplicate goal fires. Took two days and three coffees. Felt very good when it worked.",
      "Improved Lighthouse scores by up to 40% on high-traffic SPAs through lazy loading, code splitting, and yelling at asset compression until it cooperated.",
    ],
    tools: ["React", "Optimizely", "Node.js", "Gulp", "Webpack", "GA4", "Figma"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Optiphoenix",
    period: "Dec 2021 – June 2022",
    duration: "7 months",
    summary:
      "My first real job. I spent a lot of time learning by breaking things and then frantically fixing them before anyone noticed. Got really good at Webpack during this period, mostly because I had to.",
    highlights: [
      "Reduced page load times by 30% on three client SPAs by implementing code splitting and lazy loading. First time I realized performance work is as much about measurement as it is about code.",
    ],
    tools: ["React", "Webpack", "SEO"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#d4a853]" />
            <p className="text-sm font-mono text-[#d4a853]">// experience</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">
            Where I worked
          </h2>
          <p className="text-[#9a9386] leading-relaxed max-w-xl">
            Just one company so far, but I have shipped enough experiments across enough platforms
            to feel like I worked at five.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] sm:left-[15px] top-8 bottom-8 w-px bg-gradient-to-b from-[#d4a853]/30 via-[#d4a853]/10 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-3 top-1.5 w-5 h-5 rounded-full border-2 border-[#d4a853]/50 bg-[#0d0c0a] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#f2eee6]">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 font-mono text-xs text-[#9a9386]">
                      <span className="text-[#d4a853]">{exp.company}</span>
                      <span className="text-white/10">|</span>
                      <span>{exp.period}</span>
                      <span className="text-white/10">|</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.03] text-[#9a9386]/70">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#9a9386] text-sm leading-relaxed mb-5">
                  {exp.summary}
                </p>

                <div className="space-y-3 mb-5">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-3 group"
                    >
                      <span className="text-[#d4a853]/50 group-hover:text-[#d4a853] transition-colors shrink-0 mt-1 font-mono text-xs">→</span>
                      <p className="text-sm text-[#9a9386] leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded text-[11px] font-mono text-[#9a9386] bg-white/[0.03] border border-white/[0.05] hover:border-[#d4a853]/20 hover:text-[#f2eee6] transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
