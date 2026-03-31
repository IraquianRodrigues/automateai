'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Soluções',
      links: [
        { name: 'Automação de Agendamentos', href: '#solucoes' },
        { name: 'CRM WhatsApp & Leads', href: '#solucoes' },
        { name: 'Automação de Planilhas', href: '#solucoes' },
        { name: 'Soluções Personalizadas', href: '#solucoes' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#sobre' },
        { name: 'Como Funciona', href: '#como-funciona' },
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
    <footer className="bg-[#0A0A0A] border-t border-[#262626] relative">
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
                <div className="w-10 h-10 bg-[#FF6B00] flex items-center justify-center mr-3">
                  <span className="text-[#0A0A0A] font-black text-xl font-[family-name:var(--font-space-grotesk)]">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] tracking-tight font-[family-name:var(--font-space-grotesk)]">
                    Automate<span className="text-[#FF6B00]">AI</span>
                  </h3>
                  <p className="text-[9px] text-[#737373] uppercase tracking-[0.25em] font-medium">
                    Tech Solutions
                  </p>
                </div>
              </div>

              <p className="text-[#A3A3A3] mb-8 leading-relaxed max-w-sm">
                Transformando negócios através de automação inteligente.
                Funcionários digitais trabalhando 24h para você.
              </p>

              {/* Social links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 border border-[#262626] bg-[#141414] flex items-center justify-center text-[#A3A3A3] hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-300"
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
              <h4 className="text-[#FAFAFA] font-bold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[#A3A3A3] hover:text-[#FF6B00] transition-colors duration-200 text-sm"
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
        <div className="pt-8 border-t border-[#262626]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#737373] text-sm text-center md:text-left">
              © {currentYear} AutomateAI Tech Solutions. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="/privacidade" className="text-[#737373] hover:text-[#FF6B00] transition-colors duration-200">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="text-center mt-8">
          <p className="text-[#363636] text-xs font-mono">
            Mossoró-RN • Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
