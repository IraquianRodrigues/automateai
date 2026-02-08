'use client';

import { motion } from 'framer-motion';
import { FaClock, FaChartLine, FaCheckCircle, FaExpand } from 'react-icons/fa';

const benefits = [
  {
    icon: FaClock,
    title: 'Economia de Tempo',
    description: 'Reduza em até 80% o tempo gasto em tarefas repetitivas',
    stat: '80%',
<<<<<<< HEAD
=======
    color: 'from-purple-500 to-pink-500',
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  },
  {
    icon: FaCheckCircle,
    title: 'Redução de Erros',
    description: 'Minimize erros humanos com processos automatizados',
    stat: '95%',
<<<<<<< HEAD
  },
  {
    icon: FaChartLine,
    title: 'Mais Produtividade',
    description: 'Foque no que realmente importa para seu negócio',
    stat: '3x',
=======
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: FaChartLine,
    title: 'Aumento de Produtividade',
    description: 'Foque no que realmente importa para seu negócio',
    stat: '3x',
    color: 'from-purple-500 to-cyan-500',
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  },
  {
    icon: FaExpand,
    title: 'Escalabilidade',
    description: 'Cresça sem aumentar proporcionalmente os custos',
    stat: '∞',
<<<<<<< HEAD
=======
    color: 'from-cyan-500 to-blue-500',
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  },
];

export default function Benefits() {
  return (
<<<<<<< HEAD
    <section id="beneficios" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geo-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
=======
    <section id="beneficios" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
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
=======
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
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
<<<<<<< HEAD
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
=======
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
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Bottom highlight */}
=======
        {/* Additional info */}
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
<<<<<<< HEAD
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#020617] to-[#0f172a] border border-[#1e293b] rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#06b6d4] to-[#8b5cf6]" />
            <p className="text-2xl text-white font-semibold mb-2 relative z-10">
              Empresas que automatizam seus processos crescem{' '}
              <span className="text-[#06b6d4]">3x mais rápido</span>
            </p>
            <p className="text-[#94a3b8] relative z-10">
=======
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-linear-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
            <p className="text-2xl text-white font-semibold mb-2">
              Empresas que automatizam seus processos crescem 
              <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"> 3x mais rápido</span>
            </p>
            <p className="text-gray-400 text-lg">
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
              Não fique para trás. Comece sua transformação digital hoje mesmo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
