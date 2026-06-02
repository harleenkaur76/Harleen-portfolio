"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "StreamVault",
    year: "2025",
    description:
      "My take on a video platform. AI-generated thumbnails, WebRTC livestreaming, and a TensorFlow.js recommendation engine trained on watch history.",
    stack: ["Next.js 14", "Node.js", "MongoDB", "WebRTC", "TensorFlow.js"],
    image: "/projects/streamvault.jpg",
    links: { github: "https://github.com/harleenkaur76", live: null },
  },
  {
    title: "CogniFlow",
    year: "2024",
    description:
      "A productivity workspace for AI-powered teams. Real-time document pipeline with RAG — ingest, chunk, embed, ask questions. LangChain + Pinecone.",
    stack: ["Next.js", "PostgreSQL", "OpenAI", "LangChain", "Pinecone", "Stripe"],
    image: "/projects/cogniflow.jpg",
    links: { github: "https://github.com/harleenkaur76", live: null },
  },
  {
    title: "Caviar",
    year: "2023",
    description:
      "Food ordering app built to learn Redux Toolkit. Constraint: sub-2s LCP on 3G. Shimmer skeletons were worth every hour.",
    stack: ["React", "Redux Toolkit", "React Router", "Service Workers"],
    image: "/projects/caviar.jpg",
    links: { github: "https://github.com/harleenkaur76", live: null },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/40 via-transparent to-[#141210]/30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="absolute -top-8 -right-4 sm:-right-8 pointer-events-none">
            <span className="text-[8rem] sm:text-[10rem] font-black text-white/[0.015] leading-none">04</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#e5bc5c]" />
            <p className="text-sm font-mono text-[#e5bc5c]">// projects</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">Things I built</h2>
          <p className="text-[#b8ad9c] leading-relaxed max-w-lg">
            Side projects where I got carried away. Most started as "let me just try one thing".
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image area */}
              <div className="mb-6 relative overflow-hidden rounded-xl bg-[#181614] border border-white/[0.04] aspect-video flex items-center justify-center group-hover:border-[#e5bc5c]/20 transition-all duration-500">
                <div className="absolute inset-0 bg-[#e5bc5c]/[0.02] group-hover:bg-[#e5bc5c]/[0.04] transition-colors duration-500" />
                <div className="flex flex-col items-center gap-3 text-[#9a9386]/40">
                  <FolderGit2 size={40} strokeWidth={1} />
                  <span className="font-mono text-xs">Add {project.image}</span>
                </div>
                {/* Year badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0d0c0a]/80 border border-white/[0.06]">
                  <span className="text-xs font-mono text-[#e5bc5c]">{project.year}</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4 mb-4">
                <h3 className="text-2xl font-bold text-[#f2eee6] group-hover:text-[#e5bc5c] transition-colors duration-300">{project.title}</h3>
                <span className="font-mono text-xs text-[#9a9386]">{project.year}</span>
              </div>

              <p className="text-[#b8ad9c] leading-relaxed mb-6 max-w-lg">{project.description}</p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {project.stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="px-3 py-1.5 rounded-md text-[12px] font-mono text-[#b8ad9c] bg-white/[0.04] border border-white/[0.06] hover:border-[#e5bc5c]/30 hover:text-[#f2eee6] transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#b8ad9c] hover:text-[#e5bc5c] transition-colors duration-300 group/link"
                >
                  <GithubIcon size={15} />
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
                    className="inline-flex items-center gap-2 text-sm text-[#b8ad9c] hover:text-[#e5bc5c] transition-colors duration-300 group/link"
                  >
                    <ExternalLink size={15} />
                    <span className="relative">
                      Live site
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover/link:w-full transition-all duration-300" />
                    </span>
                  </a>
                )}
              </div>

              {index < projects.length - 1 && (
                <div className="mt-16 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/[0.05]" />
                  <span className="text-[10px] font-mono text-[#9a9386]/25">∿</span>
                  <div className="h-px flex-1 bg-white/[0.05]" />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
