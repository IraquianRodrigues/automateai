'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaCalendarCheck, FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function Features() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[120px]" />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full h-auto max-h-[90vh] flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#06b6d4] transition-colors"
                aria-label="Fechar zoom"
              >
                <FaTimes className="text-3xl" />
              </button>
              <Image
                src={selectedImage}
                alt="Zoomed view"
                width={1200}
                height={900}
                className="w-auto h-auto max-h-[90vh] rounded-lg shadow-2xl border border-[#1e293b]"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Feature 1: Agendamento */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div 
              className="relative group cursor-zoom-in"
              onClick={() => setSelectedImage('/odontovida.png')}
            >
              {/* Tech Frame */}
              <div className="absolute inset-0 border border-[#06b6d4]/30 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 to-[#8b5cf6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              {/* Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#334155]/50 bg-[#0f172a] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                <Image
                  src="/odontovida.png"
                  alt="Dashboard de Agendamento AutomateAI"
                  width={800}
                  height={600}
                  className="w-full h-auto opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Zoom Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/10">
                    Clique para ampliar
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center border border-[#06b6d4]/20 text-[#06b6d4]">
                <FaCalendarCheck className="text-xl" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Agendamento <span className="text-[#06b6d4]">Inteligente</span>
              </h3>
            </div>
            
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
              Esqueça as planilhas manuais. Nossa dashboard intuitiva permite gerenciar 
              toda sua agenda em um só lugar, com confirmações automáticas e redução 
              drástica de faltas.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Visualização diária, semanal e mensal',
                'Lembretes automáticos via WhatsApp',
                'Gestão de múltiplos profissionais'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#f1f5f9]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] shadow-[0_0_10px_#06b6d4]" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contato" className="inline-flex items-center gap-2 text-[#06b6d4] font-bold hover:text-[#22d3ee] transition-colors group">
              Ver demonstração 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Feature 2: WhatsApp */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/20 text-[#10b981]">
                <FaWhatsapp className="text-xl" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                CRM WhatsApp <span className="text-[#10b981]">Integrado</span>
              </h3>
            </div>
            
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
              Transforme seu WhatsApp em uma máquina de vendas. Centralize atendimentos, 
              qualifique leads automaticamente e nunca mais perca uma oportunidade 
              por demora na resposta.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Kanban de leads e oportunidades',
                'Respostas rápidas e automáticas',
                'Histórico completo de conversas'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#f1f5f9]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981]" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contato" className="inline-flex items-center gap-2 text-[#10b981] font-bold hover:text-[#34d399] transition-colors group">
              Conhecer CRM 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="relative group cursor-zoom-in"
              onClick={() => setSelectedImage('/wpp.png')}
            >
              {/* Tech Frame */}
              <div className="absolute inset-0 border border-[#10b981]/30 rounded-2xl -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#10b981]/10 to-[#06b6d4]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              {/* Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#334155]/50 bg-[#0f172a] shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                <Image
                  src="/wpp.png"
                  alt="Dashboard WhatsApp CRM"
                  width={800}
                  height={600}
                  className="w-full h-auto opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Zoom Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/10">
                    Clique para ampliar
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
