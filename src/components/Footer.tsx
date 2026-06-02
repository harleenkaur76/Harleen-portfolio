"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-14 px-6 border-t border-white/[0.05] relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/50 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-[#b8ad9c]">
                Built with <span className="text-[#f2eee6] font-medium">Next.js</span> +{" "}
                <span className="text-[#f2eee6] font-medium">Tailwind</span> + too many{" "}
                <span className="text-[#e5bc5c] font-medium">coffee breaks</span>
              </p>
              <p className="text-xs text-[#9a9386]/60 mt-2 font-mono">
                Typeset in Geist. No AI was harmed. (Well, maybe a little.)
              </p>
            </div>

            <p className="text-xs text-[#9a9386]/50 font-mono">
              {year} Harleen Kaur
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
