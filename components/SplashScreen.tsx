'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
=======
    // Esconder splash screen após 2.5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
<<<<<<< HEAD
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
          </div>
=======
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Background animated elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Logo and text */}
          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="mb-6"
            >
              <div className="relative inline-block">
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-purple-500/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Logo text */}
                <div className="relative px-8 py-6">
                  <h1 className="text-6xl md:text-7xl font-bold">
                    <span className="bg-linear-to-r from-purple-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      AutomateAI
                    </span>
                  </h1>
                </div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 tracking-widest uppercase mb-8"
            >
              Tech Solutions
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-64 h-1 mx-auto bg-slate-800 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="h-full bg-linear-to-r from-purple-500 to-cyan-500"
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
              className="mt-6 text-gray-500 text-sm tracking-wider"
            >
              Carregando experiência...
            </motion.p>
          </div>

          {/* Particle effects */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{
                x: "50vw",
                y: "50vh",
                scale: 0,
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: 1 + Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
        </motion.div>
      )}
    </AnimatePresence>
  );
}
<<<<<<< HEAD
=======










>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
