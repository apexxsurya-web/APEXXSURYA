import React, { useState } from 'react';
import { PROJECTS, getWhatsAppUrl } from '../data';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Laptop,
  CheckCircle2,
  ExternalLink,
  Eye,
} from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-red-700/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div
            id="work-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2
            id="work-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            SELECTED WORK
          </h2>

          <p
            id="work-subheading"
            className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
          >
            A collection of modern digital experiences built for different types of businesses.
          </p>

          <div className="mt-5 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#121219]/90 border border-white/[0.08] hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(239,68,68,0.15)] overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Mockup Preview Visual */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer relative rounded-2xl bg-gradient-to-br from-[#161622] to-[#0c0c12] p-3 sm:p-5 border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-500 overflow-hidden shadow-2xl"
                    >
                      {/* Browser Mockup Top bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {project.id}.production.site
                        </span>
                        <div className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                          {project.metrics}
                        </div>
                      </div>

                      {/* Mockup Screen Content with interactive aesthetics */}
                      <div className="rounded-xl bg-[#09090e] p-5 sm:p-6 border border-white/[0.04] relative min-h-[220px] sm:min-h-[260px] flex flex-col justify-between overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                        {/* Glow accent */}
                        <div
                          className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20 blur-3xl"
                          style={{ backgroundColor: project.accentColor }}
                        />

                        {/* Top Inner Screen Header */}
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 text-xs font-bold">
                              ▲
                            </div>
                            <span className="text-xs font-bold text-white tracking-wider">
                              {project.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                            {project.category}
                          </span>
                        </div>

                        {/* Center Visual Mockup Elements */}
                        <div className="my-4 relative z-10 space-y-3">
                          <div className="text-lg sm:text-xl font-['Space_Grotesk',sans-serif] font-bold text-white max-w-md">
                            {project.overview}
                          </div>

                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.features.map((feat, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] text-neutral-300 flex items-center gap-1.5"
                              >
                                <CheckCircle2 className="w-3 h-3 text-red-400" />
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Inner Bar */}
                        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between relative z-10 text-[10px] font-mono text-neutral-400">
                          <span>OPTIMIZED PERFORMANCE</span>
                          <span className="text-red-400 group-hover:text-red-300 flex items-center gap-1 font-bold">
                            CLICK TO VIEW DETAILS <Eye className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right / Project Details */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 tracking-wider uppercase mb-2">
                      <span>0{idx + 1}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="font-['Space_Grotesk',sans-serif] text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                      {project.title}
                    </h3>

                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-8">
                      {project.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        id={`view-project-btn-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] hover:border-red-500/40 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 group/btn"
                      >
                        <Eye className="w-4 h-4 text-red-400" />
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      <a
                        href={getWhatsAppUrl(
                          `Hey Surya, I am interested in building a website like your ${project.title}. Please share the process and cost.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl text-neutral-400 hover:text-white text-xs font-semibold tracking-wider transition-colors flex items-center gap-1.5"
                      >
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Case Study Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
