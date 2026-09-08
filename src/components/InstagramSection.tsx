import React from 'react';
import { BRAND } from '../data';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Sparkles, Layers, Eye, Smartphone } from 'lucide-react';

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
          {/* Ambient Red Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/[0.06] rounded-full blur-[120px] pointer-events-none" />

          {/* Top Badge */}
          <div
            id="instagram-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>COMMUNITY & DIGITAL LAB</span>
          </div>

          {/* Heading */}
          <h2
            id="instagram-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            FOLLOW THE JOURNEY
          </h2>

          {/* Text */}
          <p
            id="instagram-text"
            className="mt-4 text-base sm:text-lg text-neutral-300 font-normal max-w-2xl leading-relaxed"
          >
            See the latest websites, designs, projects and digital experiments from{' '}
            <strong className="text-white font-semibold">APEX SURYA</strong>.
          </p>

          {/* Instagram Handle Box */}
          <div className="my-8 p-4 px-6 sm:px-8 rounded-2xl bg-[#09090e]/90 border border-white/[0.08] flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-red-500/40 p-0.5 bg-[#12121a] shadow-[0_0_20px_rgba(239,68,68,0.35)]">
                <img
                  src={BRAND.logo}
                  alt="APEX SURYA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-[10px] shadow-md">
                <Instagram className="w-3 h-3" />
              </div>
            </div>
            <div className="text-left">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                Official Instagram
              </div>
              <div
                id="instagram-handle-display"
                className="font-['Space_Grotesk',sans-serif] text-xl sm:text-2xl font-bold text-white tracking-tight"
              >
                {BRAND.handle}
              </div>
            </div>
          </div>

          {/* Button */}
          <a
            id="follow-instagram-btn"
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-300 flex items-center gap-2 group hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="mt-4 text-xs text-neutral-400 font-mono">
            Direct design prototypes, case breakdowns & web experiments
          </div>
        </motion.div>
      </div>
    </section>
  );
};
