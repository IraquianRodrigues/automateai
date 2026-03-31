'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
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

    analytics.formSubmit('Contact Form - ' + formData.service);

    if (sendMethod === 'email') {
      try {
        const result = await emailjs.send(
          'SEU_SERVICE_ID',
          'SEU_TEMPLATE_ID',
          {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            service: formData.service,
            message: formData.message,
            to_email: 'automateai@workflown8n.com.br',
          },
          'SUA_PUBLIC_KEY'
        );

        if (result.status === 200) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }
      } catch (error) {
        console.error('Erro ao enviar email:', error);
        setSubmitStatus('error');
      }
    } else {
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
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'automateai@workflown8n.com.br',
      link: 'mailto:automateai@workflown8n.com.br',
    },
  ];

  const inputClasses = "w-full px-4 py-3 bg-[#141414] border border-[#262626] text-[#FAFAFA] placeholder-[#737373] focus:outline-none focus:border-[#FF6B00] transition-colors duration-300";

  return (
    <section id="contato" className="py-24 bg-[#141414] relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[#FF6B00] font-mono text-sm uppercase tracking-widest mb-4 block">
            &#47;&#47; Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] mb-6 leading-tight font-[family-name:var(--font-space-grotesk)]">
            Vamos conversar?
          </h2>
          <p className="text-xl text-[#A3A3A3] leading-relaxed">
            Entre em contato e descubra como podemos transformar seu negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
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
                className="flex items-center gap-4 p-5 bg-[#0A0A0A] border border-[#262626] hover:border-[#FF6B00]/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 border border-[#262626] bg-[#141414] flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00]/10 transition-colors duration-300">
                  <info.icon className="text-xl" />
                </div>
                <div>
                  <p className="text-[#A3A3A3] text-sm">{info.title}</p>
                  <p className="text-[#FAFAFA] font-semibold">{info.content}</p>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <div className="p-6 bg-[#0A0A0A] border-l-2 border-[#FF6B00]">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-xl text-[#FF6B00] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#FAFAFA] font-semibold mb-1">Localização</p>
                  <p className="text-[#A3A3A3]">Mossoró - RN</p>
                  <p className="text-[#737373] text-sm mt-1">Atendimento em todo Brasil</p>
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
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Send method selector */}
              <div>
                <label className="block text-[#FAFAFA] font-semibold mb-3">
                  Como deseja receber a resposta?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setSendMethod('email')}
                    className={`p-4 border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                      sendMethod === 'email'
                        ? 'border-[#FF6B00] bg-[#FF6B00]/10'
                        : 'border-[#262626] bg-[#0A0A0A] hover:border-[#363636]'
                    }`}
                  >
                    <FaEnvelope className={`text-2xl ${sendMethod === 'email' ? 'text-[#FF6B00]' : 'text-[#737373]'}`} />
                    <span className={`font-semibold ${sendMethod === 'email' ? 'text-[#FAFAFA]' : 'text-[#737373]'}`}>
                      Email
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSendMethod('whatsapp')}
                    className={`p-4 border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                      sendMethod === 'whatsapp'
                        ? 'border-[#22C55E] bg-[#22C55E]/10'
                        : 'border-[#262626] bg-[#0A0A0A] hover:border-[#363636]'
                    }`}
                  >
                    <FaWhatsapp className={`text-2xl ${sendMethod === 'whatsapp' ? 'text-[#22C55E]' : 'text-[#737373]'}`} />
                    <span className={`font-semibold ${sendMethod === 'whatsapp' ? 'text-[#FAFAFA]' : 'text-[#737373]'}`}>
                      WhatsApp
                    </span>
                  </button>
                </div>
              </div>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#22C55E]/10 border border-[#22C55E] flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#22C55E] text-xl flex-shrink-0" />
                  <div>
                    <p className="text-[#22C55E] font-semibold">
                      {sendMethod === 'email' ? 'Email enviado!' : 'Abrindo WhatsApp...'}
                    </p>
                    <p className="text-[#22C55E]/70 text-sm">
                      {sendMethod === 'email' ? 'Responderemos em breve.' : 'Continue no WhatsApp.'}
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#EF4444]/10 border border-[#EF4444] flex items-center gap-3"
                >
                  <FaExclamationCircle className="text-[#EF4444] text-xl flex-shrink-0" />
                  <div>
                    <p className="text-[#EF4444] font-semibold">Erro ao enviar</p>
                    <p className="text-[#EF4444]/70 text-sm">Tente novamente ou use o WhatsApp.</p>
                  </div>
                </motion.div>
              )}

              {/* Form fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[#FAFAFA] font-semibold mb-2">Nome</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className={inputClasses} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#FAFAFA] font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className={inputClasses} placeholder="seu@email.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-[#FAFAFA] font-semibold mb-2">Telefone</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                    className={inputClasses} placeholder="(XX) XXXXX-XXXX" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-[#FAFAFA] font-semibold mb-2">Serviço</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange}
                    className={inputClasses}>
                    <option value="">Selecione</option>
                    <option value="Automação de Agendamentos">Automação de Agendamentos</option>
                    <option value="CRM WhatsApp & Leads">CRM WhatsApp & Leads</option>
                    <option value="Automação de Planilhas">Automação de Planilhas</option>
                    <option value="Solução Personalizada">Solução Personalizada</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#FAFAFA] font-semibold mb-2">Mensagem</label>
                <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange}
                  className={`${inputClasses} resize-none`} placeholder="Conte-nos mais sobre sua necessidade..." />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-8 py-4 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isLoading
                    ? 'bg-[#262626] text-[#737373] cursor-not-allowed'
                    : sendMethod === 'email'
                    ? 'bg-[#FF6B00] text-[#0A0A0A] hover:bg-[#FF8533]'
                    : 'bg-[#22C55E] text-[#0A0A0A] hover:bg-[#16A34A]'
                }`}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#737373] border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    {sendMethod === 'email' ? <FaPaperPlane /> : <FaWhatsapp />}
                    {sendMethod === 'email' ? 'Enviar por Email' : 'Enviar por WhatsApp'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
