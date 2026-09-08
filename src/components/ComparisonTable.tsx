import React from 'react';
import { COMPARISON_TABLE, PRICING_PLANS, getWhatsAppUrl } from '../data';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowUpRight } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section
      id="comparison"
      className="relative py-20 sm:py-28 bg-[#0a0a0f] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div
            id="comparison-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURE BREAKDOWN</span>
          </div>

          <h2
            id="comparison-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase"
          >
            PLAN COMPARISON
          </h2>

          <p
            id="comparison-subheading"
            className="mt-3 text-sm sm:text-base text-neutral-400 font-normal"
          >
            Compare features across Starter, Professional and Premium plans.
          </p>
        </div>

        {/* Responsive Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] bg-[#101017]/90 overflow-hidden shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#14141e]">
                  <th className="py-5 px-6 text-xs font-mono tracking-wider uppercase text-neutral-400 w-2/5">
                    Feature
                  </th>
                  <th className="py-5 px-6 text-center text-sm font-bold text-white w-1/5">
                    <div className="text-neutral-400 text-[10px] font-mono font-normal">PLAN 01</div>
                    <div>Starter</div>
                    <div className="text-xs text-neutral-400 font-mono mt-0.5">₹9,999</div>
                  </th>
                  <th className="py-5 px-6 text-center text-sm font-bold text-white w-1/5 bg-red-950/20 border-x border-red-500/20 relative">
                    <div className="absolute -top-0 inset-x-0 h-[2px] bg-red-500" />
                    <div className="text-red-400 text-[10px] font-mono font-bold">MOST POPULAR</div>
                    <div className="text-red-300">Professional</div>
                    <div className="text-xs text-red-400 font-mono mt-0.5">₹14,999</div>
                  </th>
                  <th className="py-5 px-6 text-center text-sm font-bold text-white w-1/5">
                    <div className="text-neutral-400 text-[10px] font-mono font-normal">PLAN 03</div>
                    <div>Premium</div>
                    <div className="text-xs text-neutral-400 font-mono mt-0.5">₹24,999</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-xs sm:text-sm">
                {COMPARISON_TABLE.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`hover:bg-white/[0.02] transition-colors ${
                      row.feature === 'Price' ? 'bg-[#151520] font-bold text-white' : ''
                    }`}
                  >
                    <td className="py-4 px-6 text-neutral-300 font-medium">
                      {row.feature}
                    </td>

                    {/* Starter */}
                    <td className="py-4 px-6 text-center text-neutral-300">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/[0.06] text-red-400">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-neutral-400">—</span>
                        )
                      ) : (
                        <span className="font-mono text-xs">{row.starter}</span>
                      )}
                    </td>

                    {/* Professional (Highlighted Column) */}
                    <td className="py-4 px-6 text-center text-white bg-red-950/15 border-x border-red-500/20">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white shadow-sm">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-neutral-400">—</span>
                        )
                      ) : (
                        <span className="font-mono text-xs text-red-300 font-semibold">
                          {row.professional}
                        </span>
                      )}
                    </td>

                    {/* Premium */}
                    <td className="py-4 px-6 text-center text-neutral-300">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/[0.06] text-red-400">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-neutral-400">—</span>
                        )
                      ) : (
                        <span className="font-mono text-xs text-neutral-200 font-medium">
                          {row.premium}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Action Footer inside table */}
          <div className="p-4 bg-[#14141e] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-neutral-400">
              Need a custom tailored requirement? Discuss directly with Surya.
            </span>
            <a
              href={getWhatsAppUrl(
                'Hey Surya, I reviewed the plan comparison table and have custom requirements for my website.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 hover:text-red-300 font-bold transition-colors"
            >
              <span>Custom Plan Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
