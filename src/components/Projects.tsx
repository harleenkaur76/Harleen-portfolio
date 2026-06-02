"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "StreamVault",
    year: "2025",
    description:
      "My take on a video platform. I wanted to see if I could build something with AI-generated thumbnails and WebRTC livestreaming from scratch. The recommendation algorithm is a TensorFlow.js model trained on watch history. It works better than I expected, honestly.",
    stack: ["Next.js 14", "Node.js", "MongoDB", "WebRTC", "TensorFlow.js"],
    links: { github: "https://github.com/harleenkaur76", live: null },
  },
  {
    title: "CogniFlow",
    year: "2024",
    description:
      "A productivity workspace for teams that use AI. The tricky part was building a real-time document pipeline with RAG — ingest a PDF, chunk it, embed it, and let users ask questions. I used LangChain for the orchestration and Pinecone for the vector store.",
    stack: ["Next.js", "PostgreSQL", "OpenAI", "LangChain", "Pinecone", "Stripe"],
    links: { github: "https://github.com/harleenkaur76", live: null },
  },
  {
    title: "Caviar",
    year: "2023",
    description:
      "A food ordering app I built to learn Redux Toolkit properly. The constraint I set: sub-2-second LCP on 3G. I spent way too long on the shimmer skeleton screens but they were worth it.",
    stack: ["React", "Redux Toolkit", "React Router", "Service Workers"],
    links: { github: "https://github.com/harleenkaur76", live: null },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
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
            <p className="text-sm font-mono text-[#d4a853]">// projects</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">
            Things I built
          </h2>
          <p className="text-[#9a9386] leading-relaxed max-w-lg">
            A few side projects where I got carried away. Most started as "let me just try this
            one thing" and ended up as full-stack builds.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Left accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a853]/40 via-[#d4a853]/10 to-transparent group-hover:from-[#d4a853]/70 group-hover:via-[#d4a853]/20 transition-all duration-500" />

              <div className="pl-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-[#f2eee6] group-hover:text-[#d4a853] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[#9a9386]/50">{project.year}</span>
                </div>

                <p className="text-[#9a9386] leading-relaxed mb-6 max-w-lg">
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="px-2.5 py-1 rounded text-[11px] font-mono text-[#9a9386] bg-white/[0.03] border border-white/[0.05] hover:border-[#d4a853]/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#9a9386] hover:text-[#d4a853] transition-colors group/link"
                  >
                    <GithubIcon size={14} />
                    <span className="relative">
                      Code
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover/link:w-full transition-all duration-300" />
                    </span>
                  </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#9a9386] hover:text-[#d4a853] transition-colors group/link"
                    >
                      <ExternalLink size={14} />
                      <span className="relative">
                        Live
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover/link:w-full transition-all duration-300" />
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Separator */}
              {index < projects.length - 1 && (
                <div className="mt-16 ml-8 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/[0.03]" />
                  <span className="text-[10px] font-mono text-[#9a9386]/20">∿</span>
                  <div className="h-px flex-1 bg-white/[0.03]" />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
