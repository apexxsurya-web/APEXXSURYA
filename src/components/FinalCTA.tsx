import React from 'react';
import { BRAND, getWhatsAppUrl, getWebsiteQueryEmailUrl } from '../data';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Mail, ArrowRight, ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onStartProject?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  const scrollToContact = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.querySelector('#pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#070709] border-t border-white/[0.08] overflow-hidden">
      {/* Animated Subtle Red Glow Behind Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/[0.12] rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Studio Marker */}
        <div
          id="final-cta-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/[0.08] border border-red-500/25 text-red-400 text-xs font-mono tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>APEX SURYA • ELEVATE YOUR STANDARD</span>
        </div>

        {/* Headline */}
        <h2
          id="final-cta-headline"
          className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] max-w-4xl"
        >
          YOUR BUSINESS DESERVES <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-neutral-100 to-red-400 bg-clip-text text-transparent">
            A BETTER WEBSITE.
          </span>
        </h2>

        {/* Supporting Text */}
        <p
          id="final-cta-supporting-text"
          className="mt-6 text-base sm:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed"
        >
          Let's build something modern, professional and impossible to ignore.
        </p>

        {/* 3 Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          {/* Button 1: START A PROJECT */}
          <button
            id="final-cta-start-project-btn"
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:shadow-[0_0_50px_rgba(239,68,68,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: CHAT ON WHATSAPP */}
          <a
            id="final-cta-whatsapp-btn"
            href={getWhatsAppUrl(
              'Hey Surya, I am here to build my website. Please share your website plans and details.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.14] hover:border-red-500/40 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>CHAT ON WHATSAPP</span>
          </a>

          {/* Button 3: SEND A QUERY */}
          <a
            id="final-cta-query-btn"
            href={getWebsiteQueryEmailUrl()}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-red-400" />
            <span>SEND A QUERY</span>
          </a>
        </div>
      </div>
    </section>
  );
};
