'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { analytics } from '@/lib/analytics';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [sendMethod, setSendMethod] = useState<'email' | 'whatsapp'>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    
    // Rastrear envio do formulário no Google Analytics
    analytics.formSubmit('Contact Form - ' + formData.service);
    
    if (sendMethod === 'email') {
      // Enviar por EMAIL usando EmailJS
      try {
        const result = await emailjs.send(
          'SEU_SERVICE_ID',     // Você vai pegar isso no EmailJS
          'SEU_TEMPLATE_ID',    // Você vai pegar isso no EmailJS
          {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            service: formData.service,
            message: formData.message,
            to_email: 'automateai@workflown8n.com.br',
          },
          'SUA_PUBLIC_KEY'      // Você vai pegar isso no EmailJS
        );

        if (result.status === 200) {
          setSubmitStatus('success');
          // Limpar formulário
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        }
      } catch (error) {
        console.error('Erro ao enviar email:', error);
        setSubmitStatus('error');
      }
    } else {
      // Enviar por WHATSAPP
      const whatsappMessage = `
Olá! Vim através do site AutomateAI.

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço de interesse:* ${formData.service}
*Mensagem:* ${formData.message}
      `.trim();
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/5584996735293?text=${encodedMessage}`;
      
      // Rastrear clique no WhatsApp
      analytics.whatsappClick('Contact Form');
      
      window.open(whatsappUrl, '_blank');
      setSubmitStatus('success');
    }
    
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+55 (84) 99673-5293',
      link: 'https://wa.me/5584996735293',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'automateai@workflown8n.com.br',
      link: 'mailto:automateai@workflown8n.com.br',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Entre em <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar seu negócio
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Fale Conosco
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Estamos prontos para atender você e entender suas necessidades. 
                Escolha o canal de sua preferência ou preencha o formulário.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`p-3 bg-linear-to-br ${info.color} rounded-lg`}>
                    <info.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <p className="text-white font-semibold">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 p-6 bg-linear-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-2xl text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Localização</p>
                  <p className="text-gray-400">
                    Mossoró - RN
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Atendimento em todo Brasil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Escolher método de envio */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Como deseja receber a resposta? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setSendMethod('email')}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                      sendMethod === 'email'
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <FaEnvelope className={`text-2xl ${sendMethod === 'email' ? 'text-purple-400' : 'text-gray-400'}`} />
                    <span className={`font-semibold ${sendMethod === 'email' ? 'text-white' : 'text-gray-400'}`}>
                      Email
                    </span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setSendMethod('whatsapp')}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                      sendMethod === 'whatsapp'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <FaWhatsapp className={`text-2xl ${sendMethod === 'whatsapp' ? 'text-green-400' : 'text-gray-400'}`} />
                    <span className={`font-semibold ${sendMethod === 'whatsapp' ? 'text-white' : 'text-gray-400'}`}>
                      WhatsApp
                    </span>
                  </button>
                </div>
              </div>

              {/* Mensagem de status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                  <div>
                    <p className="text-green-400 font-semibold">
                      {sendMethod === 'email' ? 'Email enviado com sucesso!' : 'Abrindo WhatsApp...'}
                    </p>
                    <p className="text-green-300 text-sm">
                      {sendMethod === 'email' ? 'Responderemos em breve.' : 'Continue a conversa no WhatsApp.'}
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3"
                >
                  <FaExclamationCircle className="text-red-400 text-xl flex-shrink-0" />
                  <div>
                    <p className="text-red-400 font-semibold">Erro ao enviar</p>
                    <p className="text-red-300 text-sm">Tente novamente ou use o WhatsApp.</p>
                  </div>
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-white font-semibold mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Automação de Agendamentos">Automação de Agendamentos</option>
                  <option value="Suporte WhatsApp & Leads">Suporte WhatsApp & Leads</option>
                  <option value="Automação de Planilhas">Automação de Planilhas</option>
                  <option value="Solução Personalizada">Solução Personalizada</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className={`w-full px-8 py-4 text-white font-semibold rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isLoading
                    ? 'bg-slate-700 cursor-not-allowed'
                    : sendMethod === 'email'
                    ? 'bg-linear-to-r from-purple-600 to-cyan-600 hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-linear-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/50'
                }`}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    {sendMethod === 'email' ? <FaPaperPlane /> : <FaWhatsapp />}
                    {sendMethod === 'email' ? 'Enviar por Email' : 'Enviar por WhatsApp'}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

