"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Zap, Shield, Rocket, Code, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Optiphoenix",
    period: "July 2022 – Present",
    duration: "3+ Years",
    type: "full-time",
    summary:
      "Leading frontend engineering for an experimentation-focused agency serving Fortune 500 clients. Own the full experiment lifecycle from ideation to statistical validation.",
    highlights: [
      {
        icon: Zap,
        metric: "80%",
        metricLabel: "faster setup",
        text: "Engineered a Node.js/Gulp CLI that automated programmatic experiment creation, audience targeting, and event tracking via Optimizely Web REST APIs — adopted as the standard workflow across the full engineering team.",
      },
      {
        icon: TrendingUp,
        metric: "100+",
        metricLabel: "experiments shipped",
        text: "Delivered production A/B experiments across Convert, Kameleoon, VWO, and Adobe Target — consistently achieving statistical significance within 2-week windows and driving CVR and retention uplift across 8+ accounts.",
      },
      {
        icon: Shield,
        metric: "Zero",
        metricLabel: "deployment errors",
        text: "Ensured experiment data integrity across high-traffic SPAs by implementing custom attribute-based event selectors on DOM-restricted client sites and eliminating duplicate goal fires.",
      },
      {
        icon: Rocket,
        metric: "40%",
        metricLabel: "Lighthouse improvement",
        text: "Improved Lighthouse performance scores by up to 40% across multiple high-traffic SPAs through lazy loading, code splitting, asset compression, and critical-path rendering strategies.",
      },
      {
        icon: Code,
        metric: "35%",
        metricLabel: "faster dev time",
        text: "Reduced feature development time by architecting reusable React.js component libraries aligned to Figma-based design systems — standardising UI patterns across 6+ client projects.",
      },
    ],
    tools: ["React.js", "Optimizely", "Node.js", "Gulp", "Webpack", "Google Analytics", "Figma"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Optiphoenix",
    period: "Dec 2021 – June 2022",
    duration: "7 Months",
    type: "internship",
    summary:
      "Joined as an intern and quickly became a core contributor. Focused on performance optimisation and modern build tooling adoption.",
    highlights: [
      {
        icon: TrendingUp,
        metric: "30%",
        metricLabel: "faster load time",
        text: "Reduced initial page load time by 30% and grew organic traffic by 20% within one quarter by implementing Webpack bundling, code splitting, lazy loading, and SEO improvements across 3 client SPAs.",
      },
    ],
    tools: ["React.js", "Webpack", "SEO", "Performance"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Work Experience
          </h2>
          <p className="text-[#6b7280] max-w-xl">
            Every role has been measured by business impact. Here is how I have driven results at Optiphoenix.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B5CF6]/50 via-[#00d4aa]/30 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 top-1 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-[#8B5CF6] z-10" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#f5f5f5]">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-[#8B5CF6] font-medium">{exp.company}</span>
                        <span className="text-[#6b7280]">·</span>
                        <span className="text-sm text-[#6b7280]">{exp.period}</span>
                        <span className="text-[#6b7280]">·</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-[#6b7280]">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[#a1a1aa] mb-6 leading-relaxed">{exp.summary}</p>

                {/* Highlights */}
                <div className="space-y-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: hIndex * 0.1 }}
                      className="group flex gap-4 p-5 rounded-xl bg-[#12121a] border border-white/5 card-hover"
                    >
                      <div className="shrink-0 text-center">
                        <div className="p-2.5 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] mb-2">
                          <highlight.icon size={18} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-2xl font-bold text-[#8B5CF6]">
                            {highlight.metric}
                          </span>
                          <span className="text-xs text-[#6b7280] uppercase tracking-wide">
                            {highlight.metricLabel}
                          </span>
                        </div>
                        <p className="text-sm text-[#a1a1aa] leading-relaxed">
                          {highlight.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-[#6b7280] border border-white/5"
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
