'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaCalendarAlt, FaWhatsapp, FaTable, FaCog, FaArrowRight, FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const solutions = [
  {
    icon: FaCalendarAlt,
    title: 'Automação de Agendamentos',
    description: 'Sistema completo para clínicas e consultórios. Gerencie agendamentos, confirmações automáticas e reduza faltas.',
    features: ['Confirmação automática via WhatsApp', 'Lembretes personalizados', 'Dashboard de gerenciamento'],
    image: '/odontovida.png',
    imageAlt: 'Dashboard de Agendamento — OdontoVida',
  },
  {
    icon: FaWhatsapp,
    title: 'CRM WhatsApp & Leads',
    description: 'Chatbot inteligente para captura de leads, atendimento 24/7 e qualificação automática de clientes.',
    features: ['Atendimento 24/7 automatizado', 'Kanban de leads e oportunidades', 'Histórico completo de conversas'],
    image: '/wpp.png',
    imageAlt: 'Dashboard CRM WhatsApp',
  },
  {
    icon: FaTable,
    title: 'Automação de Planilhas',
    description: 'Automatize relatórios, análises e processamento de dados. Economize horas de trabalho manual.',
    features: ['Relatórios automáticos', 'Análise de dados em tempo real', 'Integração com sistemas existentes'],
    image: null,
    imageAlt: '',
  },
  {
    icon: FaCog,
    title: 'Soluções Personalizadas',
    description: 'Desenvolvemos automações sob medida para as necessidades específicas do seu negócio.',
    features: ['Análise personalizada do processo', 'Desenvolvimento exclusivo', 'Suporte dedicado contínuo'],
    image: null,
    imageAlt: '',
  },
];

export default function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="solucoes" className="py-24 bg-[#0A0A0A] relative">
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
              className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#FF6B00] transition-colors"
                aria-label="Fechar zoom"
              >
                <FaTimes className="text-3xl" />
              </button>
              <Image
                src={selectedImage}
                alt="Zoomed view"
                width={1200}
                height={900}
                className="w-auto h-auto max-h-[90vh] border border-[#262626]"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-[#FF6B00] font-mono text-sm uppercase tracking-widest mb-4 block">
            &#47;&#47; Soluções
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] mb-6 leading-tight font-[family-name:var(--font-space-grotesk)]">
            Automações que{' '}
            <span className="text-gradient-brand">trabalham por você</span>
          </h2>
          <p className="text-xl text-[#A3A3A3] leading-relaxed">
            Cada solução é projetada para eliminar trabalho manual e aumentar sua eficiência operacional.
          </p>
        </motion.div>

        {/* Solutions — Staggered layout */}
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-[#141414] border border-[#262626] hover:border-[#FF6B00]/40 transition-all duration-300 ${
                solution.image ? 'grid lg:grid-cols-2' : ''
              }`}
            >
              {/* Content side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center">
                    <solution.icon className="text-xl text-[#FF6B00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] font-[family-name:var(--font-space-grotesk)] group-hover:text-[#FF6B00] transition-colors duration-300">
                    {solution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#A3A3A3] mb-6 leading-relaxed text-lg">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#A3A3A3]">
                      <span className="w-1.5 h-1.5 mr-3 flex-shrink-0 bg-[#FF6B00]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-[#FF6B00] font-bold hover:text-[#FF8533] transition-colors group/link"
                >
                  Saiba mais
                  <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Image side — only for solutions with screenshots */}
              {solution.image && (
                <div
                  className="relative cursor-zoom-in overflow-hidden border-t lg:border-t-0 lg:border-l border-[#262626]"
                  onClick={() => setSelectedImage(solution.image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-300" />
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <span className="bg-[#0A0A0A]/70 text-[#FAFAFA] px-4 py-2 text-sm font-semibold border border-[#262626]">
                      Clique para ampliar
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
