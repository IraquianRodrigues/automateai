'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCookie, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Mostrar banner após 2 segundos
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-slate-900 border border-purple-500/50 rounded-2xl shadow-2xl shadow-purple-500/20 backdrop-blur-lg">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl">
                      <FaCookie className="text-3xl text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      🍪 Nós usamos cookies
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site 
                      e personalizar conteúdo. Ao continuar navegando, você concorda com nossa{' '}
                      <Link href="/privacidade" className="text-purple-400 hover:text-purple-300 underline">
                        Política de Privacidade
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                      onClick={acceptCookies}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                    >
                      Aceitar Todos
                    </button>
                    <button
                      onClick={rejectCookies}
                      className="px-6 py-3 bg-transparent border-2 border-slate-700 text-gray-300 font-semibold rounded-full hover:border-slate-600 transition-colors duration-300 whitespace-nowrap"
                    >
                      Apenas Essenciais
                    </button>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={rejectCookies}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors md:hidden"
                    aria-label="Fechar"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}










