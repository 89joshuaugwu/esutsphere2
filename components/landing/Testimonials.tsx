"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    text: "I found 5 years of CSC past questions in one afternoon. ESUTSphere changed how I prepare for exams completely.",
    name: "Chika",
    handle: "@chika_cs",
    role: "CSC 300L",
    avatarColor: "from-cyan to-blue-500",
  },
  {
    text: "The profile system is fire. I got recognized for uploading notes and my followers grew from 0 to 200 in 2 weeks.",
    name: "Temi",
    handle: "@temi_400",
    role: "CSC 400L",
    avatarColor: "from-brand to-purple-500",
  },
  {
    text: "As a lecturer, sharing notes with my class is now so much easier. Students actually engage with the material.",
    name: "Dr. A. Nwachukwu",
    handle: "@dr_nwachukwu",
    role: "Dept. of CS",
    avatarColor: "from-orange-400 to-red-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-10 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative bg-[#16162a]/60 border border-white/10 hover:border-brand/25 rounded-[20px] p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            {/* Giant Quote Mark Background */}
            <div className="absolute -top-3 left-5 font-display text-[120px] leading-none text-brand/10 pointer-events-none select-none">
              &ldquo;
            </div>

            <div className="relative z-10">
              <div className="flex gap-[3px] mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-[15px] text-text-secondary leading-[26px] mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} p-[2px]`}>
                  <div className="w-full h-full bg-[#16162a] rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-text-muted">
                    {t.handle} • {t.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
