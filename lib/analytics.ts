// Funções auxiliares para rastrear eventos no Google Analytics

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Rastrear visualização de página
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-STFM7K17LC', {
      page_path: url,
    });
  }
};

// Rastrear evento genérico
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos do site
export const analytics = {
  // Clique em botão do WhatsApp
  whatsappClick: (location: string) => {
    trackEvent('whatsapp_click', 'Contact', location);
  },

  // Envio de formulário
  formSubmit: (formName: string) => {
    trackEvent('form_submit', 'Contact', formName);
  },

  // Clique em serviço
  serviceClick: (serviceName: string) => {
    trackEvent('service_view', 'Services', serviceName);
  },

  // Clique em CTA
  ctaClick: (ctaName: string) => {
    trackEvent('cta_click', 'Conversion', ctaName);
  },

  // Download (se houver)
  download: (fileName: string) => {
    trackEvent('download', 'Engagement', fileName);
  },

  // Scroll até seção
  scrollToSection: (sectionName: string) => {
    trackEvent('scroll_to_section', 'Navigation', sectionName);
  },

  // FAQ expandido
  faqExpanded: (question: string) => {
    trackEvent('faq_expanded', 'Engagement', question);
  },
};

