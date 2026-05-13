"use client";

import { Users, FileText, BookOpen, Building2 } from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { icon: Users, number: "5,000+", label: "Active Students" },
  { icon: FileText, number: "2,000+", label: "Documents" },
  { icon: BookOpen, number: "50+", label: "Course Codes" },
  { icon: Building2, number: "15+", label: "Departments" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#16162a]/60 backdrop-blur-md border border-white/10 hover:border-brand/30 rounded-[20px] p-8 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] group"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

              <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center mx-auto mb-4 text-brand-light group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>

              <span className="block font-display text-4xl bg-gradient-to-br from-brand-light to-cyan bg-clip-text text-transparent mb-2">
                {stat.number}
              </span>
              <span className="font-medium text-[15px] text-text-muted">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
