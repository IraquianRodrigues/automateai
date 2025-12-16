'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Quanto tempo leva para implementar uma automação?',
    answer: 'O tempo varia de acordo com a complexidade do projeto. Automações simples podem ser implementadas em 1-2 semanas, enquanto projetos mais complexos podem levar de 4-8 semanas. Sempre trabalhamos com prazos realistas e mantemos você informado durante todo o processo.',
  },
  {
    question: 'Preciso ter conhecimento técnico para usar as automações?',
    answer: 'Não! Desenvolvemos soluções intuitivas e fáceis de usar. Além disso, fornecemos treinamento completo para sua equipe e documentação detalhada. Nosso objetivo é que você use a automação sem precisar se preocupar com aspectos técnicos.',
  },
  {
    question: 'As automações funcionam com meus sistemas atuais?',
    answer: 'Sim! Trabalhamos com integração de sistemas. Seja planilhas, CRMs, ERPs ou outras ferramentas, desenvolvemos soluções que se conectam com seus sistemas existentes, garantindo uma transição suave.',
  },
  {
    question: 'Qual o investimento necessário?',
    answer: 'Cada projeto é único e o investimento varia conforme a complexidade e escopo. Oferecemos diferentes pacotes e podemos criar uma solução personalizada que cabe no seu orçamento. Entre em contato para um orçamento sem compromisso.',
  },
  {
    question: 'Vocês oferecem suporte após a implementação?',
    answer: 'Sim! Oferecemos diferentes planos de suporte e manutenção. Desde suporte básico até planos completos com atualizações, melhorias contínuas e atendimento prioritário. Você nunca ficará desamparado.',
  },
  {
    question: 'E se eu precisar de ajustes ou novas funcionalidades?',
    answer: 'Nossas automações são desenvolvidas de forma escalável. Você pode solicitar ajustes, melhorias ou novas funcionalidades a qualquer momento. Trabalhamos com metodologia ágil, permitindo evoluções constantes do sistema.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-950">
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
            Perguntas <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`bg-slate-900/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'border-purple-500/50'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-purple-400 text-xl flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4 text-lg">Ainda tem dúvidas?</p>
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-3 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
          >
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}

