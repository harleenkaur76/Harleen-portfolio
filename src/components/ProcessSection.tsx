"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, BarChart3, Repeat } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery & Audit",
    description:
      "Deep-dive into the codebase, analytics data, and business goals. I identify conversion bottlenecks and performance gaps before writing a single line of code.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Strategy & Hypothesis",
    description:
      "Data-informed experiment hypotheses tied to measurable KPIs. Every frontend decision is mapped to business impact — CVR, retention, or LTV.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Engineering & Build",
    description:
      "Clean, type-safe code with accessibility and performance as first-class concerns. Reusable component patterns that scale across teams.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Deploy & Monitor",
    description:
      "Zero-downtime deployments with automated QA checks. Real-time monitoring of Core Web Vitals and experiment health metrics.",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Measure & Validate",
    description:
      "Statistical significance validation within 2-week windows. Clean analytics signal — no duplicate events, no false significance.",
  },
  {
    num: "06",
    icon: Repeat,
    title: "Iterate & Scale",
    description:
      "Winning variations get productionised. Learnings feed into the next cycle. Internal tooling is built to make future experiments 80% faster.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest font-mono">
            &lt;process /&gt;
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            How I Ship
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            Refined across 100+ experiments. Not dogma — just what works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -top-4 -left-2 text-6xl font-bold text-white/[0.03] group-hover:text-[#8B5CF6]/[0.08] transition-colors duration-300 select-none">
                {step.num}
              </div>
              <div className="relative p-6 rounded-2xl bg-[#12121a] border border-white/5 h-full card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    <step.icon size={20} />
                  </div>
                  <span className="text-xs font-mono text-[#6b7280]">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
