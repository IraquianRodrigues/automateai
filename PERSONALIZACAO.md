# 📝 Guia de Personalização - AutomateAI

Este documento contém todas as informações necessárias para personalizar o site com seus dados reais.

## 🔧 Personalizações Obrigatórias

### 1. Informações de Contato

#### WhatsApp
Substitua `seu-numero` nos seguintes arquivos:

**components/Hero.tsx** (linha ~95)
```tsx
href="https://wa.me/5511999999999"  // Formato: 55 + DDD + número
```

**components/Contact.tsx** (linha ~52)
```tsx
const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`;
```

**components/Footer.tsx** (linha ~53)
```tsx
{ icon: FaWhatsapp, href: 'https://wa.me/5511999999999', color: 'hover:text-green-400' },
```

#### Email
**components/Contact.tsx** (linha ~56-60)
```tsx
{
  icon: FaEnvelope,
  title: 'Email',
  content: 'seuemail@automateai.com.br',  // Seu email real
  link: 'mailto:seuemail@automateai.com.br',
  color: 'from-purple-500 to-pink-500',
},
```

#### Telefone
**components/Contact.tsx** (linha ~61-66)
```tsx
{
  icon: FaPhone,
  title: 'Telefone',
  content: '+55 (11) 99999-9999',  // Seu telefone
  link: 'tel:+5511999999999',
  color: 'from-cyan-500 to-blue-500',
},
```

### 2. Redes Sociais

**components/Footer.tsx** (linhas ~53-56)
```tsx
const socialLinks = [
  { icon: FaWhatsapp, href: 'https://wa.me/5511999999999', color: 'hover:text-green-400' },
  { icon: FaInstagram, href: 'https://instagram.com/seu_usuario', color: 'hover:text-pink-400' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/sua-empresa', color: 'hover:text-blue-400' },
  { icon: FaFacebook, href: 'https://facebook.com/sua-pagina', color: 'hover:text-blue-500' },
];
```

### 3. Logo

Substitua a logo atual em:
1. Adicione sua logo em `public/logo.svg` ou `public/logo.png`
2. Atualize `app/favicon.ico` com o favicon da empresa

Para usar uma imagem ao invés de texto no Hero:
```tsx
// Em components/Hero.tsx, substitua o texto por:
<Image 
  src="/logo.svg" 
  alt="AutomateAI Logo" 
  width={400} 
  height={100}
  priority
/>
```

### 4. SEO e Metadata

**app/layout.tsx** - Adicione no metadata:
```tsx
export const metadata = {
  title: 'AutomateAI - Soluções em Automação Inteligente',
  description: 'Transforme seu negócio com automação de agendamentos, WhatsApp, planilhas e muito mais.',
  keywords: 'automação, agendamentos, whatsapp, leads, planilhas',
  authors: [{ name: 'AutomateAI' }],
  openGraph: {
    title: 'AutomateAI - Soluções em Automação Inteligente',
    description: 'Transforme seu negócio com automação inteligente',
    url: 'https://seu-site.com',
    siteName: 'AutomateAI',
    images: [
      {
        url: 'https://seu-site.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomateAI - Soluções em Automação Inteligente',
    description: 'Transforme seu negócio com automação inteligente',
    images: ['https://seu-site.com/og-image.jpg'],
  },
};
```

## 🎨 Personalizações Opcionais

### 1. Ajustar Cores

Se quiser ajustar os tons dos gradientes, edite:

**app/globals.css**
```css
/* Procure por classes como: */
from-purple-500  /* Ajuste o número: 400, 500, 600 */
to-cyan-400      /* Ajuste conforme necessário */
```

### 2. Alterar Textos

#### Hero (Título Principal)
**components/Hero.tsx** (linha ~62-67)

#### Descrição dos Serviços
**components/Services.tsx** (linha ~7-44) - Ajuste descrições e features

#### Sobre a Empresa
**components/About.tsx** (linha ~37-48) - Personalize sua história

#### FAQ
**components/FAQ.tsx** (linha ~7-38) - Adicione/remova perguntas

### 3. Adicionar Novos Serviços

**components/Services.tsx** - Adicione no array `services`:
```tsx
{
  icon: SeuIcone,  // Importe de react-icons
  title: 'Novo Serviço',
  description: 'Descrição do serviço...',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  color: 'from-purple-500 to-cyan-500',
},
```

### 4. Adicionar Google Analytics

**app/layout.tsx** - Adicione antes do </head>:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 5. Adicionar Chatbot do WhatsApp

Adicione no final do **components/Footer.tsx**:
```tsx
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/5511999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
>
  <FaWhatsapp className="text-3xl" />
</a>
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure domínio personalizado
4. Deploy automático!

### Outras Opções
- **Netlify**: Similar ao Vercel
- **AWS Amplify**: Para infraestrutura AWS
- **VPS/Servidor**: Build e hospedagem própria

### Comandos para Deploy Manual
```bash
npm run build
npm start
```

## 📊 Métricas e Analytics

Considere adicionar:
1. **Google Analytics** - Análise de tráfego
2. **Google Search Console** - SEO
3. **Hotjar** - Mapas de calor
4. **Meta Pixel** - Anúncios Facebook/Instagram

## 🔒 Segurança

- Use HTTPS sempre
- Configure CSP (Content Security Policy)
- Adicione rate limiting no formulário
- Valide inputs no backend (se tiver)

## 📱 Testes

Teste o site em:
- ✅ Chrome Desktop
- ✅ Firefox Desktop
- ✅ Safari Desktop
- ✅ Chrome Mobile
- ✅ Safari Mobile (iOS)
- ✅ Diferentes tamanhos de tela

## 💡 Dicas Extras

1. **Otimize Imagens**: Use WebP ou AVIF
2. **Lazy Loading**: Next.js já faz automaticamente
3. **Sitemap**: Adicione em `public/sitemap.xml`
4. **robots.txt**: Configure em `public/robots.txt`

## 🆘 Suporte

Se precisar de ajuda com personalizações avançadas:
- Consulte a documentação do Next.js
- Comunidade do Tailwind CSS
- Stack Overflow

---

**Boa sorte com seu site! 🚀**

