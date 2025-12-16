'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Detectar scroll para mudar estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao clicar em um link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10 border-b border-purple-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="text-2xl font-bold">
                <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  AutomateAI
                </span>
              </h1>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="#contato"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                Começar Agora
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white text-2xl z-50"
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
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-slate-950/98 backdrop-blur-lg border-t border-purple-500/20"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 py-2"
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
              className="block text-center px-6 py-3 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full mt-4"
            >
              Começar Agora
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer para não cobrir o conteúdo */}
      <div className="h-20" />
    </>
  );
}

