"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-14 px-6 border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-[#9a9386]">
                Built with{" "}
                <span className="text-[#f2eee6]">Next.js</span> +{" "}
                <span className="text-[#f2eee6]">Tailwind</span> + too many{" "}
                <span className="text-[#f2eee6]">coffee breaks</span>
              </p>
              <p className="text-xs text-[#9a9386]/60 mt-1 font-mono">
                Typeset in Geist. No AI was harmed in the making of this site.
                (Well, maybe a little.)
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
