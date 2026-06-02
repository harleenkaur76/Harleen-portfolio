"use client";

import { motion } from "framer-motion";

export default function Now() {
  return (
    <section id="now" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-6">
            {/* Left accent line */}
            <div className="hidden sm:flex flex-col items-center gap-0 pt-2">
              <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
              <div className="w-px h-full min-h-[60px] bg-gradient-to-b from-[#d4a853]/40 to-transparent" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-mono text-[#d4a853] mb-6">// now — what I am doing lately</p>

              <div className="space-y-5 text-[#9a9386] leading-relaxed">
                <p>
                  Currently at{" "}
                  <span className="text-[#f2eee6]">Optiphoenix</span>, but I am
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
                  I need the energy to stay sharp through the prep grind. Not
                  sorry about it.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.04]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    { label: "based in", value: "India" },
                    { label: "status", value: "Open to work" },
                    { label: "fuel", value: "Coffee" },
                    { label: "vibe", value: "Music + bugs" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <p className="text-[11px] font-mono text-[#9a9386] uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#f2eee6]">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
