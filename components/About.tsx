'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const values = [
  {
    icon: FaLightbulb,
    title: 'Acessibilidade',
    description: 'Tecnologia dos grandes centros adaptada para negócios locais',
  },
  {
    icon: FaUsers,
    title: 'Abordagem Consultiva',
    description: 'Analisamos suas dores e criamos soluções sob medida',
  },
  {
    icon: FaChartLine,
    title: 'Parceiro Estratégico',
    description: 'Não vendemos serviços, construímos parcerias de crescimento',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Sobre a <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">AutomateAI</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                A AutomateAI é uma empresa especializada em transformar processos manuais em eficiência digital. 
                Atuamos na intersecção entre negócios e tecnologia, criando <span className="text-purple-400 font-semibold">"funcionários digitais"</span> que 
                trabalham 24h por dia pela sua empresa.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Acreditamos que a automação deve ser acessível e personalizada. Por isso, oferecemos uma abordagem 
                consultiva: analisamos as dores da sua operação e desenvolvemos soluções sob medida — desde o 
                atendimento automático no WhatsApp até a gestão inteligente de dados.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Com a AutomateAI, você não contrata apenas um serviço, mas ganha um <span className="text-cyan-400 font-semibold">parceiro estratégico</span> focado 
                em colocar sua empresa no piloto automático para que você possa focar no que realmente importa: crescer.
              </p>
              <p className="text-base text-gray-500 italic mb-8 leading-relaxed">
                Fundada em 2025 em Mossoró-RN, a AutomateAI é uma consultoria nativa digital, especialista em automação 
                focada em trazer a tecnologia dos grandes centros para a realidade dos negócios locais.
              </p>

              {/* Key points */}
              <div className="space-y-4">
                {[
                  'Funcionários digitais trabalhando 24h pela sua empresa',
                  'Automação acessível e personalizada',
                  'Análise consultiva das dores do seu negócio',
                  'Foco em colocar sua empresa no piloto automático',
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-2xl text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Values cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-linear-to-br from-purple-500 to-cyan-500 rounded-lg">
                      <value.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

