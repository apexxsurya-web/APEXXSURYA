import React from 'react';
import { motion } from 'motion/react';
import { Server, Sparkles, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

export const Hosting: React.FC = () => {
  return (
    <section
      id="hosting"
      className="relative py-20 sm:py-24 bg-[#08080c] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#151520] via-[#101017] to-[#0a0a0f] border border-white/[0.09] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/[0.06] rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              {/* Header Label */}
              <div
                id="hosting-badge"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
              >
                <Server className="w-3.5 h-3.5" />
                <span>HOSTING & INFRASTRUCTURE</span>
              </div>

              <h3
                id="hosting-heading"
                className="font-['Space_Grotesk',sans-serif] text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              >
                HOSTING
              </h3>

              {/* Large Highlight */}
              <div
                id="hosting-large-highlight"
                className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white flex items-center gap-3"
              >
                <span className="bg-gradient-to-r from-white via-neutral-100 to-red-400 bg-clip-text text-transparent">
                  1 YEAR FREE HOSTING
                </span>
              </div>

              <p
                id="hosting-description"
                className="mt-3 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed"
              >
                Every website plan includes hosting free for the first year.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-400" />
                  SSL Security Included
                </span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-400" />
                  High-Speed Cloud CDN
                </span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-400" />
                  Zero Server Headaches
                </span>
              </div>
            </div>

            {/* Renewal Breakdown Card */}
            <div className="p-6 rounded-2xl bg-[#0c0c12] border border-white/[0.08] md:w-80 shrink-0 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  AFTER THE FIRST YEAR
                </div>
                <div
                  id="hosting-renewal-price"
                  className="mt-2 font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl font-extrabold text-white text-red-400"
                >
                  ₹999 / YEAR
                </div>
                <p
                  id="hosting-renewal-text"
                  className="mt-3 text-xs text-neutral-300 leading-relaxed font-normal"
                >
                  Hosting renewal after the first year is ₹999 per year.
                </p>
              </div>

              <div
                id="hosting-small-note"
                className="mt-5 pt-4 border-t border-white/[0.06] flex items-start gap-2 text-[11px] text-neutral-400 leading-normal"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Hosting renewal is separate from the initial website development price.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
