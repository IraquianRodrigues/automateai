'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCookie } from 'react-icons/fa';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#141414] border-t border-[#262626]"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[#A3A3A3] text-sm">
              <FaCookie className="text-[#FF6B35] text-xl flex-shrink-0" />
              <p>
                Utilizamos cookies para melhorar sua experiência.{' '}
                <a href="/privacidade" className="text-[#FF6B35] hover:underline">
                  Saiba mais
                </a>
              </p>
            </div>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-[#FF6B35] text-[#0A0A0A] font-semibold text-sm hover:bg-[#FF8F66] transition-colors flex-shrink-0"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
