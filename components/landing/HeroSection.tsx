"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients & Noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand/15 blur-[80px] top-[-10%] left-[-10%] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan/10 blur-[80px] bottom-[10%] right-[-5%] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
        {/* Subtle noise overlay could go here */}
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start text-left pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-1.5 text-[13px] font-medium text-text-secondary mb-8 group cursor-pointer hover:bg-brand/15 transition-colors"
          >
            <span className="bg-brand/25 rounded-full px-2 py-0.5 text-xs text-brand-light">
              ✨
            </span>
            Welcome to the Future of Academic Collaboration
            <ArrowRight className="w-4 h-4 text-brand-light group-hover:translate-x-1 transition-transform" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] tracking-tight text-text-primary mb-6"
          >
            The Academic Hub <br />
            Built for{" "}
            <span className="bg-gradient-to-r from-brand-light via-brand to-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
              ESUT Students.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-text-muted max-w-[520px] leading-relaxed mb-10"
          >
            Share notes, discover past questions, connect with classmates, and
            build your academic profile — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            <Link
              href="/onboarding/step-1"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-br from-brand to-brand-light text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_8px_32px_rgba(124,58,237,0.4)] hover:shadow-[0_16px_48px_rgba(124,58,237,0.55)] hover:-translate-y-1 transition-all"
            >
              Get Started — Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-text-secondary font-semibold py-3.5 px-8 rounded-xl border border-white/10 hover:border-white/20 backdrop-blur-sm hover:-translate-y-0.5 transition-all">
              <PlayCircle className="w-5 h-5" />
              See How It Works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#080810] bg-bg-surface-3 flex items-center justify-center text-xs font-medium text-text-muted overflow-hidden"
                >
                  {/* Placeholder for actual avatars */}
                  <div className={`w-full h-full bg-gradient-to-br ${
                    i % 2 === 0 ? "from-brand to-cyan" : "from-purple-500 to-indigo-500"
                  } opacity-80`} />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-text-muted">
              Trusted by <strong className="text-text-primary">5,000+</strong> ESUT students
            </p>
          </motion.div>
        </div>

        {/* Right Column: Floating Previews */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[480px] hidden lg:block perspective-1000"
        >
          {/* Card 1: Feed Post (Back, Tilted) */}
          <motion.div
            initial={{ rotate: 3 }}
            animate={{ y: [0, -12, 0], rotate: 3 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[340px] bg-[#16162a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] origin-bottom-right"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-brand/20" />
              <div>
                <p className="text-sm font-semibold text-white">@johndoe</p>
                <p className="text-xs text-text-muted">2h ago</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-2 font-medium">
              Just uploaded CSC 466 Notes 🔥
            </p>
            <p className="text-sm text-text-muted mb-4 line-clamp-2">
              "Finally compiled all the compiler construction notes from Dr. Asogwa's class. Includes practice questions..."
            </p>
            <div className="flex gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1">❤️ 142</span>
              <span className="flex items-center gap-1">💬 24</span>
            </div>
          </motion.div>

          {/* Card 2: Document Card (Middle) */}
          <motion.div
            initial={{ rotate: -2 }}
            animate={{ y: [0, -16, 0], rotate: -2 }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 left-5 w-[320px] bg-[#1e1e35]/85 backdrop-blur-xl border border-brand/30 border-t-[3px] border-t-brand rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-10"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/15 px-2 py-1 rounded">
                NOTES
              </span>
              <span className="text-xs font-semibold text-text-muted bg-white/5 px-2 py-1 rounded">
                CSC 466
              </span>
            </div>
            <h3 className="text-[15px] font-bold text-white mb-2 leading-tight">
              CSC466 Compiler Construction Notes
            </h3>
            <p className="text-[13px] text-text-muted mb-4">
              Complete lecture notes — Dr. T. Asogwa
            </p>
            <div className="flex items-center justify-between text-xs text-text-muted border-t border-white/5 pt-3">
              <span className="font-medium text-text-secondary">@joshuazaza</span>
              <div className="flex gap-3">
                <span>↓ 450</span>
                <span>♥ 89</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Stats (Front) */}
          <motion.div
            initial={{ rotate: 1 }}
            animate={{ y: [0, -10, 0], rotate: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-5 right-5 w-[280px] bg-[#0f0f1a]/95 backdrop-blur-2xl border border-cyan/30 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-20"
          >
            <h4 className="text-[13px] font-semibold text-text-secondary mb-4 flex items-center gap-2">
              <span className="text-base">📈</span> Trending this week
            </h4>
            <div className="space-y-3 text-[13px]">
              <div className="flex items-center gap-3 text-cyan">
                <ArrowRight className="w-4 h-4 -rotate-45" />
                <span className="font-medium">1,240 new downloads</span>
              </div>
              <div className="flex items-center gap-3 text-brand-light">
                <span className="text-sm">🔥</span>
                <span className="font-medium">CSC 201 Past Questions</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="text-sm">👥</span>
                <span>23 new members today</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
