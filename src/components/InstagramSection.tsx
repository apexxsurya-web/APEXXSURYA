import React from 'react';
import { BRAND } from '../data';
import { motion } from 'motion/react';
import { Instagram, Youtube, ArrowUpRight, Sparkles, Video, Eye } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="relative py-20 sm:py-28 bg-[#08080c] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#161622] via-[#101017] to-[#0d0d12] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden text-center flex flex-col items-center"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-600/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/[0.08] rounded-full blur-[120px] pointer-events-none" />

          {/* Top Badge */}
          <div
            id="social-channels-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL CHANNELS & COMMUNITY</span>
          </div>

          {/* Heading */}
          <h2
            id="social-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            FOLLOW THE JOURNEY
          </h2>

          {/* Text */}
          <p
            id="social-text"
            className="mt-4 text-base sm:text-lg text-neutral-300 font-normal max-w-2xl leading-relaxed"
          >
            Stay connected for the latest website launches, development tutorials, design breakdowns, and digital experiments from{' '}
            <strong className="text-white font-semibold">APEX SURYA</strong>.
          </p>

          {/* Dual Social Cards: Instagram & YouTube */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-3xl">
            {/* Instagram Card */}
            <div
              id="instagram-card"
              className="p-6 rounded-2xl bg-[#09090e]/95 border border-white/[0.08] hover:border-pink-500/30 transition-all duration-300 flex flex-col justify-between items-center text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/[0.05] rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-pink-500/40 p-0.5 bg-[#12121a] shadow-[0_0_25px_rgba(236,72,153,0.25)]">
                    <img
                      src={BRAND.logo}
                      alt="APEX SURYA Instagram"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-[11px] shadow-md border-2 border-[#09090e]">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-pink-400 font-semibold mb-1">
                  Official Instagram
                </div>
                <div
                  id="instagram-handle-display"
                  className="font-['Space_Grotesk',sans-serif] text-xl sm:text-2xl font-bold text-white tracking-tight"
                >
                  {BRAND.handle}
                </div>
                <p className="mt-2 text-xs text-neutral-400 max-w-xs leading-relaxed">
                  Design prototypes, UI showcases, client site reveals & behind-the-scenes
                </p>
              </div>

              <a
                id="follow-instagram-btn"
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 hover:opacity-90 text-white font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(225,48,108,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group-hover:-translate-y-0.5 active:translate-y-0"
              >
                <Instagram className="w-4 h-4" />
                <span>FOLLOW ON INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* YouTube Card */}
            <div
              id="youtube-card"
              className="p-6 rounded-2xl bg-[#09090e]/95 border border-white/[0.08] hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between items-center text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/[0.05] rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-red-500/40 p-0.5 bg-[#12121a] shadow-[0_0_25px_rgba(239,68,68,0.25)]">
                    <img
                      src={BRAND.logo}
                      alt="Surya Chaurasiya YouTube"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-[11px] shadow-md border-2 border-[#09090e]">
                    <Youtube className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold mb-1">
                  Official YouTube Channel
                </div>
                <div
                  id="youtube-handle-display"
                  className="font-['Space_Grotesk',sans-serif] text-xl sm:text-2xl font-bold text-white tracking-tight"
                >
                  {BRAND.youtubeHandle}
                </div>
                <p className="mt-2 text-xs text-neutral-400 max-w-xs leading-relaxed">
                  Web development tutorials, tech breakdowns, live builds & coding insights
                </p>
              </div>

              <a
                id="subscribe-youtube-btn"
                href={BRAND.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(239,68,68,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group-hover:-translate-y-0.5 active:translate-y-0"
              >
                <Youtube className="w-4 h-4" />
                <span>SUBSCRIBE ON YOUTUBE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="mt-2 text-xs text-neutral-400 font-mono">
            Direct design prototypes, tech tutorials, case breakdowns & web experiments
          </div>
        </motion.div>
      </div>
    </section>
  );
};
