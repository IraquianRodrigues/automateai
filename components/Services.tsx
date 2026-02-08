'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaWhatsapp, FaTable, FaCog, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    icon: FaCalendarAlt,
    title: 'Automação de Agendamentos',
    description: 'Sistema completo para clínicas e consultórios. Gerencie agendamentos, confirmações automáticas e reduza faltas.',
    features: ['Confirmação automática', 'Lembretes personalizados', 'Integração com calendário'],
    accent: '#06b6d4',
  },
  {
    icon: FaWhatsapp,
    title: 'Suporte WhatsApp & Leads',
    description: 'Chatbot inteligente para captura de leads, atendimento 24/7 e qualificação automática de clientes.',
    features: ['Atendimento 24/7', 'Captura de leads', 'Respostas automáticas'],
    accent: '#8b5cf6',
  },
  {
    icon: FaTable,
    title: 'Automação de Planilhas',
    description: 'Automatize relatórios, análises e processamento de dados. Economize horas de trabalho manual.',
    features: ['Relatórios automáticos', 'Análise de dados', 'Integração com sistemas'],
    accent: '#ec4899', // Pink accent for variety, fits the tech theme
  },
  {
    icon: FaCog,
    title: 'Soluções Personalizadas',
    description: 'Desenvolvemos automações sob medida para as necessidades específicas do seu negócio.',
    features: ['Análise personalizada', 'Desenvolvimento exclusivo', 'Suporte dedicado'],
    accent: '#10b981', // Emerald for "Custom/Success" vibe
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#020617] relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section header - LEFT ALIGNED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[#06b6d4] font-mono text-sm uppercase tracking-widest mb-4 block">
            // Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluções que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">trabalham por você</span>
          </h2>
          <p className="text-xl text-[#94a3b8] leading-relaxed">
            Cada automação é projetada para eliminar trabalho manual e aumentar sua eficiência.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-[#0f172a] border border-[#1e293b] p-8 rounded-2xl
                hover:border-[#06b6d4]/50 transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/10`}
            >
              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl"
                style={{ 
                  background: `linear-gradient(135deg, transparent 60%, ${service.accent}20 100%)` 
                }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl border bg-[#020617]"
                  style={{ borderColor: `${service.accent}40` }}
                >
                  <service.icon className="text-2xl" style={{ color: service.accent }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#06b6d4] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#94a3b8] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#94a3b8] text-sm">
                      <span 
                        className="w-1.5 h-1.5 mr-3 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: service.accent }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 font-semibold group/link transition-colors"
                  style={{ color: service.accent }}
                >
                  Saiba mais 
                  <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
