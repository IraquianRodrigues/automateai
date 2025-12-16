# AutomateAI Tech Solutions 🚀

Site corporativo moderno para a AutomateAI, empresa especializada em automação inteligente e soluções tecnológicas.

## 🎨 Design

O site foi desenvolvido com uma paleta de cores moderna baseada no logo da empresa:
- **Primária**: Roxo/Magenta (#A855F7, #9333EA)
- **Secundária**: Ciano/Azul (#06B6D4, #0EA5E9)
- **Background**: Dark (#0F172A, #1E293B)
- Gradientes suaves de roxo para ciano

## ✨ Características

- ✅ Design moderno e responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Paleta de cores baseada na identidade visual
- ✅ Scroll suave entre seções
- ✅ Formulário de contato integrado com WhatsApp
- ✅ Componentes interativos
- ✅ Otimizado para SEO

## 📋 Seções do Site

1. **Hero Section** - Apresentação impactante com CTA
2. **Serviços** - Cards interativos com os principais serviços:
   - Automação de Agendamentos para Clínicas
   - Suporte WhatsApp & Captura de Leads
   - Automação de Planilhas
   - Soluções Personalizadas
3. **Sobre Nós** - Missão, visão e valores da empresa
4. **Como Funciona** - Processo em 4 etapas
5. **Benefícios** - Vantagens da automação
6. **FAQ** - Perguntas frequentes
7. **Contato** - Formulário e informações de contato
8. **Footer** - Links e redes sociais

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **Shadcn/ui** - Componentes

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

## ⚙️ Configuração

### Atualizar informações de contato

Edite os seguintes arquivos para adicionar suas informações:

1. **components/Contact.tsx** - Linha 52
   - Substitua `seu-numero` pelo seu número do WhatsApp (formato: 5511999999999)

2. **components/Hero.tsx** - Linha 95
   - Atualize o link do WhatsApp

3. **components/Footer.tsx**
   - Atualize os links das redes sociais
   - Adicione email e telefone

### Personalizar conteúdo

Todos os textos podem ser editados nos componentes em `components/`:
- `Hero.tsx` - Título e subtítulo principal
- `Services.tsx` - Descrição dos serviços
- `About.tsx` - Sobre a empresa
- `FAQ.tsx` - Perguntas e respostas

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores grandes

## 🎯 SEO

Para otimizar o SEO, edite o arquivo `app/layout.tsx` e adicione:
- Título da página
- Meta descrição
- Open Graph tags
- Favicon personalizado

## 📄 Licença

© 2024 AutomateAI Tech Solutions. Todos os direitos reservados.

---

Desenvolvido com ❤ para revolucionar negócios através da automação
