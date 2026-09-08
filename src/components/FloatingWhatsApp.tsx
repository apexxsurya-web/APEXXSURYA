import React, { useState } from 'react';
import { BRAND, getWhatsAppUrl } from '../data';
import { MessageSquare, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            id="floating-whatsapp-tooltip"
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#14141d]/95 border border-red-500/30 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none whitespace-nowrap"
          >
            <img
              src={BRAND.logo}
              alt="APEX SURYA"
              referrerPolicy="no-referrer"
              className="w-5 h-5 rounded-full object-cover border border-red-500/50"
            />
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>CHAT WITH APEX SURYA</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl(
          'Hey Surya, I am here to build my website. Please share your website plans and details.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:shadow-[0_0_35px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat with APEX SURYA on WhatsApp"
      >
        {/* Pulsing subtle aura ring */}
        <span className="absolute -inset-1 rounded-full bg-red-500/30 animate-pulse pointer-events-none" />

        <MessageSquare className="w-6 h-6 text-white relative z-10" />

        {/* Small live status dot */}
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#08080c] z-20" />
      </a>
    </div>
  );
};
