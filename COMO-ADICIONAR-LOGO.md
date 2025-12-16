# 🎨 Como Adicionar Sua Logo ao Site

## 📁 Preparação da Logo

### Formatos Recomendados
1. **SVG** (melhor opção) - Escalável e pequeno
2. **PNG** com fundo transparente
3. **WebP** (moderna e otimizada)

### Tamanhos Recomendados
- **Header/Hero**: 400x100px ou 500x125px
- **Favicon**: 32x32px, 48x48px, 180x180px

## 🖼️ Opção 1: Logo no Hero (Recomendado)

Sua logo já está no design como texto. Para usar uma imagem:

### Passo 1: Adicione a logo na pasta public
```
automateai/
  public/
    logo.svg      <- Sua logo principal
    logo-white.svg <- Versão branca (se necessário)
```

### Passo 2: Atualize o Hero

Abra `components/Hero.tsx` e substitua a seção do logo (linhas ~34-43):

**ANTES:**
```tsx
<div className="inline-block">
  <h1 className="text-6xl md:text-8xl font-bold mb-2">
    <span className="bg-linear-to-r from-purple-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
      AutomateAI
    </span>
  </h1>
  <p className="text-xl md:text-2xl text-gray-400 tracking-widest uppercase">
    Tech Solutions
  </p>
</div>
```

**DEPOIS:**
```tsx
import Image from 'next/image';

// No componente:
<div className="inline-block">
  <Image
    src="/logo.svg"
    alt="AutomateAI Logo"
    width={500}
    height={125}
    priority
    className="mb-4"
  />
  <p className="text-xl md:text-2xl text-gray-400 tracking-widest uppercase text-center">
    Tech Solutions
  </p>
</div>
```

## 🎯 Opção 2: Favicon (Ícone do Navegador)

### Método Simples
Substitua o arquivo `app/favicon.ico` com seu favicon.

### Método Completo (Múltiplos Tamanhos)

1. Crie favicons em diferentes tamanhos usando [realfavicongenerator.net](https://realfavicongenerator.net/)

2. Coloque os arquivos em `app/`:
```
app/
  favicon.ico
  apple-touch-icon.png
  favicon-32x32.png
  favicon-16x16.png
```

3. Adicione no `app/layout.tsx`:
```tsx
export const metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
```

## 📱 Opção 3: Logo no Footer

Para adicionar logo no footer, edite `components/Footer.tsx` (linha ~58):

**ANTES:**
```tsx
<h3 className="text-3xl font-bold mb-4">
  <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
    AutomateAI
  </span>
</h3>
```

**DEPOIS:**
```tsx
<Image
  src="/logo.svg"
  alt="AutomateAI"
  width={200}
  height={50}
  className="mb-4"
/>
```

## 🎨 Dicas de Design

### Se sua logo tem cores
Use a versão colorida normal.

### Se sua logo é escura
Para fundos escuros, você pode:
1. Criar uma versão branca/clara da logo
2. Usar filtro CSS:
```tsx
<Image
  src="/logo.svg"
  alt="AutomateAI"
  width={500}
  height={125}
  className="brightness-0 invert"  // Inverte as cores
/>
```

### Para logo com gradiente
Se sua logo já tem o gradiente roxo-ciano, basta usar a logo diretamente!

## 🔧 Otimização

### Para SVG
```bash
# Instale svgo
npm install -g svgo

# Otimize o SVG
svgo logo.svg -o logo-optimized.svg
```

### Para PNG
Use ferramentas como:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

### Para converter para WebP
```bash
# Instale sharp
npm install sharp

# Crie um script em scripts/convert-logo.js
const sharp = require('sharp');

sharp('public/logo.png')
  .webp({ quality: 90 })
  .toFile('public/logo.webp');
```

## 📏 Ajustando Tamanhos

Se a logo ficar muito grande ou pequena, ajuste width e height:

```tsx
// Pequena
<Image src="/logo.svg" width={300} height={75} />

// Média (recomendado)
<Image src="/logo.svg" width={400} height={100} />

// Grande
<Image src="/logo.svg" width={500} height={125} />
```

## 🎭 Logo Responsiva

Para tamanhos diferentes em mobile e desktop:

```tsx
<Image
  src="/logo.svg"
  alt="AutomateAI"
  width={500}
  height={125}
  className="w-64 md:w-96 lg:w-[500px] h-auto"
/>
```

## ✅ Checklist

- [ ] Logo em formato SVG ou PNG transparente
- [ ] Logo otimizada (< 100KB)
- [ ] Logo colocada em `public/`
- [ ] Código atualizado em `Hero.tsx`
- [ ] Favicon atualizado
- [ ] Testado no navegador
- [ ] Logo visível em mobile
- [ ] Logo com bom contraste no fundo escuro

## 🆘 Problemas Comuns

### Logo não aparece
- Verifique se o arquivo está em `public/`
- Verifique o nome do arquivo (case-sensitive)
- Limpe o cache: Ctrl+Shift+R

### Logo muito grande
- Ajuste os valores de width/height
- Use className para controle responsivo

### Logo com fundo branco
- Exporte com fundo transparente
- Use formato PNG ou SVG

### Logo desfocada
- Use SVG para melhor qualidade
- Ou PNG em alta resolução (2x o tamanho exibido)

---

**Precisa de ajuda?** Consulte a documentação do [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)

