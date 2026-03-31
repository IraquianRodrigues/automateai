'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaCode, FaRocket, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    number: '01',
    title: 'Análise',
    description: 'Entendemos profundamente suas necessidades, processos atuais e objetivos de negócio.',
  },
  {
    icon: FaCode,
    number: '02',
    title: 'Desenvolvimento',
    description: 'Criamos a solução perfeita usando as melhores tecnologias e práticas do mercado.',
  },
  {
    icon: FaRocket,
    number: '03',
    title: 'Implementação',
    description: 'Implantamos a automação de forma suave, com treinamento completo da sua equipe.',
  },
  {
    icon: FaHeadset,
    number: '04',
    title: 'Suporte',
    description: 'Oferecemos suporte contínuo e otimizações para garantir o melhor desempenho.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-[#FF6B00] font-mono text-sm uppercase tracking-widest mb-4 block">
            &#47;&#47; Processo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] mb-6 leading-tight font-[family-name:var(--font-space-grotesk)]">
            Como funciona
          </h2>
          <p className="text-xl text-[#A3A3A3] leading-relaxed">
            Um processo simples e eficiente do início ao fim.
          </p>
        </motion.div>

        {/* Steps — Horizontal on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Connecting line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] right-0 h-px bg-[#262626] z-0" />
              )}

              <div className="relative z-10 p-6 md:p-8">
                {/* Number — Large */}
                <div className="text-6xl md:text-7xl font-black text-[#1A1A1A] group-hover:text-[#FF6B00]/20 transition-colors duration-500 font-[family-name:var(--font-space-grotesk)] mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#141414] border border-[#262626] flex items-center justify-center mb-4 group-hover:border-[#FF6B00]/50 group-hover:bg-[#FF6B00]/10 transition-all duration-300">
                  <step.icon className="text-xl text-[#A3A3A3] group-hover:text-[#FF6B00] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#FAFAFA] mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#A3A3A3] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Connecting line (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-px h-8 bg-[#262626] mx-auto" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-4 bg-[#FF6B00] text-[#0A0A0A] font-bold text-lg hover:bg-[#FF8533] transition-all duration-300"
          >
            Comece Sua Transformação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
