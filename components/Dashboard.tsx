'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaChartLine, FaTimes, FaExpand, FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

const dashboards = [
  {
    id: 1,
    title: 'Dashboard de Agendamentos',
    description: 'Acompanhe todos os agendamentos, confirmações, cancelamentos e estatísticas em tempo real.',
    image: '/novo dash.png', // Coloque sua imagem aqui
    icon: FaCalendarAlt,
    features: [
      'Visualização em tempo real',
      'Métricas de confirmação',
      'Taxa de comparecimento',
      'Histórico completo',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Dashboard WhatsApp & Leads',
    description: 'Monitore conversas, leads capturados, taxa de conversão e performance do atendimento automático.',
    image: '/wpp dashboard.png', // Coloque sua imagem aqui
    icon: FaWhatsapp,
    features: [
      'Conversas em andamento',
      'Leads qualificados',
      'Taxa de resposta',
      'Relatórios detalhados',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Dashboard() {
  const [selectedDashboard, setSelectedDashboard] = useState<number | null>(null);

  return (
    <>
      <section id="dashboard" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <FaChartLine className="text-purple-400" />
              <span className="text-purple-400 font-semibold">Monitoramento em Tempo Real</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Dashboard <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Inteligente</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Acompanhe todas as suas automações com painéis intuitivos e métricas em tempo real
            </p>
          </motion.div>

          {/* Dashboard cards */}
          <div className="max-w-6xl mx-auto space-y-12">
            {dashboards.map((dashboard, index) => (
              <motion.div
                key={dashboard.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content side */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`inline-flex p-3 bg-linear-to-br ${dashboard.color} rounded-xl mb-4`}>
                    <dashboard.icon className="text-3xl text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {dashboard.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {dashboard.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-6">
                    {dashboard.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <span className={`w-1.5 h-1.5 bg-linear-to-r ${dashboard.color} rounded-full`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedDashboard(dashboard.id)}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r ${dashboard.color} text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <FaExpand />
                    Ver Dashboard Completo
                  </button>
                </div>

                {/* Image side */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl cursor-pointer group"
                    onClick={() => setSelectedDashboard(dashboard.id)}
                  >
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="text-white text-center">
                        <FaExpand className="text-4xl mb-2 mx-auto" />
                        <p className="text-lg font-semibold">Clique para ampliar</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full aspect-video">
                      <Image
                        src={dashboard.image}
                        alt={dashboard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-linear-to-t ${dashboard.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-linear-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">
                Dados e Transparência em Tempo Real
              </h3>
              <p className="text-gray-400 mb-6">
                Todos os nossos serviços incluem dashboards personalizados para você acompanhar 
                resultados, métricas e performance das suas automações.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center px-8 py-3 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
              >
                Quero Meu Dashboard
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox/Modal */}
      {selectedDashboard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDashboard(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedDashboard(null)}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 text-lg"
            >
              <FaTimes className="text-2xl" />
              <span>Fechar (ESC)</span>
            </button>

            {/* Image */}
            <div className="relative bg-slate-900 rounded-xl overflow-hidden border-2 border-purple-500/50 shadow-2xl">
              <div className="relative w-full aspect-video">
                <Image
                  src={dashboards.find(d => d.id === selectedDashboard)?.image || ''}
                  alt={dashboards.find(d => d.id === selectedDashboard)?.title || ''}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {dashboards.find(d => d.id === selectedDashboard)?.title}
              </h3>
              <p className="text-gray-400">
                {dashboards.find(d => d.id === selectedDashboard)?.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}










