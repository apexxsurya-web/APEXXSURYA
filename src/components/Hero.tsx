import React, { useState } from 'react';
import { BRAND, getWhatsAppUrl } from '../data';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  ChevronRight,
  Eye,
  CheckCircle2,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onStartProject?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'code' | 'specs'>('dashboard');

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#070709]"
    >
      {/* Cinematic Ambient Background Lighting & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label */}
            <div
              id="hero-studio-badge"
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-500/[0.08] border border-red-500/25 text-red-400 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <img
                src={BRAND.logo}
                alt="APEX SURYA"
                referrerPolicy="no-referrer"
                className="w-5 h-5 rounded-full object-cover border border-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
              />
              <span>INDEPENDENT WEB DEVELOPMENT STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="font-['Space_Grotesk',sans-serif] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              BUILD A WEBSITE <br />
              <span className="bg-gradient-to-r from-white via-neutral-100 to-red-400 bg-clip-text text-transparent">
                THAT BUILDS
              </span>{' '}
              <span className="relative inline-block">
                <span className="text-red-500 relative z-10">YOUR BRAND.</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-red-600/20 -rotate-1 rounded-sm -z-0 blur-xs" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              <strong className="text-white font-semibold">APEX SURYA</strong> creates modern,
              responsive and business-focused websites designed to make brands look professional,
              build trust and grow online.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-view-work-btn"
                onClick={() => scrollToSection('#work')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] hover:border-white/30 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2.5 group"
              >
                <Eye className="w-4 h-4 text-neutral-400 group-hover:text-red-400 transition-colors" />
                <span>VIEW MY WORK</span>
              </button>

              <button
                id="hero-start-project-btn"
                onClick={() => {
                  if (onStartProject) onStartProject();
                  else scrollToSection('#pricing');
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 group hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-red-200 animate-pulse" />
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Secondary Label & Trust Badges */}
            <div className="pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center justify-between gap-4">
              <div
                id="hero-secondary-label"
                className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span>WEB DESIGN • DEVELOPMENT • DIGITAL EXPERIENCE</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                  Fast Turnaround
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                  Free 1-Yr Hosting
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium 3D-Style Laptop / Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Animated red glow backdrop behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/30 via-red-900/10 to-transparent rounded-3xl blur-2xl opacity-75 -z-10" />

            {/* Floating Glass Highlight Card Top Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-2 sm:-right-6 z-20 px-3.5 py-2.5 rounded-xl bg-[#14141d]/90 border border-red-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2.5 text-xs"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <div>
                <div className="text-[10px] text-neutral-400 font-mono tracking-wider">CORE WEB VITALS</div>
                <div className="text-white font-bold flex items-center gap-1">
                  100% Mobile Ready <Zap className="w-3 h-3 text-red-400 fill-red-400" />
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card Bottom Left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 z-20 px-4 py-3 rounded-xl bg-[#14141d]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-3 text-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-bold">Conversion Engine</div>
                <div className="text-[11px] text-neutral-400">Direct WhatsApp integration</div>
              </div>
            </motion.div>

            {/* The Laptop Shell */}
            <div className="relative rounded-2xl bg-gradient-to-b from-neutral-800/80 to-neutral-950 p-2 sm:p-3 border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              {/* Laptop Screen Bezel */}
              <div className="rounded-xl bg-[#09090d] border border-white/[0.08] overflow-hidden">
                {/* Browser Top Bar */}
                <div className="h-9 px-4 bg-[#121218] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  {/* Mock URL bar */}
                  <div className="px-3 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-neutral-400 flex items-center gap-1.5 max-w-[200px] truncate">
                    <span className="text-red-400">https://</span>apexsurya.web
                  </div>
                  {/* Mode switcher */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        activeTab === 'dashboard'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      UI
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        activeTab === 'code'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      CODE
                    </button>
                  </div>
                </div>

                {/* Inner Screen Content */}
                <div className="p-4 sm:p-5 min-h-[310px] bg-gradient-to-br from-[#0c0c12] via-[#09090d] to-[#120a0d] flex flex-col justify-between">
                  {activeTab === 'dashboard' ? (
                    <div className="space-y-4">
                      {/* Top Header of Simulated Agency Site */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <img
                            src={BRAND.logo}
                            alt="APEX SURYA"
                            referrerPolicy="no-referrer"
                            className="w-6 h-6 rounded-md object-cover border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                          />
                          <span className="text-xs font-bold text-white tracking-wider">
                            APEX SURYA
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                          ● LIVE PREVIEW
                        </span>
                      </div>

                      {/* Hero banner inside mockup */}
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-red-950/40 via-neutral-900/60 to-black border border-red-500/20 relative overflow-hidden">
                        <div className="text-[10px] font-mono text-red-400 uppercase tracking-wider mb-1">
                          Digital Evolution
                        </div>
                        <div className="text-sm font-bold text-white">
                          High-Impact Web Engineering
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="px-2 py-1 rounded bg-red-600 text-white text-[10px] font-bold">
                            View Case
                          </span>
                          <span className="text-[10px] text-neutral-400">
                            Custom Responsive Architecture
                          </span>
                        </div>
                      </div>

                      {/* Interactive Metrics Bar */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="text-[9px] text-neutral-400 font-mono">SPEED INDEX</div>
                          <div className="text-xs font-bold text-white mt-0.5 text-emerald-400">
                            0.4s
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="text-[9px] text-neutral-400 font-mono">CONVERSION</div>
                          <div className="text-xs font-bold text-white mt-0.5 text-red-400">
                            +142%
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="text-[9px] text-neutral-400 font-mono">HOSTING</div>
                          <div className="text-xs font-bold text-white mt-0.5 text-neutral-200">
                            FREE 1YR
                          </div>
                        </div>
                      </div>

                      {/* Subtle Simulated Interactive Feed */}
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="text-neutral-300">WhatsApp Lead Automation</span>
                        </div>
                        <span className="font-mono text-neutral-400 text-[10px]">Active</span>
                      </div>
                    </div>
                  ) : (
                    /* Code Tab */
                    <div className="font-mono text-[11px] text-neutral-300 space-y-1.5 p-1">
                      <div className="text-neutral-400">// APEX SURYA Website Architecture</div>
                      <div>
                        <span className="text-red-400">const</span>{' '}
                        <span className="text-white">studio</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-400">brand:</span>{' '}
                        <span className="text-emerald-300">"APEX SURYA"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-400">standard:</span>{' '}
                        <span className="text-emerald-300">"Modern & Responsive"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-400">conversion:</span>{' '}
                        <span className="text-red-400">true</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-400">hostingIncluded:</span>{' '}
                        <span className="text-red-400">"1 Year Free"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-400">whatsapp:</span>{' '}
                        <span className="text-emerald-300">"+91 7309520485"</span>,
                      </div>
                      <div>&#125;;</div>
                      <div className="pt-2 text-neutral-400">
                        <span className="text-red-400">export default</span> studio;
                      </div>
                    </div>
                  )}

                  {/* Mockup Footer Bar */}
                  <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Client First Engineering
                    </span>
                    <span>v2.6 PRODUCTION</span>
                  </div>
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="h-3 sm:h-3.5 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-b-xl mt-1 border-t border-white/10 flex items-center justify-center">
                <div className="w-16 h-1 rounded-full bg-neutral-600/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
