# 🚀 Guia Completo de Deploy - AutomateAI

## ✅ Checklist Pré-Deploy

Antes de colocar no ar, verifique:

- [x] Design completo e responsivo
- [x] Todas as seções implementadas
- [x] WhatsApp configurado (84) 99964-2564
- [x] Email configurado automateai@workflown8n.com.br
- [x] Dashboards com imagens reais
- [x] Google Analytics (G-377865447)
- [x] robots.txt criado
- [x] sitemap.xml criado
- [x] Política de Privacidade
- [x] Banner de Cookies (LGPD)
- [x] Página 404 personalizada
- [x] Meta tags otimizadas
- [ ] Links de redes sociais (depois)
- [ ] EmailJS configurado (opcional)
- [ ] Domínio escolhido

---

## 🌐 Opção 1: Deploy na Vercel (Recomendado - Grátis)

### Por que Vercel?
- ✅ **Grátis** para projetos pessoais
- ✅ **Fácil** - Deploy em 5 minutos
- ✅ **Rápido** - CDN global
- ✅ **HTTPS** automático
- ✅ **Domínio customizado** grátis
- ✅ **Next.js otimizado** (empresa do Next.js)

### Passo a Passo:

#### 1. Criar Conta
1. Acesse: [https://vercel.com](https://vercel.com)
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel

#### 2. Subir o Projeto no GitHub
```bash
# No terminal, na pasta do projeto:
git init
git add .
git commit -m "Initial commit - AutomateAI website"
```

Depois, no GitHub:
1. Crie um novo repositório: [https://github.com/new](https://github.com/new)
2. Nome: `automateai-website`
3. Privado ou Público (sua escolha)
4. **NÃO** adicione README
5. Clique em **"Create repository"**

Conecte e envie:
```bash
git remote add origin https://github.com/seu-usuario/automateai-website.git
git branch -M main
git push -u origin main
```

#### 3. Deploy na Vercel
1. No Vercel, clique em **"Add New..." → "Project"**
2. Importe seu repositório do GitHub
3. Configure:
   - **Framework Preset**: Next.js (detecta automático)
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
4. Clique em **"Deploy"**
5. **Aguarde 2-3 minutos** ⏳

#### 4. Seu Site Está no Ar! 🎉
URL: `https://automateai-website.vercel.app`

---

## 🌐 Adicionar Domínio Personalizado

### Na Vercel:

1. No projeto, vá em **"Settings" → "Domains"**
2. Adicione seu domínio: `automateai.com.br`
3. Vercel vai te dar instruções DNS

### Onde Comprar Domínio:

**Recomendados no Brasil:**
- [Registro.br](https://registro.br) - Oficial, .br
- [GoDaddy](https://godaddy.com/pt-br)
- [HostGator](https://hostgator.com.br)
- [Hostinger](https://hostinger.com.br)

**Preços:**
- `.com.br`: R$ 40/ano
- `.com`: R$ 50-80/ano

### Configurar DNS:

No seu provedor de domínio, adicione:

**Tipo A (para domínio raiz):**
```
@ → 76.76.21.21
```

**Tipo CNAME (para www):**
```
www → cname.vercel-dns.com
```

**Aguarde 24-48h** para propagação completa.

---

## 🔧 Variáveis de Ambiente (Se usar EmailJS)

Na Vercel, vá em **Settings → Environment Variables**:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

Depois, faça um novo deploy.

---

## 📊 Pós-Deploy - Configurações Importantes

### 1. Google Analytics
✅ Já está configurado (G-377865447)
- Verifique se está rastreando: [analytics.google.com](https://analytics.google.com)

### 2. Google Search Console
1. Acesse: [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade (domínio)
3. Verifique a propriedade
4. Envie o sitemap: `https://seu-dominio.com.br/sitemap.xml`

### 3. Atualizar URLs

Atualize estes arquivos com seu domínio real:

**public/robots.txt** (linha 5):
```
Sitemap: https://seu-dominio-real.com.br/sitemap.xml
```

**public/sitemap.xml** (todas as URLs):
```xml
<loc>https://seu-dominio-real.com.br/</loc>
```

**app/layout.tsx** (linha 28):
```tsx
url: "https://seu-dominio-real.com.br",
```

---

## 🔍 Otimizações Pós-Deploy

### 1. Performance
- ✅ Next.js já otimiza automaticamente
- ✅ Imagens otimizadas
- ✅ Code splitting automático

### 2. SEO
- ✅ Meta tags configuradas
- ✅ Sitemap pronto
- ✅ robots.txt configurado
- ✅ Open Graph para redes sociais

### 3. Monitoramento
- Google Analytics (tráfego)
- Google Search Console (SEO)
- Vercel Analytics (performance)

---

## 📱 Testar Antes de Divulgar

### Teste em:
- [ ] Chrome Desktop
- [ ] Firefox Desktop
- [ ] Safari Desktop
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)
- [ ] Tablet

### Teste Funcionalidades:
- [ ] Menu de navegação
- [ ] Formulário de contato
- [ ] Botão WhatsApp
- [ ] Lightbox dos dashboards
- [ ] Links de redes sociais
- [ ] Banner de cookies
- [ ] Página de privacidade
- [ ] Página 404

### Ferramentas de Teste:
1. **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
2. **Mobile-Friendly Test**: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
3. **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)

---

## 🎯 Após o Deploy

### 1. Divulgar
- [ ] Adicionar no Instagram bio
- [ ] Adicionar no WhatsApp Business
- [ ] Adicionar no LinkedIn
- [ ] Adicionar no Facebook
- [ ] Cartões de visita
- [ ] Email signature

### 2. Monitorar
- Acompanhe Google Analytics diariamente (primeira semana)
- Veja quais páginas mais visitam
- Monitore conversões (formulário)

### 3. Melhorar Continuamente
- Adicione blog posts
- Crie cases de clientes
- Adicione depoimentos reais
- Atualize imagens dos dashboards

---

## 🆘 Problemas Comuns

### Deploy falhou
- ✅ Verifique se não há erros no código
- ✅ Execute `npm run build` localmente
- ✅ Veja logs na Vercel

### Site lento
- ✅ Otimize imagens
- ✅ Use WebP
- ✅ Vercel já usa CDN

### Analytics não rastreia
- ✅ Verifique ID do Google Analytics
- ✅ Aguarde 24-48h para dados
- ✅ Teste em modo anônimo

### Domínio não funciona
- ✅ Aguarde propagação DNS (24-48h)
- ✅ Verifique configuração DNS
- ✅ Use [whatsmydns.net](https://whatsmydns.net)

---

## 💰 Custos Mensais

| Item | Custo | Observação |
|------|-------|------------|
| Vercel Hosting | **R$ 0** | Grátis para sempre |
| Domínio .com.br | R$ 3-4/mês | ~R$ 40/ano |
| Google Analytics | **R$ 0** | Grátis |
| EmailJS | **R$ 0** | 200 emails/mês grátis |
| **TOTAL** | **~R$ 4/mês** | Apenas o domínio! |

---

## 📋 Checklist Final

- [ ] Deploy realizado com sucesso
- [ ] Site acessível pela URL
- [ ] Domínio configurado (se comprou)
- [ ] Google Analytics rastreando
- [ ] Search Console configurado
- [ ] Sitemap enviado ao Google
- [ ] Testado em múltiplos dispositivos
- [ ] Todas as funcionalidades OK
- [ ] Links de redes sociais atualizados
- [ ] Banner de cookies funcionando
- [ ] Política de privacidade acessível
- [ ] Formulário testado
- [ ] WhatsApp funcionando
- [ ] Dashboards carregando

---

## 🎉 Parabéns!

Seu site está no ar! 🚀

**Próximos passos:**
1. Divulgue nas redes sociais
2. Monitore o Google Analytics
3. Capture os primeiros leads
4. Cresça! 📈

---

## 📞 Suporte

Se tiver problemas:
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Comunidade: Stack Overflow

---

**Seu site está PRONTO para conquistar clientes! 💜✨**




