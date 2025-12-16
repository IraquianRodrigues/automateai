'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-2">
                <span className="bg-linear-to-r from-purple-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  AutomateAI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 tracking-widest uppercase">
                Tech Solutions
              </p>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Transforme Seu Negócio com
            <br />
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Automação Inteligente
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Soluções inovadoras em automação de agendamentos, suporte via WhatsApp,
            captura de leads e muito mais.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contato"
              className="group relative px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/50"
            >
              <FaRocket className="group-hover:translate-x-1 transition-transform" />
              Comece Agora
            </a>
            <a
              href="https://wa.me/5584999642564"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-transparent border-2 border-purple-500 text-white font-semibold rounded-full text-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              Fale no WhatsApp
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                <div className="w-1.5 h-3 bg-purple-400 rounded-full mt-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

