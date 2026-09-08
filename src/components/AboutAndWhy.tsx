import React from 'react';
import { ABOUT_BLOCKS, WHY_REASONS, BRAND } from '../data';
import { motion } from 'motion/react';
import {
  Palette,
  Zap,
  Layout,
  TrendingUp,
  Sparkles,
  Smartphone,
  Gauge,
  Crosshair,
  Code2,
  MessageSquareHeart,
  CheckCircle2,
} from 'lucide-react';

const aboutIconMap: Record<string, React.ElementType> = {
  Palette,
  Zap,
  Layout,
  TrendingUp,
};

const whyIconMap: Record<string, React.ElementType> = {
  Sparkles,
  Smartphone,
  Gauge,
  Crosshair,
  Code2,
  MessageSquareHeart,
};

export const AboutAndWhy: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#08080c] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28 sm:space-y-36">
        {/* ================= ABOUT SECTION ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div
                id="about-badge"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE STUDIO PHILOSOPHY</span>
              </div>

              <h2
                id="about-heading"
                className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
              >
                MORE THAN JUST A WEBSITE.
              </h2>

              <p
                id="about-supporting-text"
                className="mt-6 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed"
              >
                <strong className="text-white font-semibold">APEX SURYA</strong> focuses on
                building websites that don't just look good — they help businesses create
                credibility, communicate their value and build a stronger online presence.
              </p>
            </div>

            {/* Glowing Logo Crest Showcase */}
            <div className="shrink-0 flex items-center gap-4 p-4 pr-6 rounded-2xl bg-[#12121a]/90 border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-red-500/40 p-0.5 bg-[#09090f] shadow-[0_0_25px_rgba(239,68,68,0.4)]">
                <img
                  src={BRAND.logo}
                  alt="APEX SURYA Official Crest"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest">
                  OFFICIAL CREST
                </div>
                <div className="font-['Space_Grotesk',sans-serif] font-bold text-white text-base">
                  APEX SURYA
                </div>
                <div className="text-[11px] text-neutral-400 font-mono">
                  DESIGN • DEVELOP • GROW
                </div>
              </div>
            </div>
          </div>

          {/* 4 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_BLOCKS.map((block, idx) => {
              const Icon = aboutIconMap[block.icon] || Palette;
              return (
                <motion.div
                  key={block.title}
                  id={`about-block-${block.title.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl p-7 bg-[#111117]/80 hover:bg-[#151520] border border-white/[0.07] hover:border-red-500/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-red-400 px-2 py-0.5 rounded bg-red-500/[0.08] border border-red-500/20">
                        {block.stat}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] group-hover:bg-red-500/10 border border-white/[0.06] group-hover:border-red-500/30 flex items-center justify-center text-neutral-300 group-hover:text-red-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-['Space_Grotesk',sans-serif] text-xl font-bold text-white tracking-tight mb-2">
                      {block.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                      {block.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                    <span>CORE STANDARD</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= WHY APEX SURYA ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div
              id="why-badge"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>THE AGENCY ADVANTAGE</span>
            </div>

            <h2
              id="why-heading"
              className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
            >
              WHY APEX SURYA?
            </h2>

            <div className="mt-5 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_REASONS.map((reason, idx) => {
              const Icon = whyIconMap[reason.icon] || Sparkles;
              return (
                <motion.div
                  key={reason.title}
                  id={`why-card-${reason.title.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl p-7 bg-[#121219]/80 hover:bg-[#161622] border border-white/[0.07] hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] group-hover:bg-red-500/10 border border-white/[0.08] group-hover:border-red-500/30 flex items-center justify-center text-neutral-300 group-hover:text-red-400 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-['Space_Grotesk',sans-serif] text-lg font-bold text-white tracking-tight mb-2">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
