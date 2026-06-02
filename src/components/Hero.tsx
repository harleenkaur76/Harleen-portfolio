"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Stronger ambient glows */}
      <div className="absolute top-1/4 -right-24 w-[700px] h-[700px] bg-[#e5bc5c]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/6 -left-24 w-[500px] h-[500px] bg-[#e5bc5c]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(229,188,92,0.3) 80px, rgba(229,188,92,0.3) 81px)',
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-24 left-6 w-8 h-8 border-l-2 border-t-2 border-[#e5bc5c]/20 pointer-events-none" />
      <div className="absolute bottom-24 right-6 w-8 h-8 border-r-2 border-b-2 border-[#e5bc5c]/20 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs text-[#e5bc5c] uppercase tracking-[0.3em] mb-8"
          >
            Frontend Engineer — India
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-10"
          >
            <span className="text-[#f2eee6]">Harleen</span>
            <br />
            <span className="gradient-text">Kaur</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-lg sm:text-xl text-[#b8ad9c] mb-12 max-w-xl leading-relaxed"
          >
            I build frontends that actually perform. Three years at{" "}
            <span className="text-[#f2eee6]">Optiphoenix</span> shipping A/B
            experiments, optimizing SPAs, and getting into arguments about CSS
            specificity.
          </motion.p>

          {/* Horizontal rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="origin-left flex items-center gap-4 mb-12 max-w-lg"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-[#e5bc5c]/60 to-transparent" />
            <span className="w-2 h-2 rounded-full bg-[#e5bc5c] shadow-[0_0_12px_rgba(229,188,92,0.5)]" />
            <div className="h-px flex-1 bg-gradient-to-l from-[#e5bc5c]/60 to-transparent" />
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-7 py-3.5 rounded bg-[#e5bc5c] text-[#0d0c0a] font-semibold text-sm hover:bg-[#f0d28a] transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(229,188,92,0.15)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                See what I built
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded border border-[#e5bc5c]/20 text-[#f2eee6] text-sm hover:border-[#e5bc5c]/50 hover:bg-[#e5bc5c]/5 transition-all duration-300"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1 ml-2">
              <a
                href="https://github.com/harleenkaur76"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[#b8ad9c] hover:text-[#e5bc5c] hover:bg-[#e5bc5c]/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/harleenkaur07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[#b8ad9c] hover:text-[#e5bc5c] hover:bg-[#e5bc5c]/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono text-[#b8ad9c]/40 uppercase tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#e5bc5c]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
