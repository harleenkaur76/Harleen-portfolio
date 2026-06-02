"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Section bg tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/40 via-[#0d0c0a] to-[#141210]/30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          {/* Large section number */}
          <div className="absolute -top-8 -right-4 sm:-right-8 pointer-events-none">
            <span className="text-[8rem] sm:text-[10rem] font-black text-white/[0.015] leading-none">
              02
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#e5bc5c]" />
            <p className="text-sm font-mono text-[#e5bc5c]">// experience</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">
            Where I worked
          </h2>
          <p className="text-[#b8ad9c] leading-relaxed max-w-xl">
            Just one company so far, but I have shipped enough experiments across enough platforms
            to feel like I worked at five.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line — brighter */}
          <div className="absolute left-3 top-2 bottom-8 w-0.5 bg-gradient-to-b from-[#e5bc5c]/40 via-[#e5bc5c]/20 to-transparent rounded-full" />

          <div className="space-y-20">
            {/* Role 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-12"
            >
              {/* Timeline dot — more visible */}
              <div className="absolute left-0 top-0 w-7 h-7 rounded-full border-2 border-[#e5bc5c]/40 bg-[#0d0c0a] flex items-center justify-center shadow-[0_0_15px_rgba(229,188,92,0.1)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e5bc5c] shadow-[0_0_8px_rgba(229,188,92,0.4)]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#f2eee6]">Frontend Developer</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 font-mono text-sm">
                  <span className="text-[#e5bc5c] font-medium">Optiphoenix</span>
                  <span className="w-1 h-1 rounded-full bg-[#9a9386]/30" />
                  <span className="text-[#9a9386]">2022 – Present</span>
                  <span className="w-1 h-1 rounded-full bg-[#9a9386]/30" />
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#e5bc5c]/10 text-[#e5bc5c] border border-[#e5bc5c]/20">3+ years</span>
                </div>
              </div>

              <p className="text-[#b8ad9c] text-sm leading-relaxed mt-5 max-w-xl">
                Joined as an intern and somehow they kept me around. I handle the full frontend lifecycle
                for A/B experiments across enterprise clients. React components in the morning, debugging
                why an Optimizely variation is not firing in the afternoon.
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-4 max-w-xl">
                {[
                  "Built a Node.js/Gulp CLI that automated experiment creation via the Optimizely REST API. The whole team uses it now.",
                  "Shipped 100+ experiments across Convert, Kameleoon, VWO, Adobe Target, and others.",
                  "Fixed a race condition in a Microsoft SPA that was causing duplicate goal fires. Took two days and three coffees.",
                  "Improved Lighthouse scores by up to 40% on high-traffic SPAs through lazy loading and code splitting.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <span className="text-[#e5bc5c]/40 group-hover:text-[#e5bc5c] font-mono text-sm shrink-0 mt-0.5 transition-colors duration-300">→</span>
                    <span className="text-sm text-[#b8ad9c] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-7">
                {["React", "Optimizely", "Node.js", "Gulp", "Webpack", "GA4", "Figma"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1.5 rounded-md text-[11px] font-mono text-[#b8ad9c] bg-white/[0.04] border border-white/[0.06] hover:border-[#e5bc5c]/30 hover:text-[#f2eee6] transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Role 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-0 w-7 h-7 rounded-full border-2 border-[#e5bc5c]/30 bg-[#0d0c0a] flex items-center justify-center shadow-[0_0_15px_rgba(229,188,92,0.08)]">
                <div className="w-2 h-2 rounded-full bg-[#e5bc5c]/70" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#f2eee6]">Frontend Developer Intern</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 font-mono text-sm">
                  <span className="text-[#e5bc5c] font-medium">Optiphoenix</span>
                  <span className="w-1 h-1 rounded-full bg-[#9a9386]/30" />
                  <span className="text-[#9a9386]">Dec 2021 – June 2022</span>
                  <span className="w-1 h-1 rounded-full bg-[#9a9386]/30" />
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#e5bc5c]/10 text-[#e5bc5c] border border-[#e5bc5c]/20">7 months</span>
                </div>
              </div>

              <p className="text-[#b8ad9c] text-sm leading-relaxed mt-5 max-w-xl">
                My first real job. I spent a lot of time learning by breaking things and then
                frantically fixing them before anyone noticed.
              </p>
              <ul className="mt-4 space-y-3 max-w-xl">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4"
                >
                  <span className="text-[#e5bc5c]/40 font-mono text-sm shrink-0 mt-0.5">→</span>
                  <span className="text-sm text-[#b8ad9c] leading-relaxed">
                    Reduced page load times by 30% on three client SPAs by implementing code splitting and lazy loading.
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
