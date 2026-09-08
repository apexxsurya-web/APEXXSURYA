import React from 'react';
import { PROCESS_STEPS } from '../data';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div
            id="process-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTION TIMELINE</span>
          </div>

          <h2
            id="process-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            FROM IDEA TO LAUNCH.
          </h2>

          <p
            id="process-subheading"
            className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
          >
            A disciplined, streamlined workflow engineered to deliver high-impact results without delays.
          </p>

          <div className="mt-5 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* Cinematic Timeline Steps (Desktop & Mobile) */}
        <div className="relative">
          {/* Central connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/[0.08] -translate-y-1/2 z-0">
            <div className="h-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                id={`process-step-${step.step}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-2xl p-6 bg-[#111118]/90 hover:bg-[#161622] border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Marker */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-['Space_Grotesk',sans-serif] text-2xl font-black text-red-400 group-hover:text-red-300 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors" />
                  </div>

                  <h3 className="font-['Space_Grotesk',sans-serif] text-lg font-bold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-400/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
