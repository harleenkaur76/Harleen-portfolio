"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee, Music, Briefcase } from "lucide-react";

export default function Now() {
  return (
    <section id="now" className="py-20 px-6 relative">
      {/* Subtle section bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/50 via-transparent to-[#141210]/30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Large section number */}
          <div className="absolute -top-8 -left-4 sm:-left-8 pointer-events-none">
            <span className="text-[8rem] sm:text-[10rem] font-black text-white/[0.015] leading-none">
              01
            </span>
          </div>

          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#e5bc5c]" />
            <p className="text-sm font-mono text-[#e5bc5c]">// now</p>
          </div>

          {/* Card wrapper for visual pop */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#181614]/60 border border-white/[0.04] backdrop-blur-sm">
            <div className="space-y-5 text-[#b8ad9c] leading-relaxed">
              <p>
                Currently at{" "}
                <span className="text-[#f2eee6] font-medium">Optiphoenix</span>, but I am
                actively trying to switch roles. Studying daily — system design,
                advanced React patterns, AI tooling like LangChain and vector DBs.
                If you know a frontend team that values performance and
                experimentation, send them my way.
              </p>

              <p>
                Weekend ritual: pick a side project idea Friday night, get deep
                into it, abandon it by Sunday afternoon. AI experiments have
                been sticking more often lately — maybe because I actually want
                to learn it properly, not just follow tutorials.
              </p>

              <p>
                Running on coffee. Not a personality trait, just a survival fact.
                And popular music — pop, Bollywood, whatever is trending — because
                I need the energy to stay sharp through the prep grind.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {[
                  { icon: MapPin, label: "based in", value: "India" },
                  { icon: Briefcase, label: "status", value: "Open to work" },
                  { icon: Coffee, label: "fuel", value: "Coffee" },
                  { icon: Music, label: "vibe", value: "Music + bugs" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <item.icon size={14} className="text-[#e5bc5c]/60 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-[#9a9386] uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#f2eee6]">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
