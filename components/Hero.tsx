"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp, FaRobot, FaBolt, FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#06b6d4]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8b5cf6]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 geo-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e293b]/50 border border-[#334155]/50 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06b6d4]"></span>
                </span>
                <span className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider">
                  Inovação em Automação
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Transforme seu Negócio com <br/>
              <span className="text-gradient-brand">Inteligência Artificial</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#94a3b8] max-w-xl leading-relaxed mb-10"
            >
              Automatize processos, atenda clientes 24/7 e escale sua empresa sem aumentar a equipe. Tecnologia de ponta, simples de usar.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contato"
                className="group relative px-8 py-4 rounded-xl bg-white text-[#020617] font-bold text-lg shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.6)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Solicitar Demo</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f1f5f9] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://wa.me/5584996735293"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-transparent border border-[#334155] text-white font-medium text-lg hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 hover:text-[#06b6d4] transition-all duration-300 flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Tech Stack Icons (Optional Trust Signals) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-[#1e293b] flex items-center gap-8 text-[#64748b]"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">Tecnologias:</span>
              <div className="flex gap-6 text-2xl">
                <FaRobot title="AI Agents" className="hover:text-[#06b6d4] transition-colors" />
                <FaBolt title="Fast Automation" className="hover:text-[#eab308] transition-colors" />
                <FaCode title="Custom Integration" className="hover:text-[#8b5cf6] transition-colors" />
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Abstract Tech Visualization */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full aspect-square max-w-[500px] mx-auto"
            >
              {/* Central Glowing Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] blur-xl animate-pulse opacity-50" />
              
              {/* Glass Card 1 */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-48 h-32 rounded-2xl bg-[#1e293b]/40 backdrop-blur-xl border border-[#334155]/50 p-4 shadow-xl z-20 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4]">
                    <FaRobot />
                  </div>
                  <div className="h-2 w-20 bg-[#334155]/50 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-[#334155]/30 rounded-full" />
                  <div className="h-2 w-2/3 bg-[#334155]/30 rounded-full" />
                </div>
              </motion.div>

              {/* Glass Card 2 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 w-56 h-40 rounded-2xl bg-[#1e293b]/60 backdrop-blur-xl border border-[#334155]/50 p-5 shadow-2xl z-30"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-[#06b6d4]">STATUS: ATIVO</span>
                  <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between text-xs text-[#94a3b8]">
                      <span>Automatizações</span>
                      <span>98%</span>
                   </div>
                   <div className="w-full h-1.5 bg-[#0f172a] rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]" />
                   </div>
                   <div className="flex justify-between text-xs text-[#94a3b8] pt-2">
                      <span>Tempo salvo</span>
                      <span>120h</span>
                   </div>
                   <div className="w-full h-1.5 bg-[#0f172a] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]" />
                   </div>
                </div>
              </motion.div>

              {/* Rotating Rings (Decorative) */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-[#334155]/20 rounded-full border-dashed"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-12 border border-[#334155]/20 rounded-full opacity-50"
               />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
