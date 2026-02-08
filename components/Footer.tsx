'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
        { name: 'WhatsApp', href: 'https://wa.me/5584996735293' },
        { name: 'Email', href: 'mailto:automateai@workflown8n.com.br' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/5584996735293', label: 'WhatsApp' },
    { icon: FaInstagram, href: 'https://instagram.com/automateai', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/automateai', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:automateai@workflown8n.com.br', label: 'Email' },
  ];

  return (
    <footer className="bg-[#020617] border-t border-[#1e293b] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#06b6d4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] p-[1px] mr-3">
                   <div className="w-full h-full bg-[#020617] rounded-lg flex items-center justify-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] font-black text-xl">A</span>
                   </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Automate<span className="text-[#06b6d4]">AI</span>
                  </h3>
                  <p className="text-[10px] text-[#94a3b8] uppercase tracking-[0.2em] font-medium">
                    Tech Solutions
                  </p>
                </div>
              </div>
              
              <p className="text-[#94a3b8] mb-8 leading-relaxed max-w-sm">
                Transformando negócios através de automação inteligente. 
                Funcionários digitais trabalhando 24h para você.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg border border-[#1e293b] bg-[#0f172a] flex items-center justify-center text-[#94a3b8] hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all duration-300"
                  >
                    <social.icon className="text-lg" />
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
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors duration-200 text-sm"
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
        <div className="pt-8 border-t border-[#1e293b]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748b] text-sm text-center md:text-left">
              © {currentYear} AutomateAI Tech Solutions. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="/privacidade" className="text-[#64748b] hover:text-[#06b6d4] transition-colors duration-200">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Made with - minimal */}
        <div className="text-center mt-8">
          <p className="text-[#334155] text-xs font-mono">
            Mossoró-RN • Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
