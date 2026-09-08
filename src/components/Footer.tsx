import React from 'react';
import { BRAND, getWhatsAppUrl } from '../data';
import { Instagram, MessageSquare, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WORK', href: '#work' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#050507] border-t border-white/[0.08] pt-16 pb-12 text-neutral-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c0c12] border border-red-500/40 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.3)] p-0.5">
                  <img
                    src={BRAND.logo}
                    alt="APEX SURYA Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span className="font-['Space_Grotesk',sans-serif] text-xl font-black text-white tracking-wider">
                  {BRAND.name}
                </span>
              </div>

              {/* Tagline */}
              <p
                id="footer-tagline"
                className="mt-4 text-sm sm:text-base font-bold tracking-tight text-neutral-200 uppercase max-w-sm leading-snug"
              >
                {BRAND.tagline}
              </p>

              <p className="mt-2 text-xs text-neutral-400 max-w-sm leading-relaxed font-normal">
                {BRAND.positioning}
              </p>
            </div>

            <div className="mt-6 text-[11px] font-mono text-neutral-400">
              INDIVIDUAL DIGITAL CRAFTSMANSHIP • REMOTE WORLDWIDE
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-link-${link.label.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs tracking-wider font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-3">
                Social
              </div>
              <a
                id="footer-instagram-link"
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-red-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-red-500" />
                <span>Instagram — {BRAND.handle}</span>
              </a>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-3">
                Direct Contact
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <a
                    id="footer-whatsapp-link"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-red-400 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp — {BRAND.phoneDisplay}</span>
                  </a>
                </div>

                <div>
                  <a
                    id="footer-email-link"
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-red-400" />
                    <span>Email — {BRAND.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div id="footer-copyright">
            © 2026 APEX SURYA. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-neutral-400">
              BUILT FOR HIGH CONVERSION
            </span>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
              title="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
