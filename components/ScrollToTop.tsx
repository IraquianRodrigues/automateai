'use client';

<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
=======
import { motion, useScroll } from 'framer-motion';
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
=======
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
<<<<<<< HEAD
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-[#0f172a] border border-[#1e293b] rounded-xl flex items-center justify-center text-[#94a3b8] hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors shadow-lg"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
=======
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-slate-800 border border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg"
      aria-label="Voltar ao topo"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <FaArrowUp className="text-xl" />
    </motion.button>
  );
}










>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
