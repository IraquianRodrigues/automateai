'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const keyPoints = [
  'Funcionários digitais trabalhando 24h pela sua empresa',
  'Automação acessível e personalizada para cada negócio',
  'Análise consultiva das dores da sua operação',
  'Tecnologia dos grandes centros para negócios locais',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#141414] relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[20rem] font-black text-[#FAFAFA] leading-none font-[family-name:var(--font-space-grotesk)]">
          AI
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6B00] font-mono text-sm uppercase tracking-widest mb-4 block">
            &#47;&#47; Sobre Nós
          </span>
        </motion.div>

        {/* Vertical narrative — NOT split layout */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] mb-10 leading-tight font-[family-name:var(--font-space-grotesk)]"
          >
            Transformamos processos manuais em{' '}
            <span className="text-gradient-brand">eficiência digital</span>
          </motion.h2>

          {/* Main paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-[#A3A3A3] leading-relaxed mb-12"
          >
            <p>
              A AutomateAI é especializada em criar{' '}
              <span className="text-[#FAFAFA] font-semibold">&quot;funcionários digitais&quot;</span> que
              trabalham 24h por dia pela sua empresa. Atuamos na intersecção entre
              negócios e tecnologia, tornando a automação acessível para todos.
            </p>
            <p>
              Oferecemos uma abordagem consultiva: analisamos as dores da sua operação
              e desenvolvemos soluções sob medida — desde o atendimento automático
              no WhatsApp até a gestão inteligente de dados e agendamentos.
            </p>
          </motion.div>

          {/* Manifesto quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-l-2 border-[#FF6B00] pl-6 mb-12"
          >
            <p className="text-[#737373] text-base italic">
              Fundada em 2025 em Mossoró-RN. Consultoria nativa digital focada em trazer
              a tecnologia dos grandes centros para os negócios locais.
            </p>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaCheck className="text-[10px] text-[#FF6B00]" />
                </div>
                <span className="text-[#FAFAFA] text-sm">{point}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 bg-[#FF6B00] text-[#0A0A0A] font-bold text-lg hover:bg-[#FF8533] transition-all duration-300"
            >
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
