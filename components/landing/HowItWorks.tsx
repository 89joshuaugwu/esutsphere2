"use client";

import { UserPlus, UserCheck, Share2 } from "lucide-react";
import { motion } from "motion/react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Sign Up",
    desc: "Create your ESUTSphere account with Google in under 2 minutes.",
  },
  {
    icon: UserCheck,
    title: "Build Your Profile",
    desc: "Upload your matric, department, and submit your admission letter for verification.",
  },
  {
    icon: Share2,
    title: "Share & Discover",
    desc: "Upload documents, write posts, follow classmates, earn points and badges.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-10 text-center bg-[#0f0f1a]/50 border-y border-white/5">
      <div className="mb-16">
        <h2 className="font-display text-[clamp(32px,4vw,48px)] text-white mb-4">
          How It Works
        </h2>
        <p className="text-[17px] text-text-muted max-w-[500px] mx-auto">
          Join the community and start accessing resources in three simple steps.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 relative">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex-1 relative w-full md:w-auto">
              {/* Connector Line (Desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-[44px] left-[60%] right-[-40%] h-[2px] bg-gradient-to-r from-brand/50 to-cyan/50 z-0" />
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative z-10 bg-[#16162a]/60 border border-white/10 hover:border-brand/35 rounded-[20px] p-8 transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] mx-auto md:mx-4"
              >
                <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-gradient-to-br from-brand to-brand-light text-white font-bold flex items-center justify-center shadow-[0_4px_16px_rgba(124,58,237,0.5)]">
                  {i + 1}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-brand/12 border border-brand/25 flex items-center justify-center mx-auto mb-5 text-brand-light">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
