'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#020617] relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left side - Header (sticky) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start"
          >
            <span className="text-[#06b6d4] font-mono text-sm uppercase tracking-widest mb-4 block">
              // FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
              Tire suas dúvidas sobre nossos serviços de automação.
            </p>
            
            <div className="hidden lg:block">
              <p className="text-[#64748b] text-sm mb-4">Ainda tem dúvidas?</p>
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#0f172a] border border-[#1e293b] text-white font-bold hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all duration-300"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>

          {/* Right side - FAQ items */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? 'border-[#06b6d4]/50 bg-[#0f172a]'
                      : 'border-[#1e293b] bg-[#020617] hover:border-[#334155]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  >
                    <span className={`text-lg font-semibold pr-4 transition-colors ${
                      openIndex === index ? 'text-[#06b6d4]' : 'text-[#f1f5f9] group-hover:text-[#06b6d4]'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index ? 'bg-[#06b6d4] text-[#020617]' : 'bg-[#1e293b] text-[#94a3b8] group-hover:bg-[#334155]'
                    }`}>
                      {openIndex === index ? (
                        <FaMinus className="text-sm" />
                      ) : (
                        <FaPlus className="text-sm" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#94a3b8] leading-relaxed border-t border-[#1e293b]/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 lg:hidden"
        >
          <p className="text-[#64748b] mb-4">Ainda tem dúvidas?</p>
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-3 rounded-xl bg-[#06b6d4] text-[#020617] font-bold"
          >
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
