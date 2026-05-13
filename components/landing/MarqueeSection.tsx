"use client";

import { motion } from "motion/react";

const DEPARTMENTS = [
  "💻 Computer Science",
  "⚡ Electrical Engineering",
  "🏗️ Civil Engineering",
  "⚙️ Mechanical Engineering",
  "💊 Pharmacy",
  "⚖️ Law",
  "💼 Business Admin",
  "📢 Mass Communication",
  "🏛️ Architecture",
  "💰 Accounting",
  "📊 Economics",
  "🖥️ Information Technology",
];

export default function MarqueeSection() {
  return (
    <section className="py-6 border-y border-white/5 bg-[#0f0f1a]/50 overflow-hidden relative flex items-center">
      {/* Fade Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-[120px] bg-gradient-to-r from-[#080810] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-[120px] bg-gradient-to-l from-[#080810] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <motion.div 
        className="flex items-center gap-8 w-max pr-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {/* Duplicate list to create seamless infinite loop */}
        {[...DEPARTMENTS, ...DEPARTMENTS].map((dept, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-text-muted bg-white/5 border border-white/10 px-4 py-1.5 rounded-full shrink-0"
          >
            {dept}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
