'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'OdontoVida', sector: 'Clínica Odontológica' },
  { name: 'Top Cursos', sector: 'Educação Online' },
  { name: 'BarberPro', sector: 'Barbearia' },
];

export default function Clients() {
  return (
    <section className="py-12 bg-[#0A0A0A] border-y border-[#262626] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Label */}
          <div className="flex-shrink-0">
            <p className="text-[#737373] text-sm uppercase tracking-widest font-medium">
              Confiado por empresas
            </p>
          </div>

          {/* Client logos/names */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group text-center"
              >
                <span className="text-xl md:text-2xl font-bold text-[#A3A3A3] group-hover:text-[#FF6B00] transition-colors duration-300 font-[family-name:var(--font-space-grotesk)]">
                  {client.name}
                </span>
                <p className="text-[10px] text-[#737373] uppercase tracking-widest mt-1">
                  {client.sector}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Count */}
          <div className="flex-shrink-0">
            <div className="px-4 py-2 border border-[#262626] bg-[#141414]">
              <span className="text-[#FF6B00] font-bold font-[family-name:var(--font-space-grotesk)]">3+</span>
              <span className="text-[#737373] text-sm ml-2">projetos entregues</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
