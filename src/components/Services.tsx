"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Gauge,
  FlaskConical,
  Palette,
  Server,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "Building scalable component libraries, design systems, and SPAs with React/Next.js. Reusable patterns that cut dev time by 35%.",
    skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"],
  },
  {
    icon: Gauge,
    title: "Performance Optimisation",
    description:
      "Lighthouse score improvements up to 40% through code splitting, lazy loading, critical path rendering, and asset optimisation.",
    skills: ["Core Web Vitals", "Lighthouse", "Webpack", "Code Splitting"],
  },
  {
    icon: FlaskConical,
    title: "A/B Testing & CRO",
    description:
      "End-to-end experiment lifecycle across 8+ platforms. Automated experiment creation that reduced setup time by 80%.",
    skills: ["Optimizely", "Adobe Target", "VWO", "Kameleoon"],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect implementation from Figma to production. Accessible components meeting WCAG 2.1 standards.",
    skills: ["Tailwind CSS", "Figma", "WCAG 2.1", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Full-Stack Integration",
    description:
      "Node.js tooling, REST API integration, and backend-for-frontend patterns. Built CLI tools adopted across engineering teams.",
    skills: ["Node.js", "REST APIs", "Gulp", "CLI Development"],
  },
  {
    icon: Search,
    title: "Analytics & Tracking",
    description:
      "Custom event tracking, data integrity enforcement, and analytics pipeline setup preventing false significance in experiments.",
    skills: ["Google Analytics", "Event Tracking", "Data Integrity"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest font-mono">
            &lt;services /&gt;
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            What I Do
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            I ship code that moves business metrics while staying clean and maintainable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-[#12121a] border border-white/5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md text-xs bg-white/5 text-[#6b7280] border border-white/5"
                    >
                      {skill}
                    </span>
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
