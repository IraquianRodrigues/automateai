'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const values = [
  {
    icon: FaLightbulb,
    title: 'Acessibilidade',
    description: 'Tecnologia dos grandes centros adaptada para negócios locais',
    color: '#06b6d4',
  },
  {
    icon: FaUsers,
    title: 'Abordagem Consultiva',
    description: 'Analisamos suas dores e criamos soluções sob medida',
    color: '#8b5cf6',
  },
  {
    icon: FaChartLine,
    title: 'Parceiro Estratégico',
    description: 'Não vendemos serviços, construímos parcerias de crescimento',
    color: '#ec4899',
  },
];

const keyPoints = [
  'Funcionários digitais trabalhando 24h pela sua empresa',
  'Automação acessível e personalizada',
  'Análise consultiva das dores do seu negócio',
  'Foco em colocar sua empresa no piloto automático',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none opacity-5">
        <span className="text-[20rem] font-black text-white leading-none">
          AI
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-[#8b5cf6] font-mono text-sm uppercase tracking-widest mb-4 block">
              // Sobre Nós
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Transformamos processos manuais em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">eficiência digital</span>
            </h2>
            
            <div className="space-y-6 text-lg text-[#94a3b8] leading-relaxed mb-10">
              <p>
                A AutomateAI é especializada em criar{' '}
                <span className="text-white font-semibold">"funcionários digitais"</span> que 
                trabalham 24h por dia pela sua empresa. Atuamos na intersecção entre 
                negócios e tecnologia.
              </p>
              <p>
                Oferecemos uma abordagem consultiva: analisamos as dores da sua operação 
                e desenvolvemos soluções sob medida — desde o atendimento automático 
                no WhatsApp até a gestão inteligente de dados.
              </p>
              <p className="text-[#64748b] text-base italic border-l-2 border-[#1e293b] pl-4">
                Fundada em 2025 em Mossoró-RN. Consultoria nativa digital focada em trazer 
                a tecnologia dos grandes centros para os negócios locais.
              </p>
            </div>

            {/* Key points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-xs text-[#06b6d4]" />
                  </div>
                  <span className="text-[#f1f5f9] text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Value cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-[#020617] border border-[#1e293b] p-6 rounded-xl group hover:border-[#06b6d4]/30 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-300 bg-[#0f172a]"
                    style={{ borderColor: `${value.color}40` }}
                  >
                    <value.icon className="text-xl transition-colors duration-300" style={{ color: value.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-94a3b8 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA box */}
            <div className="relative overflow-hidden rounded-xl p-6 mt-6 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <p className="text-white font-bold text-lg mb-2">
                  Pronto para automatizar?
                </p>
                <p className="text-white/90 text-sm mb-4">
                  Converse com nossa equipe e descubra como podemos ajudar.
                </p>
                <a 
                  href="#contato"
                  className="inline-block px-6 py-2 bg-white text-[#020617] rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
