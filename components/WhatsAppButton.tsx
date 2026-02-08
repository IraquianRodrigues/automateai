'use client';

<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
=======
import { motion } from 'framer-motion';
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5584996735293"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
<<<<<<< HEAD
      transition={{ delay: 2, duration: 0.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#22c55e] transition-colors"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </motion.a>
  );
}
=======
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors group"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </motion.a>
  );
}

>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
