'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#020617]/80 backdrop-blur-md border-b border-[#1e293b] shadow-lg shadow-[#06b6d4]/5' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Tech Gradient */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative flex items-center justify-center">
                {/* Logo mark - Gradient A */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] p-[1px] shadow-glow">
                   <div className="w-full h-full bg-[#020617] rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/20 to-[#8b5cf6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] font-black text-2xl">A</span>
                   </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-[#F5F5F0] tracking-tight group-hover:text-white transition-colors">
                  Automate<span className="text-[#06b6d4]">AI</span>
                </h1>
                <p className="text-[10px] text-[#94a3b8] uppercase tracking-[0.2em] font-medium">
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
                  className="relative px-4 py-2 text-[#94a3b8] hover:text-white transition-colors duration-200 text-sm font-medium group"
                >
                  {link.name}
                  {/* Glow underline on hover */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] group-hover:w-1/2 transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                </motion.a>
              ))}
              
              {/* CTA Button - Tech Style */}
              <motion.a
                href="#contato"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-6 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white font-bold text-sm shadow-[0_0_15px_-3px_rgba(6,182,212,0.6)] hover:shadow-[0_0_20px_0px_rgba(139,92,246,0.6)] transition-all duration-300 border border-white/10"
              >
                Começar Agora
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#F5F5F0] text-2xl z-50 p-2 hover:text-[#06b6d4] transition-colors"
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
          className="lg:hidden fixed inset-0 top-0 left-0 w-full bg-[#020617]/95 backdrop-blur-xl z-40 overflow-hidden flex flex-col justify-center items-center"
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
                className="block text-center text-2xl font-medium text-[#94a3b8] hover:text-white hover:scale-105 transition-all duration-200"
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
              className="block w-full text-center px-8 py-4 mt-8 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white font-bold text-lg shadow-lg shadow-[#06b6d4]/20"
            >
              Começar Agora
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
