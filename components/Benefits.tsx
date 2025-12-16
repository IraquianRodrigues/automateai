'use client';

import { motion } from 'framer-motion';
import { FaClock, FaChartLine, FaCheckCircle, FaExpand } from 'react-icons/fa';

const benefits = [
  {
    icon: FaClock,
    title: 'Economia de Tempo',
    description: 'Reduza em até 80% o tempo gasto em tarefas repetitivas',
    stat: '80%',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaCheckCircle,
    title: 'Redução de Erros',
    description: 'Minimize erros humanos com processos automatizados',
    stat: '95%',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: FaChartLine,
    title: 'Aumento de Produtividade',
    description: 'Foque no que realmente importa para seu negócio',
    stat: '3x',
    color: 'from-purple-500 to-cyan-500',
  },
  {
    icon: FaExpand,
    title: 'Escalabilidade',
    description: 'Cresça sem aumentar proporcionalmente os custos',
    stat: '∞',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Por Que <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Automatizar?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Os benefícios que farão a diferença no seu negócio
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-linear-to-br ${benefit.color} rounded-xl mb-4 shadow-lg`}>
                  <benefit.icon className="text-3xl text-white" />
                </div>

                {/* Stat */}
                <div className={`text-5xl font-bold mb-3 bg-linear-to-br ${benefit.color} text-transparent bg-clip-text`}>
                  {benefit.stat}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-linear-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
            <p className="text-2xl text-white font-semibold mb-2">
              Empresas que automatizam seus processos crescem 
              <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"> 3x mais rápido</span>
            </p>
            <p className="text-gray-400 text-lg">
              Não fique para trás. Comece sua transformação digital hoje mesmo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

