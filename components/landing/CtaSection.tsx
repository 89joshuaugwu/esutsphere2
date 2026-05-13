"use client";

import Link from "next/link";
import { Rocket, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section className="py-20 px-6 lg:px-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[800px] mx-auto bg-[#16162a]/70 backdrop-blur-2xl border border-brand/25 rounded-[28px] p-12 md:p-16 text-center relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,58,237,0.15)_0%,transparent_60%)] pointer-events-none" />
        {/* Top Border Glow */}
        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-brand-light/80 to-transparent" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center mx-auto mb-6 text-brand-light animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <Rocket className="w-7 h-7" />
          </div>

          <h2 className="font-display text-[clamp(28px,4vw,44px)] text-white mb-4 leading-[1.2]">
            Ready to Join the ESUTSphere Community?
          </h2>
          <p className="text-base text-text-muted max-w-[480px] mx-auto mb-9 leading-[26px]">
            Be part of the largest academic social network at ESUT. Connect with
            classmates, access resources, and take your academic journey to the
            next level.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
            <Link
              href="/onboarding/step-1"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-br from-brand to-brand-light text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_8px_32px_rgba(124,58,237,0.4)] hover:shadow-[0_16px_48px_rgba(124,58,237,0.55)] hover:-translate-y-1 transition-all"
            >
              Create Your Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-text-secondary font-semibold py-3.5 px-8 rounded-xl border border-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>

          <p className="text-[13px] text-text-disabled">
            Free for all ESUT students. No credit card required.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
