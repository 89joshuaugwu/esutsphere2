"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, BookOpen, MessageSquare, Award, Download, Heart } from "lucide-react";

const TABS = [
  { id: "library", label: "📚 Resource Library" },
  { id: "feed", label: "📰 Campus Feed" },
  { id: "profile", label: "👤 Academic Profile" },
];

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("library");

  return (
    <section className="py-24 px-6 lg:px-10 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-[13px] font-bold text-brand uppercase tracking-[1.5px] mb-4">
          Features Built For You
        </h3>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] text-white leading-[1.15] mb-4">
          Everything you need to excel.
        </h2>
        <p className="text-[17px] text-text-muted max-w-[520px] mx-auto">
          We combined a robust document library with social networking features to
          create the ultimate academic companion.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 justify-center bg-white/5 border border-white/10 rounded-xl p-1 w-fit mx-auto mb-14">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-brand text-white shadow-[0_4px_16px_rgba(124,58,237,0.4)]"
                : "text-text-muted hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        {/* Left: Descriptions */}
        <div className="flex flex-col gap-7">
          <AnimatePresence mode="wait">
            {activeTab === "library" && (
              <motion.div
                key="library"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-7"
              >
                <FeatureItem
                  icon={Search}
                  title="Search by course code"
                  desc="Instantly find notes, past questions, and materials for any specific ESUT course."
                />
                <FeatureItem
                  icon={Filter}
                  title="Filter by level & dept"
                  desc="Narrow down resources to exactly what applies to your current academic session."
                />
                <FeatureItem
                  icon={BookOpen}
                  title="In-browser PDF preview"
                  desc="Read documents directly on the platform without needing to download them first."
                />
              </motion.div>
            )}
            {activeTab === "feed" && (
              <motion.div
                key="feed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-7"
              >
                <FeatureItem
                  icon={MessageSquare}
                  title="Connect with classmates"
                  desc="See what others are sharing, comment on posts, and start academic discussions."
                />
                <FeatureItem
                  icon={Heart}
                  title="React and engage"
                  desc="Use multiple reaction types to show appreciation for helpful study materials."
                />
              </motion.div>
            )}
            {activeTab === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-7"
              >
                <FeatureItem
                  icon={Award}
                  title="Earn achievements"
                  desc="Build your reputation as a top contributor and unlock special academic badges."
                />
                <FeatureItem
                  icon={Download}
                  title="Track your impact"
                  desc="See exactly how many students have downloaded and liked the materials you uploaded."
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Mockup UI */}
        <div className="bg-[#0f0f1a]/80 backdrop-blur-md border border-white/10 rounded-[20px] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.6)] h-[400px] flex items-center justify-center overflow-hidden relative">
          <AnimatePresence mode="wait">
            {activeTab === "library" && (
              <motion.div
                key="lib-ui"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full space-y-4"
              >
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-lg h-10 flex items-center px-3 gap-2 text-text-muted text-sm">
                    <Search className="w-4 h-4" /> Search "CSC 201"
                  </div>
                  <div className="w-10 h-10 bg-brand/20 border border-brand/30 rounded-lg flex items-center justify-center text-brand-light">
                    <Filter className="w-4 h-4" />
                  </div>
                </div>
                {[1, 2].map((i) => (
                  <div key={i} className="bg-[#16162a] border border-white/10 border-t-[3px] border-t-cyan rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] bg-cyan/10 text-cyan px-2 py-0.5 rounded font-bold uppercase">Research</span>
                      <h4 className="text-sm font-bold text-white mt-1">MTH 201 Advanced Calculus</h4>
                      <p className="text-xs text-text-muted">By @chika_math</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-muted">
                      <Download className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
            
            {activeTab === "feed" && (
              <motion.div
                key="feed-ui"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-[360px]"
              >
                <div className="bg-[#16162a] border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-brand" />
                    <div>
                      <p className="text-sm font-bold text-white">@david_esut</p>
                      <p className="text-xs text-text-muted">1 hour ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">
                    Who has the complete handout for PHY 102? The one the rep sent is missing chapter 4. 🙏
                  </p>
                  <div className="flex gap-2 border-t border-white/5 pt-3">
                    <span className="text-xs font-medium text-brand-light bg-brand/10 px-3 py-1 rounded-full border border-brand/20">❤️ 12</span>
                    <span className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 rounded-full border border-white/10">💬 5 replies</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "profile" && (
              <motion.div
                key="prof-ui"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-[320px] text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan to-brand mb-4 p-1">
                  <div className="w-full h-full bg-[#080810] rounded-full border-2 border-[#16162a]" />
                </div>
                <h4 className="text-lg font-bold text-white">Sarah Nnamdi</h4>
                <p className="text-sm text-brand-light mb-4">@sarah_codes • 300L CS</p>
                <div className="flex justify-center gap-6 mb-6">
                  <div><p className="text-lg font-bold text-white">45</p><p className="text-[10px] text-text-muted uppercase tracking-wider">Uploads</p></div>
                  <div><p className="text-lg font-bold text-white">1.2k</p><p className="text-[10px] text-text-muted uppercase tracking-wider">Downloads</p></div>
                </div>
                <div className="flex justify-center gap-2">
                  <span className="text-xs bg-cyan/10 text-cyan border border-cyan/20 px-2 py-1 rounded flex items-center gap-1"><Award className="w-3 h-3"/> Note Legend</span>
                  <span className="text-xs bg-brand/10 text-brand-light border border-brand/20 px-2 py-1 rounded flex items-center gap-1"><Award className="w-3 h-3"/> Top 10%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center shrink-0 text-brand-light">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white mb-1.5">{title}</h4>
        <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
