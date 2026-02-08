'use client';

import { motion } from 'framer-motion';
import { FaClock, FaChartLine, FaCheckCircle, FaExpand } from 'react-icons/fa';

const benefits = [
  {
    icon: FaClock,
    title: 'Economia de Tempo',
    description: 'Reduza em até 80% o tempo gasto em tarefas repetitivas',
    stat: '80%',
  },
  {
    icon: FaCheckCircle,
    title: 'Redução de Erros',
    description: 'Minimize erros humanos com processos automatizados',
    stat: '95%',
  },
  {
    icon: FaChartLine,
    title: 'Mais Produtividade',
    description: 'Foque no que realmente importa para seu negócio',
    stat: '3x',
  },
  {
    icon: FaExpand,
    title: 'Escalabilidade',
    description: 'Cresça sem aumentar proporcionalmente os custos',
    stat: '∞',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geo-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[#06b6d4] font-mono text-sm uppercase tracking-widest mb-4 block">
            // Benefícios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Por que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">automatizar?</span>
          </h2>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            Os benefícios que farão a diferença no seu negócio.
          </p>
        </motion.div>

        {/* Benefits grid - Bento-style with different sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-[#020617] border border-[#1e293b] p-8 rounded-2xl
                hover:border-[#06b6d4]/50 transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/10
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              {/* Large stat number */}
              <div className={`font-black text-transparent bg-clip-text bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] mb-4 ${
                index === 0 ? 'text-8xl md:text-9xl' : 'text-6xl'
              }`}>
                {benefit.stat}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center mb-4 group-hover:bg-[#06b6d4]/20 transition-colors duration-300">
                <benefit.icon className="text-xl text-[#94a3b8] group-hover:text-[#06b6d4] transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className={`font-bold text-white mb-3 ${
                index === 0 ? 'text-2xl' : 'text-xl'
              }`}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[#94a3b8] leading-relaxed">
                {benefit.description}
              </p>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#06b6d4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#020617] to-[#0f172a] border border-[#1e293b] rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#06b6d4] to-[#8b5cf6]" />
            <p className="text-2xl text-white font-semibold mb-2 relative z-10">
              Empresas que automatizam seus processos crescem{' '}
              <span className="text-[#06b6d4]">3x mais rápido</span>
            </p>
            <p className="text-[#94a3b8] relative z-10">
              Não fique para trás. Comece sua transformação digital hoje mesmo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
