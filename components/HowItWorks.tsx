'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaCode, FaRocket, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    number: '01',
    title: 'Análise',
    description: 'Entendemos profundamente suas necessidades, processos atuais e objetivos de negócio.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaCode,
    number: '02',
    title: 'Desenvolvimento',
    description: 'Criamos a solução perfeita usando as melhores tecnologias e práticas do mercado.',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: FaRocket,
    number: '03',
    title: 'Implementação',
    description: 'Implantamos a automação de forma suave, com treinamento completo da sua equipe.',
    color: 'from-purple-500 to-cyan-500',
  },
  {
    icon: FaHeadset,
    number: '04',
    title: 'Suporte',
    description: 'Oferecemos suporte contínuo e otimizações para garantir o melhor desempenho.',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
          >
            Comece Sua Transformação
          </a>
        </motion.div>
      </div>
    </section>
  );
}

