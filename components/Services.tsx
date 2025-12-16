'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaWhatsapp, FaTable, FaCog } from 'react-icons/fa';

const services = [
  {
    icon: FaCalendarAlt,
    title: 'Automação de Agendamentos',
    description: 'Sistema completo para clínicas e consultórios. Gerencie agendamentos, confirmações automáticas e reduza faltas.',
    features: ['Confirmação automática', 'Lembretes personalizados', 'Integração com calendário'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaWhatsapp,
    title: 'Suporte WhatsApp & Leads',
    description: 'Chatbot inteligente para captura de leads, atendimento 24/7 e qualificação automática de clientes.',
    features: ['Atendimento 24/7', 'Captura de leads', 'Respostas automáticas'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: FaTable,
    title: 'Automação de Planilhas',
    description: 'Automatize relatórios, análises e processamento de dados. Economize horas de trabalho manual.',
    features: ['Relatórios automáticos', 'Análise de dados', 'Integração com sistemas'],
    color: 'from-purple-500 to-cyan-500',
  },
  {
    icon: FaCog,
    title: 'Soluções Personalizadas',
    description: 'Desenvolvemos automações sob medida para as necessidades específicas do seu negócio.',
    features: ['Análise personalizada', 'Desenvolvimento exclusivo', 'Suporte dedicado'],
    color: 'from-pink-500 to-purple-500',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-950">
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
            Nossos <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções completas de automação para impulsionar seu negócio
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-linear-to-br ${service.color} rounded-xl mb-6 shadow-lg`}>
                  <service.icon className="text-4xl text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className={`w-1.5 h-1.5 bg-linear-to-r ${service.color} rounded-full mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <motion.a
                  href="#contato"
                  className="inline-flex items-center mt-6 text-purple-400 hover:text-cyan-400 transition-colors duration-300 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Saiba mais →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

