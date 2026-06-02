"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#d4a853]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#d4a853]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Giant watermark text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <span className="text-[20rem] font-black text-white/[0.015] tracking-tighter leading-none">
          HK
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs text-[#9a9386] uppercase tracking-[0.2em] mb-6"
          >
            Frontend Engineer / India
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="text-[#f2eee6]">Harleen</span>
            <br />
            <span className="gradient-text">Kaur</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#9a9386] mb-10 max-w-xl leading-relaxed"
          >
            I build frontends that actually perform. Three years at Optiphoenix
            shipping A/B experiments, optimizing SPAs, and getting into arguments
            about CSS specificity. I care about the 50 milliseconds between a click
            and something happening.
          </motion.p>

          {/* Horizontal rule with dot */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="origin-left flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4a853]/40 to-transparent" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
            <div className="h-px flex-1 bg-gradient-to-l from-[#d4a853]/40 to-transparent" />
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded bg-[#d4a853] text-[#0d0c0a] font-semibold text-sm hover:bg-[#e8c97a] transition-all overflow-hidden"
            >
              <span className="relative z-10">See what I built</span>
              <span className="absolute inset-0 bg-[#f2eee6]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded border border-white/[0.08] text-[#f2eee6] text-sm hover:bg-white/[0.03] hover:border-white/[0.15] transition-all"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/harleenkaur76"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded text-[#9a9386] hover:text-[#d4a853] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/harleenkaur07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded text-[#9a9386] hover:text-[#d4a853] transition-all"
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
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono text-[#9a9386]/40 uppercase tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#d4a853]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
