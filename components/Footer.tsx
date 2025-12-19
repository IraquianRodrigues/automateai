'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Serviços',
      links: [
        { name: 'Automação de Agendamentos', href: '#servicos' },
        { name: 'Suporte WhatsApp', href: '#servicos' },
        { name: 'Automação de Planilhas', href: '#servicos' },
        { name: 'Soluções Personalizadas', href: '#servicos' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#sobre' },
        { name: 'Como Funciona', href: '#como-funciona' },
        { name: 'Benefícios', href: '#beneficios' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { name: 'Entre em Contato', href: '#contato' },
        { name: 'WhatsApp', href: 'https://wa.me/seu-numero' },
        { name: 'Email', href: 'mailto:contato@automateai.com.br' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/5584996735293', color: 'hover:text-green-400' },
    { icon: FaInstagram, href: 'https://instagram.com/automateai', color: 'hover:text-pink-400' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/automateai', color: 'hover:text-blue-400' },
    { icon: FaFacebook, href: 'https://facebook.com/automateai', color: 'hover:text-blue-500' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  AutomateAI
                </span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transformando negócios através de automação inteligente e 
                soluções tecnológicas inovadoras.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-bold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-center md:text-left"
            >
              © {currentYear} AutomateAI Tech Solutions. Todos os direitos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6 text-sm"
            >
              <a href="/privacidade" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Política de Privacidade
              </a>
            </motion.div>
          </div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            Feito com{' '}
            <span className="text-purple-400">❤</span>
            {' '}para revolucionar seu negócio
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

