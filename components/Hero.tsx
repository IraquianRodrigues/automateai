'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [count, target]);

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

const stats = [
  { value: 3, suffix: '+', label: 'Clientes Ativos' },
  { value: 24, suffix: '/7', label: 'Operação Contínua' },
  { value: 80, suffix: '%', label: 'Menos Trabalho Manual' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background — Grid pattern + grain */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 geo-pattern opacity-40" />
        <div className="grain absolute inset-0" />
        {/* Subtle orange accent glow — bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6B00]/5 blur-[150px] rounded-full" />
      </div>

      {/* Particles */}
      <ParticlesBackground />

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]" />
            </span>
            <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-wider">
              Automação Inteligente
            </span>
          </div>
        </motion.div>

        {/* Massive Typography — Centered */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#FAFAFA] leading-[0.95] mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)] max-w-6xl"
        >
          Sua empresa no{' '}
          <span className="text-gradient-brand">piloto automático</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl leading-relaxed mb-12"
        >
          Criamos funcionários digitais que trabalham 24/7 pela sua empresa.
          Automatize processos, atenda clientes e escale sem aumentar a equipe.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <a
            href="#contato"
            className="group px-8 py-4 bg-[#FF6B00] text-[#0A0A0A] font-bold text-lg hover:bg-[#FF8533] transition-all duration-300 flex items-center gap-3"
          >
            Solicitar Demonstração
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://wa.me/5584996735293"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#262626] text-[#FAFAFA] font-medium text-lg hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-300 flex items-center gap-3"
          >
            <FaWhatsapp className="text-xl" />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-2xl border-t border-[#262626] pt-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] font-[family-name:var(--font-space-grotesk)] mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm text-[#737373] uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
