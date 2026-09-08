import React, { useState } from 'react';
import { BRAND, getWhatsAppUrl, getWebsiteQueryEmailUrl } from '../data';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  MessageSquare,
  Mail,
  Send,
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    websiteType: 'Business Website',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const websiteTypes = [
    'Business Website',
    'Landing Page',
    'Portfolio Website',
    'Restaurant & Cafe Website',
    'E-Commerce Website',
    'Website Redesign',
    'Mobile-Friendly Website',
    'Website Maintenance',
    'Custom Project',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ef4444', '#ffffff', '#dc2626'],
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);

    // Prepare direct message for WhatsApp handover option
    const message = `Hello Surya,\n\nI just submitted a project request:\n- Name: ${formData.name}\n- Business: ${formData.businessName}\n- Email: ${formData.email}\n- WhatsApp: ${formData.whatsappNumber}\n- Website Type: ${formData.websiteType}\n- Requirements: ${formData.projectDetails}`;
    
    // Auto-open WhatsApp after 800ms
    setTimeout(() => {
      const url = getWhatsAppUrl(message);
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#08080c] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div
            id="contact-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>START THE CONVERSATION</span>
          </div>

          <h2
            id="contact-heading"
            className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            HAVE A PROJECT IN MIND?
          </h2>

          <p
            id="contact-subheading"
            className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
          >
            Let's turn your idea into a professional digital experience.
          </p>

          <div className="mt-5 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* Two Contact Options Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* OPTION 1: BUILD MY WEBSITE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-[#181824] via-[#12121a] to-[#0c0c12] border border-red-500/30 shadow-[0_15px_35px_-10px_rgba(239,68,68,0.2)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-red-400 px-2.5 py-1 rounded bg-red-500/[0.08] border border-red-500/20">
                  OPTION 01 • DIRECT CHAT
                </span>
                <Phone className="w-5 h-5 text-red-400" />
              </div>

              <h3 className="font-['Space_Grotesk',sans-serif] text-2xl font-extrabold text-white tracking-tight">
                BUILD MY WEBSITE
              </h3>

              <p className="mt-2 text-sm text-neutral-300 font-normal">
                Chat directly with <strong className="text-white">APEX SURYA</strong> on WhatsApp.
              </p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-red-500/40 p-0.5 bg-[#09090f] shadow-[0_0_15px_rgba(239,68,68,0.3)] shrink-0">
                  <img
                    src={BRAND.logo}
                    alt="APEX SURYA"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">Surya Chaurasia</div>
                  <div className="text-[11px] font-mono text-neutral-400">
                    Direct Line: <span className="text-white font-semibold">{BRAND.phoneDisplay}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <a
                id="contact-option-whatsapp-btn"
                href={getWhatsAppUrl(
                  'Hey Surya, I am here to build my website. Please share your website plans and details.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* OPTION 2: HAVE A QUESTION? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-8 bg-[#121219]/90 border border-white/[0.08] hover:border-white/[0.15] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neutral-400 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                  OPTION 02 • INQUIRY
                </span>
                <Mail className="w-5 h-5 text-neutral-400" />
              </div>

              <h3 className="font-['Space_Grotesk',sans-serif] text-2xl font-extrabold text-white tracking-tight">
                HAVE A QUESTION?
              </h3>

              <p className="mt-2 text-sm text-neutral-300 font-normal">
                Send your website query by email.
              </p>

              <div className="mt-4 text-xs font-mono text-neutral-400 truncate">
                Direct Email: <span className="text-white font-semibold">{BRAND.email}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
              <a
                id="contact-option-email-query-btn"
                href={getWebsiteQueryEmailUrl()}
                className="flex-1 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/30 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span>SEND WEBSITE QUERY</span>
              </a>

              <a
                id="contact-option-email-direct-btn"
                href={`mailto:${BRAND.email}`}
                className="py-4 px-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-neutral-300 hover:text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all"
              >
                <span>EMAIL APEX SURYA</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Project Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#13131c] via-[#0f0f15] to-[#0a0a0f] border border-white/[0.09] shadow-2xl relative"
        >
          <div className="max-w-2xl mb-8">
            <h3 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-white tracking-tight">
              PROJECT REQUEST FORM
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-normal">
              Fill in your specifications. I respond with initial scoping within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-red-950/20 border border-red-500/40 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center text-red-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">Project Request Prepared!</h4>
              <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>! Your project brief has been formatted. WhatsApp is launching to connect directly with Surya.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={getWhatsAppUrl(
                    `Hello Surya, I just submitted a project request:\n- Name: ${formData.name}\n- Business: ${formData.businessName}\n- Email: ${formData.email}\n- WhatsApp: ${formData.whatsappNumber}\n- Website Type: ${formData.websiteType}\n- Requirements: ${formData.projectDetails}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-3 rounded-xl text-xs font-mono text-neutral-400 hover:text-white"
                >
                  Edit Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="form-input-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-red-500 focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Business Name *
                  </label>
                  <input
                    id="form-input-business"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Studio / Bistro"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-red-500 focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="form-input-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@yourbusiness.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-red-500 focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    id="form-input-whatsapp"
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-red-500 focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                  />
                </div>
              </div>

              {/* Website Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Website Type *
                </label>
                <select
                  id="form-select-type"
                  value={formData.websiteType}
                  onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#14141d] border border-white/[0.1] focus:border-red-500 focus:outline-none text-white text-sm transition-colors"
                >
                  {websiteTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#14141d] text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="form-textarea-details"
                  rows={4}
                  required
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Tell me about your business, the goals of this website, any reference sites you like, and your target timeline..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-red-500 focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="form-submit-request-btn"
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND PROJECT REQUEST</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
