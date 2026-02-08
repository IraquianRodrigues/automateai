'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center"
        >
          <div className="text-center relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] blur-[60px] opacity-20" />

            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center mb-4 z-10"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] p-[1px] shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]">
                 <div className="w-full h-full bg-[#020617] rounded-2xl flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] font-black text-4xl">A</span>
                 </div>
              </div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Automate<span className="text-[#06b6d4]">AI</span>
              </h1>
              <p className="text-[10px] text-[#94a3b8] uppercase tracking-[0.3em] mt-2 font-medium">
                Tech Solutions
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="w-40 h-1 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] mx-auto mt-8 origin-left rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            />
          </div>        </motion.div>
      )}
    </AnimatePresence>
  );
}
