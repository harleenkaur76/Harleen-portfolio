"use client";

import { motion } from "framer-motion";

const clients = [
  "Microsoft",
  "Accor",
  "Norwegian Air Shuttle",
  "Optiphoenix",
  "Convert",
  "Kameleoon",
  "Adobe Target",
  "VWO",
  "Optimizely",
  "AB Tasty",
];

export default function ClientMarquee() {
  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <div className="mb-8 text-center">
        <p className="text-sm text-[#6b7280] font-mono uppercase tracking-widest">
          // clients_worked_with
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 gap-16 items-center"
        >
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="text-2xl sm:text-3xl font-bold text-white/10 hover:text-[#8B5CF6]/40 transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
