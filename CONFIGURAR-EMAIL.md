# 📧 Como Configurar o Envio de Emails no Formulário

## 🎯 O Que Foi Implementado

Agora o formulário tem **2 OPÇÕES**:
1. ✉️ **Enviar por Email** - Recebe no email: automateai@workflown8n.com.br
2. 💬 **Enviar por WhatsApp** - Abre o WhatsApp com mensagem pronta

---

## 🚀 Como Ativar o Envio por Email (EmailJS)

### **Passo 1: Criar Conta no EmailJS**

1. Acesse: [https://www.emailjs.com](https://www.emailjs.com)
2. Clique em **"Sign Up"** (Cadastrar)
3. Use seu Google ou crie uma conta
4. Confirme o email

**Plano Grátis:**
- ✅ 200 emails/mês
- ✅ Sem cartão de crédito
- ✅ Totalmente gratuito

---

### **Passo 2: Conectar seu Email**

1. No dashboard, clique em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor:
   - **Gmail** (recomendado)
   - Outlook
   - Yahoo
   - Outros

#### Para Gmail:
1. Selecione **"Gmail"**
2. Clique em **"Connect Account"**
3. Faça login com: **automateai@workflown8n.com.br** (ou seu email)
4. Autorize o EmailJS
5. Clique em **"Create Service"**

**IMPORTANTE:** Copie o **Service ID** (algo como `service_abc123`)

---

### **Passo 3: Criar Template de Email**

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure:

#### **Template Settings:**
- **Template Name**: `Contato Site AutomateAI`

#### **Content:**
Cole este template:

```
De: {{from_name}}
Email: {{from_email}}
Telefone: {{from_phone}}

Serviço de Interesse: {{service}}

Mensagem:
{{message}}

---
Enviado pelo formulário do site AutomateAI
```

#### **Subject (Assunto):**
```
🔔 Novo Contato - {{from_name}} | AutomateAI
```

#### **To Email:**
```
{{to_email}}
```

4. Clique em **"Save"**
5. **COPIE O TEMPLATE ID** (algo como `template_xyz789`)

---

### **Passo 4: Pegar a Public Key**

1. Vá em **"Account"** (canto superior direito)
2. Vá em **"General"**
3. Encontre **"Public Key"**
4. **COPIE A PUBLIC KEY** (algo como `xYz1234AbC-De567`)

---

### **Passo 5: Adicionar no Código**

Abra o arquivo `components/Contact.tsx` e encontre as linhas **29-31**:

```tsx
const result = await emailjs.send(
  'SEU_SERVICE_ID',     // <- SUBSTITUA AQUI
  'SEU_TEMPLATE_ID',    // <- SUBSTITUA AQUI
  {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    service: formData.service,
    message: formData.message,
    to_email: 'automateai@workflown8n.com.br',
  },
  'SUA_PUBLIC_KEY'      // <- SUBSTITUA AQUI
);
```

#### Exemplo Preenchido:
```tsx
const result = await emailjs.send(
  'service_abc123',           // Service ID
  'template_xyz789',          // Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    service: formData.service,
    message: formData.message,
    to_email: 'automateai@workflown8n.com.br',
  },
  'xYz1234AbC-De567'          // Public Key
);
```

---

### **Passo 6: Testar!**

1. Salve o arquivo
2. Abra seu site
3. Vá na seção "Entre em Contato"
4. **Selecione "Email"**
5. Preencha o formulário
6. Clique em "Enviar por Email"
7. Aguarde a mensagem de sucesso ✅
8. **Verifique seu email!** 📬

---

## 🎨 Como Funciona Agora

### Interface Atualizada:

1. **Escolher método:**
   - 2 botões: Email ou WhatsApp
   - Visual indica qual está selecionado

2. **Feedback visual:**
   - ✅ Mensagem de sucesso (verde)
   - ❌ Mensagem de erro (vermelha)
   - ⏳ Loading ao enviar

3. **Botão dinâmico:**
   - Muda de cor conforme o método
   - Mostra "Enviando..." com spinner
   - Desabilita durante envio

---

## 📊 Vantagens de Cada Método

### Email:
- ✅ Registro formal da conversa
- ✅ Organização em pastas
- ✅ Histórico completo
- ✅ Pode anexar arquivos depois
- ✅ Profissional

### WhatsApp:
- ✅ Resposta mais rápida
- ✅ Conversa em tempo real
- ✅ Cliente já tem instalado
- ✅ Informal e direto
- ✅ Áudio/vídeo depois

---

## 🔧 Personalização

### Mudar o email de destino:

Em `components/Contact.tsx`, linha 38:
```tsx
to_email: 'seunovo@email.com',  // <- Mude aqui
```

### Mudar template do email:

No EmailJS, edite o template com HTML:
```html
<h2>Novo Contato - AutomateAI</h2>
<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{from_phone}}</p>
<p><strong>Serviço:</strong> {{service}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>
```

---

## 🆘 Problemas Comuns

### "Failed to send email"
- ✅ Verifique os IDs (Service, Template, Public Key)
- ✅ Confirme que o email está conectado no EmailJS
- ✅ Verifique a cota (200 emails/mês no grátis)

### Email não chega
- ✅ Verifique spam/lixeira
- ✅ Confirme o email no EmailJS
- ✅ Teste com outro email

### "Quota exceeded"
- ✅ Atingiu 200 emails/mês
- ✅ Aguarde o próximo mês ou faça upgrade

---

## 💡 Dicas Pro

### 1. Resposta Automática
No EmailJS, crie um segundo template para responder automaticamente ao cliente:
- "Obrigado pelo contato! Retornaremos em breve."

### 2. Notificação no Celular
- Ative notificações push do email no celular
- Use apps como Gmail, Outlook

### 3. Integrar com CRM
- Zapier + EmailJS
- Automatize para Google Sheets
- Integre com Notion, Trello, etc.

### 4. Backup WhatsApp
Mesmo usando email, mantenha WhatsApp como opção backup!

---

## 📋 Checklist

- [ ] Conta EmailJS criada
- [ ] Gmail conectado
- [ ] Service ID copiado
- [ ] Template criado
- [ ] Template ID copiado
- [ ] Public Key copiada
- [ ] IDs adicionados no código
- [ ] Testado com sucesso
- [ ] Email recebido
- [ ] Verificado spam

---

## 🎓 Recursos

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Vídeo Tutorial](https://www.youtube.com/results?search_query=emailjs+tutorial)
- [Suporte EmailJS](https://www.emailjs.com/support/)

---

## 🚀 Próximos Passos (Opcional)

Posso te ajudar a configurar:
1. **Webhook** - Notificação instantânea
2. **Google Sheets** - Salvar contatos em planilha
3. **Telegram Bot** - Receber no Telegram
4. **Discord Webhook** - Notificação no Discord

---

**Seu formulário agora é profissional! 📧✨**

Qualquer dúvida, é só chamar! 😊










