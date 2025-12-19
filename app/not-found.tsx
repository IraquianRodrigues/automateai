'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-4">
            <FaSearch className="text-6xl text-purple-400 mx-auto mb-4" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Página Não Encontrada
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            Ops! Parece que você se perdeu. A página que você procura não existe ou foi movida.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
            >
              <FaHome />
              Voltar ao Início
            </Link>
            
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-500 text-white font-semibold rounded-full hover:bg-purple-500/10 transition-all duration-300"
            >
              Entre em Contato
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}










