'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaCode, FaRocket, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    number: '01',
    title: 'Análise',
    description: 'Entendemos profundamente suas necessidades, processos atuais e objetivos de negócio.',
<<<<<<< HEAD
=======
    color: 'from-purple-500 to-pink-500',
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  },
  {
    icon: FaCode,
    number: '02',
    title: 'Desenvolvimento',
    description: 'Criamos a solução perfeita usando as melhores tecnologias e práticas do mercado.',
<<<<<<< HEAD
=======
    color: 'from-pink-500 to-purple-500',
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  },
  {
    icon: FaRocket,
    number: '03',
    title: 'Implementação',
    description: 'Implantamos a automação de forma suave, com treinamento completo da sua equipe.',
<<<<<<< HEAD
=======
    color: 'from-purple-500 to-cyan-500',
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  },
  {
    icon: FaHeadset,
    number: '04',
    title: 'Suporte',
    description: 'Oferecemos suporte contínuo e otimizações para garantir o melhor desempenho.',
<<<<<<< HEAD
=======
    color: 'from-cyan-500 to-blue-500',
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  },
];

export default function HowItWorks() {
  return (
<<<<<<< HEAD
    <section id="como-funciona" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Vertical line accent */}
      <div className="absolute left-8 md:left-1/2 top-48 bottom-48 w-px bg-gradient-to-b from-transparent via-[#1e293b] to-transparent hidden md:block" />
=======
    <section id="como-funciona" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
          className="mb-20 max-w-2xl"
        >
          <span className="text-[#8b5cf6] font-mono text-sm uppercase tracking-widest mb-4 block">
            // Processo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Como funciona
          </h2>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            Um processo simples e eficiente do início ao fim.
          </p>
        </motion.div>

        {/* Steps - Vertical timeline on desktop, stacked on mobile */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-stretch gap-8 mb-8 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number - Large display */}
              <div className="hidden md:flex items-center justify-center w-32 flex-shrink-0">
                <span className="text-7xl font-black text-[#0f172a] drop-shadow-sm">
                  {step.number}
                </span>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                  index % 2 === 0 ? 'bg-[#06b6d4]' : 'bg-[#8b5cf6]'
                } shadow-[0_0_10px_currentColor]`} />
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#1e293b]" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 bg-[#0f172a]/50 backdrop-blur-sm border border-[#1e293b] p-6 rounded-2xl group hover:border-[#8b5cf6]/30 transition-colors duration-300 shadow-lg">
                {/* Mobile number */}
                <span className="md:hidden text-5xl font-black text-[#1e293b] float-right ml-4 -mt-1">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-colors duration-300 ${
                  index % 2 === 0 
                    ? 'border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#06b6d4] group-hover:bg-[#06b6d4] group-hover:text-white' 
                    : 'border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white'
                }`}>
                  <step.icon className="text-xl transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-[#94a3b8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
=======
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Como <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Funciona</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Um processo simples e eficiente do início ao fim
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection line (hidden on mobile, shown on desktop for items except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-purple-500 to-transparent -translate-y-1/2" />
                )}

                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4">
                    <div className={`w-12 h-12 bg-linear-to-br ${step.color} rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-linear-to-br ${step.color} rounded-xl mb-6 shadow-lg`}>
                    <step.icon className="text-3xl text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
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
<<<<<<< HEAD
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white font-bold text-lg hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)] transition-all duration-300 transform hover:scale-105"
=======
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
          >
            Comece Sua Transformação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
