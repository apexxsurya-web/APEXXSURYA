import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { BRAND, getWhatsAppUrl } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Laptop,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
  Layers,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0e0e14] border border-white/[0.12] shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#14141c] border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  {project.category}
                </span>
                <h3 className="font-['Space_Grotesk',sans-serif] text-lg font-bold text-white leading-none mt-0.5">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Device Toggle */}
              <div className="hidden sm:flex items-center p-1 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                    deviceView === 'desktop'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Desktop preview"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                    deviceView === 'mobile'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Mobile preview"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Mobile</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="overflow-y-auto p-6 space-y-8">
            {/* Interactive Preview Canvas */}
            <div className="relative rounded-xl bg-gradient-to-b from-[#09090d] to-[#12121a] p-4 sm:p-6 border border-white/[0.08] flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
              {/* Ambient Glow */}
              <div
                className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: project.accentColor }}
              />

              {deviceView === 'desktop' ? (
                /* Desktop Mockup Representation */
                <div className="w-full max-w-2xl rounded-xl bg-[#161622] border border-white/[0.1] shadow-2xl overflow-hidden relative">
                  <div className="h-7 px-3 bg-[#1d1d2b] border-b border-white/[0.06] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 px-2 py-0.5 rounded bg-black/40 text-[9px] font-mono text-neutral-400">
                      preview.apexsurya.web/{project.id}
                    </span>
                  </div>
                  <div className="p-5 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <div className="text-xs font-bold tracking-widest text-white uppercase">
                        {project.title}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                        {project.metrics}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xl sm:text-2xl font-['Space_Grotesk',sans-serif] font-bold text-white">
                        {project.overview}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Simulated visual cards inside */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                      {project.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-neutral-200 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Mobile Mockup Representation */
                <div className="w-64 rounded-2xl bg-[#161622] border-2 border-white/[0.15] shadow-2xl overflow-hidden relative">
                  <div className="h-6 bg-[#1d1d2b] flex items-center justify-center">
                    <div className="w-16 h-2 rounded-full bg-neutral-700" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="text-xs font-bold text-white">{project.title}</div>
                    <div className="text-[10px] text-neutral-400">{project.clientType}</div>
                    <div className="p-2.5 rounded bg-red-600/10 border border-red-500/30 text-[10px] text-red-400 font-mono">
                      {project.metrics}
                    </div>
                    <div className="space-y-1.5 pt-2">
                      {project.features.map((f, i) => (
                        <div key={i} className="text-[10px] text-neutral-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Details & Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Client & Scope
                </h4>
                <p className="text-sm font-semibold text-white mb-4">{project.clientType}</p>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Delivered Features
                </h4>
                <ul className="space-y-2">
                  {project.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 bg-[#14141c] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Want a similar website for your business?
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
              >
                Close Preview
              </button>

              <a
                href={getWhatsAppUrl(
                  `Hey Surya, I saw your ${project.title} project and I want to build a similar website for my business. Let's discuss!`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Build Similar Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
