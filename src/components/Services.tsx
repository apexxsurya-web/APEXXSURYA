import React from 'react';
import { SERVICES, getWhatsAppUrl } from '../data';
import { motion } from 'motion/react';
import {
  Briefcase,
  Target,
  UserCheck,
  UtensilsCrossed,
  ShoppingBag,
  RefreshCw,
  Smartphone,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Target,
  UserCheck,
  UtensilsCrossed,
  ShoppingBag,
  RefreshCw,
  Smartphone,
  ShieldCheck,
};

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#08080c] overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-600/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-700/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div
            id="services-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED DIGITAL CAPABILITIES</span>
          </div>

          <h2
            id="services-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            WHAT I BUILD
          </h2>

          <p
            id="services-subheading"
            className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
          >
            Modern digital experiences designed around your business.
          </p>

          <div className="mt-5 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Briefcase;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative rounded-2xl p-6 sm:p-7 bg-[#111117]/80 hover:bg-[#161622] border border-white/[0.07] hover:border-red-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(239,68,68,0.2)] flex flex-col justify-between"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-red-500/50 transition-colors" />

                <div>
                  {/* Top Row: Number & Animated Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-red-400/80 group-hover:text-red-400 transition-colors px-2.5 py-1 rounded-md bg-red-500/[0.08] border border-red-500/20">
                      {service.number}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-white/[0.03] group-hover:bg-red-500/10 border border-white/[0.08] group-hover:border-red-500/40 flex items-center justify-center text-neutral-300 group-hover:text-red-400 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Space_Grotesk',sans-serif] text-lg font-bold text-white group-hover:text-white tracking-tight mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Tags & Inquire Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.03] text-neutral-400 group-hover:text-neutral-300 group-hover:bg-white/[0.06] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      `Hey Surya, I am interested in building a ${service.title}. Please share more details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-neutral-500 group-hover:text-red-400 group-hover:bg-red-500/10 transition-all flex items-center gap-1 text-[11px] font-semibold"
                    title={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
