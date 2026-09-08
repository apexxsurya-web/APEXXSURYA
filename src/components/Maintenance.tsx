import React from 'react';
import { MAINTENANCE_PLANS, getWhatsAppUrl } from '../data';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Wrench } from 'lucide-react';

export const Maintenance: React.FC = () => {
  const handleMaintenanceClick = (whatsappMessage: string) => {
    const url = getWhatsAppUrl(whatsappMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="maintenance"
      className="relative py-20 sm:py-28 bg-[#0a0a0f] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div
            id="maintenance-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>CONTINUOUS CARE & OPTIMIZATION</span>
          </div>

          <h2
            id="maintenance-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            MONTHLY WEBSITE MAINTENANCE
          </h2>

          <p
            id="maintenance-subheading"
            className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
          >
            Keep your website updated, secure and running smoothly.
          </p>

          <div className="mt-5 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* 3 Maintenance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MAINTENANCE_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              id={`maintenance-card-${plan.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-7 bg-[#121218]/90 hover:bg-[#161622] border border-white/[0.07] hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-red-400 px-2 py-0.5 rounded bg-red-500/[0.08] border border-red-500/20">
                    0{idx + 1} CARE
                  </span>
                  <ShieldCheck className="w-4 h-4 text-neutral-400 group-hover:text-red-400 transition-colors" />
                </div>

                <h3 className="font-['Space_Grotesk',sans-serif] text-xl font-bold text-white tracking-tight">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="my-5 pt-4 border-t border-white/[0.06] flex items-baseline gap-1">
                  <span className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                    {plan.price.split(' ')[0]}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">/ MONTH</span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 text-xs sm:text-[13px] text-neutral-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button
                id={`maintenance-btn-${plan.id}`}
                onClick={() => handleMaintenanceClick(plan.whatsappMessage)}
                className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-red-600 border border-white/[0.1] hover:border-red-500 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
