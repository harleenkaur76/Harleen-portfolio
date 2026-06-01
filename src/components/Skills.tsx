"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "C++", level: 70 },
    ],
    color: "#8B5CF6",
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Redux Toolkit", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Webpack", level: 80 },
      { name: "Gulp", level: 85 },
    ],
    color: "#00d4aa",
  },
  {
    title: "Performance & A11y",
    skills: [
      { name: "Core Web Vitals", level: 92 },
      { name: "Lighthouse", level: 90 },
      { name: "Lazy Loading", level: 95 },
      { name: "Code Splitting", level: 90 },
      { name: "WCAG 2.1", level: 85 },
      { name: "SEO Optimisation", level: 88 },
    ],
    color: "#8B5CF6",
  },
  {
    title: "A/B Testing & CRO",
    skills: [
      { name: "Optimizely", level: 95 },
      { name: "Convert", level: 90 },
      { name: "Kameleoon", level: 88 },
      { name: "Adobe Target", level: 85 },
      { name: "VWO", level: 90 },
      { name: "AB Tasty", level: 82 },
      { name: "WebTrends Optimize", level: 78 },
    ],
    color: "#00d4aa",
  },
  {
    title: "Analytics & Tooling",
    skills: [
      { name: "Google Analytics", level: 90 },
      { name: "Event Tracking", level: 92 },
      { name: "Git", level: 88 },
      { name: "Figma", level: 85 },
      { name: "Jira", level: 90 },
      { name: "Agile/Scrum", level: 88 },
    ],
    color: "#8B5CF6",
  },
];

function ProficiencyBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-[#a1a1aa]">{name}</span>
        <span className="text-xs font-mono text-[#6b7280]">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest">
            Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Skills & Proficiency
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            Deep expertise across the frontend stack with quantified proficiency levels.
            Deep expertise in A/B testing platforms and performance optimisation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#12121a] border border-white/5 card-hover"
            >
              <h3
                className="text-lg font-semibold mb-5"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
              {category.skills.map((skill, sIndex) => (
                <ProficiencyBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={index * 0.1 + sIndex * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
