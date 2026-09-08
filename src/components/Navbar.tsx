import React, { useState, useEffect } from 'react';
import { BRAND, getWhatsAppUrl } from '../data';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 30);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollPos / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WORK', href: '#work' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onStartProject) {
      onStartProject();
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08080c]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-600 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo / Left */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#0e0e14] border border-red-500/30 group-hover:border-red-500/70 transition-all duration-300 shadow-[0_0_20px_-3px_rgba(239,68,68,0.45)] overflow-hidden p-0.5">
              <img
                src={BRAND.logo}
                alt="APEX SURYA Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk',sans-serif] text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-red-400 transition-colors">
                {BRAND.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-mono uppercase">
                DIGITAL STUDIO
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav
            id="desktop-navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.05] relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-500 group-hover:w-1/2 transition-all duration-200 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              id="navbar-cta-start-project"
              onClick={handleStartProjectClick}
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_25px_-5px_rgba(239,68,68,0.5)] hover:shadow-[0_0_35px_-2px_rgba(239,68,68,0.7)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-200 animate-pulse" />
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-red-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-[#0a0a0e]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-8 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-neutral-300 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] text-sm font-semibold tracking-wider transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-red-500/60 font-mono text-xs">0{idx + 1}</span>
                </motion.a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
                <button
                  id="mobile-nav-start-project-btn"
                  onClick={handleStartProjectClick}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                >
                  <Sparkles className="w-4 h-4 text-red-200" />
                  <span>START A PROJECT</span>
                </button>

                <a
                  id="mobile-nav-whatsapp-direct"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-300 hover:text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <span>CHAT ON WHATSAPP (+91 7309520485)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
