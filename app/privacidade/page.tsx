'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <FaArrowLeft />
            Voltar ao Site
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <FaShieldAlt className="text-6xl text-purple-400 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-white mb-4">
              Política de <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Privacidade</span>
            </h1>
            <p className="text-gray-400">
              Última atualização: 17 de dezembro de 2025
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
              <p className="leading-relaxed">
                A AutomateAI Tech Solutions ("nós", "nosso" ou "AutomateAI") está comprometida em proteger 
                sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos 
                suas informações pessoais quando você visita nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Informações que Coletamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.1 Informações Fornecidas por Você</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone/WhatsApp</li>
                    <li>Informações fornecidas no formulário de contato</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.2 Informações Coletadas Automaticamente</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador</li>
                    <li>Páginas visitadas</li>
                    <li>Tempo de permanência no site</li>
                    <li>Dados via Google Analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos Suas Informações</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder às suas solicitações de contato</li>
                <li>Fornecer informações sobre nossos serviços</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Analisar o uso do site através do Google Analytics</li>
                <li>Enviar comunicações de marketing (com seu consentimento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de Informações</h2>
              <p className="leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Quando necessário para fornecer nossos serviços (ex: EmailJS, Google Analytics)</li>
                <li>Quando exigido por lei</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies e Tecnologias Similares</h2>
              <p className="leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Melhorar sua experiência no site</li>
                <li>Analisar o tráfego através do Google Analytics</li>
                <li>Lembrar suas preferências</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar 
                a funcionalidade do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Segurança</h2>
              <p className="leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
                informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Seus Direitos (LGPD)</h2>
              <p className="leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Revogar o consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Retenção de Dados</h2>
              <p className="leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                propósitos descritos nesta política ou conforme exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Links para Terceiros</h2>
              <p className="leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não somos responsáveis 
                pelas práticas de privacidade desses sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nesta Política</h2>
              <p className="leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você 
                sobre alterações significativas publicando a nova política nesta página com uma 
                data de atualização revisada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contato</h2>
              <p className="leading-relaxed mb-4">
                Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
              </p>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="mb-2"><strong className="text-white">AutomateAI Tech Solutions</strong></p>
                <p className="mb-2">Email: automateai@workflown8n.com.br</p>
                <p className="mb-2">WhatsApp: (84) 99673-5293</p>
                <p>Localização: Mossoró - RN</p>
              </div>
            </section>
          </div>

          {/* Back button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              <FaArrowLeft />
              Voltar ao Site
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}










