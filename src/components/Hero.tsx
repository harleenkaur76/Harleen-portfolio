"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import TextScramble from "./TextScramble";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00d4aa]/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium border border-[#8B5CF6]/20">
                <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-[#f5f5f5]">Harleen</span>{" "}
              <span className="gradient-text">Kaur</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-5"
            >
              <div className="text-lg sm:text-xl text-[#6b7280] font-mono">
                <TextScramble
                  text="Frontend Engineer & A/B Testing Expert"
                  className="text-[#f5f5f5]"
                  delay={500}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base text-[#6b7280] max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              3+ years shipping production-grade A/B experiments and
              performance-optimised SPAs for{" "}
              <span className="text-[#f5f5f5] font-medium">Microsoft</span>,{" "}
              <span className="text-[#f5f5f5] font-medium">Accor</span>, and{" "}
              <span className="text-[#f5f5f5] font-medium">Norwegian Air Shuttle</span>.
              Delivered{" "}
              <span className="text-[#8B5CF6] font-medium">100+ experiments</span>{" "}
              across{" "}
              <span className="text-[#8B5CF6] font-medium">8+ platforms</span>.
            </motion.p>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-sm text-[#a1a1aa] border border-white/5">
                <MapPin size={13} className="text-[#8B5CF6]" />
                India
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-sm text-[#a1a1aa] border border-white/5">
                <Phone size={13} className="text-[#00d4aa]" />
                (+91) 9990213284
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-sm text-[#a1a1aa] border border-white/5">
                <Mail size={13} className="text-[#8B5CF6]" />
                harleenbindra07@gmail.com
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-[#8B5CF6] text-white font-semibold hover:bg-[#8B5CF6]/90 transition-all hover:scale-105 text-sm"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#projects"
                className="px-7 py-3 rounded-full border border-white/10 text-[#f5f5f5] font-semibold hover:bg-white/5 transition-all text-sm"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-[#00d4aa]/30 text-[#00d4aa] font-semibold hover:bg-[#00d4aa]/10 transition-all text-sm"
              >
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/harleenkaur76"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-[#6b7280] hover:text-[#f5f5f5] hover:bg-white/10 transition-all"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/harleenkaur07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-[#6b7280] hover:text-[#f5f5f5] hover:bg-white/10 transition-all"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:harleenbindra07@gmail.com"
                className="p-2.5 rounded-lg bg-white/5 text-[#6b7280] hover:text-[#f5f5f5] hover:bg-white/10 transition-all"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#00d4aa]/20 blur-2xl scale-110" />

              {/* Photo frame */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border border-white/10 bg-[#12121a]">
                <img
                  src="/profile.jpg"
                  alt="Harleen Kaur"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#8B5CF6]/20 to-[#00d4aa]/20"><span class="text-5xl font-bold text-[#8B5CF6]">HK</span><span class="text-sm text-[#6b7280] mt-2">Add /profile.jpg</span></div>`;
                    }
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl bg-[#12121a] border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d4aa]" />
                  <span className="text-sm font-medium text-[#f5f5f5]">
                    Open to Work
                  </span>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-3 -left-3 px-3 py-2 rounded-xl bg-[#12121a] border border-white/10 shadow-xl"
              >
                <div className="text-center">
                  <span className="text-lg font-bold text-[#8B5CF6]">3+</span>
                  <span className="block text-[10px] text-[#6b7280] uppercase tracking-wide">
                    Years Exp
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-[#6b7280]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
