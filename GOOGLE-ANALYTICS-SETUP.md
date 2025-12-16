# 📊 Como Configurar o Google Analytics no Seu Site

## 🎯 Passo a Passo Completo

### **Etapa 1: Criar Conta no Google Analytics**

1. Acesse [https://analytics.google.com](https://analytics.google.com)
2. Faça login com sua conta Google
3. Clique em **"Começar a medir"** ou **"Criar conta"**

---

### **Etapa 2: Configurar a Propriedade**

#### 2.1 - Nome da Conta
- Nome: `AutomateAI` (ou o que preferir)
- Marque as opções de compartilhamento (recomendado)
- Clique em **"Próxima"**

#### 2.2 - Nome da Propriedade
- Nome da propriedade: `AutomateAI Website`
- Fuso horário: `(GMT-03:00) Brasília`
- Moeda: `Real brasileiro (R$)`
- Clique em **"Próxima"**

#### 2.3 - Sobre sua empresa
- Setor: `Tecnologia` ou `Serviços B2B`
- Tamanho da empresa: Escolha o seu
- Como pretende usar: Marque as opções relevantes
- Clique em **"Criar"**

#### 2.4 - Aceitar os Termos
- Aceite os Termos de Serviço
- Clique em **"Aceito"**

---

### **Etapa 3: Configurar o Fluxo de Dados**

1. Escolha a plataforma: **Web**
2. Configure o fluxo de dados da Web:
   - **URL do site**: `https://seu-dominio.com.br`
   - **Nome do fluxo**: `AutomateAI Website`
3. Clique em **"Criar fluxo"**

---

### **Etapa 4: Copiar o ID de Medição**

Você verá uma tela com informações do fluxo de dados.

**Procure por:**
```
ID de medição: G-XXXXXXXXXX
```

Exemplo: `G-ABC123DEF4` ou `G-12345ABCDE`

**COPIE ESSE ID!** Você vai precisar dele.

---

### **Etapa 5: Adicionar o ID no Site**

Abra o arquivo `app/layout.tsx` no seu projeto e encontre a linha:

```tsx
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

**SUBSTITUA** `G-XXXXXXXXXX` pelo seu ID real:

```tsx
<GoogleAnalytics gaId="G-ABC123DEF4" />
```

#### Exemplo Completo:
```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Substitua G-XXXXXXXXXX pelo seu ID */}
        <GoogleAnalytics gaId="G-1A2B3C4D5E" />
        {children}
      </body>
    </html>
  );
}
```

---

### **Etapa 6: Testar a Integração**

#### Método 1: Tempo Real no Google Analytics
1. Acesse o Google Analytics
2. Vá em **"Relatórios" → "Tempo real"**
3. Abra seu site em outra aba
4. Você deve ver **1 usuário ativo** no painel

#### Método 2: Extensão do Chrome
1. Instale: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
2. Ative a extensão
3. Abra seu site
4. Veja os eventos sendo enviados no Console (F12)

#### Método 3: Verificar no Código
1. Abra seu site
2. Pressione F12 (DevTools)
3. Vá na aba **"Network"**
4. Procure por requisições para `google-analytics.com` ou `gtag`

---

## ✅ Pronto! Google Analytics Configurado

Agora você pode acompanhar:
- 👥 **Visitantes** em tempo real
- 📊 **Páginas mais visitadas**
- 🌍 **Localização** dos usuários
- 📱 **Dispositivos** usados (mobile/desktop)
- ⏱️ **Tempo** de permanência
- 🔗 **Como** chegaram ao site
- 🎯 **Conversões** (formulário de contato)

---

## 📈 Configurações Avançadas (Opcional)

### Rastrear Cliques em Botões

Edite `components/Contact.tsx` para adicionar eventos:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Enviar evento ao Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      event_category: 'Contact',
      event_label: 'Contact Form',
    });
  }
  
  // ... resto do código
};
```

### Rastrear Cliques no WhatsApp

Em qualquer botão de WhatsApp, adicione:

```tsx
onClick={() => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'Contact',
      event_label: 'WhatsApp Button',
    });
  }
}}
```

---

## 🔒 Privacidade e LGPD

Para estar em conformidade com a LGPD, adicione:

### 1. Aviso de Cookies

Você pode adicionar um banner de cookies informando o uso do Google Analytics.

### 2. Política de Privacidade

Crie uma página com sua política de privacidade explicando:
- Que dados são coletados
- Como são usados
- Como o usuário pode desativar

### 3. Anonimizar IPs (Recomendado)

Em `components/GoogleAnalytics.tsx`, adicione:

```tsx
gtag('config', '${gaId}', {
  page_path: window.location.pathname,
  anonymize_ip: true, // Anonimizar IPs
});
```

---

## 🎯 Principais Relatórios

### 1. Tempo Real
- Veja quem está no site AGORA
- **Caminho**: Relatórios → Tempo real

### 2. Aquisição
- Como as pessoas encontram seu site
- **Caminho**: Relatórios → Aquisição → Visão geral

### 3. Engajamento
- Quais páginas são mais visitadas
- **Caminho**: Relatórios → Engajamento → Páginas e telas

### 4. Demografia
- Idade, gênero, localização
- **Caminho**: Relatórios → Usuário → Atributos demográficos

---

## 🆘 Problemas Comuns

### "Nenhum dado aparece"
- ✅ Verifique se o ID está correto (G-XXXXXXXXXX)
- ✅ Aguarde 24-48h para dados completos
- ✅ Teste em modo de navegação anônima
- ✅ Desative AdBlockers

### "Property ID not found"
- ✅ ID errado - verifique no Google Analytics
- ✅ Copie exatamente como está (com G-)

### "Data layer not found"
- ✅ Componente GoogleAnalytics não foi importado
- ✅ Verifique o arquivo layout.tsx

---

## 📱 Versão Mobile do Google Analytics

Baixe o app para acompanhar no celular:
- [iOS](https://apps.apple.com/app/google-analytics/id881599038)
- [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.giant)

---

## 🎓 Recursos para Aprender Mais

- [Documentação Oficial](https://support.google.com/analytics)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [Curso Gratuito Google](https://skillshop.withgoogle.com/)

---

## 📋 Checklist Final

- [ ] Conta Google Analytics criada
- [ ] Propriedade configurada
- [ ] ID de medição copiado (G-XXXXXXXXXX)
- [ ] ID adicionado em `app/layout.tsx`
- [ ] Site testado no modo Tempo Real
- [ ] Dados aparecendo no painel
- [ ] Eventos personalizados configurados (opcional)
- [ ] Política de privacidade criada (recomendado)

---

**Dúvidas? É só me chamar! 📊✨**

