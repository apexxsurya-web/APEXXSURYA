import React from 'react';
import { PRICING_PLANS, getWhatsAppUrl } from '../data';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Check,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export const Pricing: React.FC = () => {
  const handlePlanClick = (whatsappMessage: string) => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ef4444', '#dc2626', '#ffffff', '#f87171'],
      });
    } catch {
      // safe fallback
    }

    const url = getWhatsAppUrl(whatsappMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 bg-[#08080c] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div
            id="pricing-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE ARCHITECTURE</span>
          </div>

          <h2
            id="pricing-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            CHOOSE YOUR WEBSITE PLAN
          </h2>

          <p
            id="pricing-subheading"
            className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
          >
            Simple, transparent plans designed for businesses of different sizes.
          </p>

          <div className="mt-5 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 group ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#181824] via-[#13131c] to-[#0f0f15] border-2 border-red-500/60 shadow-[0_15px_40px_-10px_rgba(239,68,68,0.25)] lg:-translate-y-3'
                    : 'bg-[#111118]/80 hover:bg-[#151520] border border-white/[0.08] hover:border-red-500/30'
                } hover:-translate-y-2`}
              >
                {/* Popular Badge for Plan 02 */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white text-[11px] font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(239,68,68,0.6)] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-red-200" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Number & Name */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-red-400 px-2.5 py-1 rounded bg-red-500/[0.08] border border-red-500/20">
                      {plan.planNumber}
                    </span>
                    <span className="text-xs font-mono uppercase text-neutral-400">
                      ALL-INCLUSIVE
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk',sans-serif] text-2xl font-extrabold text-white tracking-tight">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 min-h-[36px] font-normal leading-relaxed">
                    {plan.idealFor}
                  </p>

                  {/* Price Tag */}
                  <div className="my-6 pt-6 border-t border-white/[0.08] flex items-baseline gap-2">
                    <span className="font-['Space_Grotesk',sans-serif] text-4xl sm:text-5xl font-extrabold tracking-tight text-white group-hover:text-red-400 transition-colors">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">one-time</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-3">
                      Included in Plan:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-300 leading-snug"
                      >
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                            isPopular
                              ? 'bg-red-500 text-white'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <button
                    id={`plan-cta-${plan.id}`}
                    onClick={() => handlePlanClick(plan.whatsappMessage)}
                    className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      isPopular
                        ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:shadow-[0_0_40px_rgba(239,68,68,0.7)]'
                        : 'bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-red-500/40 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="mt-3 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Includes 1 Year FREE Hosting</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
