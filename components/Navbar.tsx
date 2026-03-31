'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Soluções', href: '#solucoes' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Processo', href: '#como-funciona' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 bg-[#FF6B00] flex items-center justify-center">
                <span className="text-[#0A0A0A] font-black text-2xl font-[family-name:var(--font-space-grotesk)]">A</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-[#FAFAFA] tracking-tight font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors">
                  Automate<span className="text-[#FF6B00]">AI</span>
                </h1>
                <p className="text-[9px] text-[#737373] uppercase tracking-[0.25em] font-medium">
                  Tech Solutions
                </p>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative px-4 py-2 text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-200 text-sm font-medium group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#FF6B00] group-hover:w-1/2 transition-all duration-300" />
                </motion.a>
              ))}

              {/* CTA Button — Solid orange, sharp */}
              <motion.a
                href="#contato"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-6 px-6 py-2.5 bg-[#FF6B00] text-[#0A0A0A] font-bold text-sm hover:bg-[#FF8533] transition-all duration-300"
              >
                Começar Agora
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#FAFAFA] text-2xl z-50 p-2 hover:text-[#FF6B00] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? '100vh' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden fixed inset-0 top-0 left-0 w-full bg-[#0A0A0A]/98 backdrop-blur-xl z-40 overflow-hidden flex flex-col justify-center items-center"
        >
          <div className="w-full max-w-md px-6 space-y-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="block text-center text-2xl font-medium text-[#A3A3A3] hover:text-[#FAFAFA] hover:scale-105 transition-all duration-200"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="#contato"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="block w-full text-center px-8 py-4 mt-8 bg-[#FF6B00] text-[#0A0A0A] font-bold text-lg"
            >
              Começar Agora
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}