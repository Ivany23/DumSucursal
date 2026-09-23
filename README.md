# DUM Sociedade Lda — Website Institucional & Catálogo Digital

Website oficial institucional e catálogo moderno de produtos da **DUM Sociedade Lda**, concebido para clientes grossistas e retalhistas em Moçambique.

---

## 🚀 Tecnologias

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/) & [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Otimização**: Imagens responsivas em formatos modernos (AVIF / WebP) e SSG (Static Site Generation)

---

## 🛠️ Execução Local

1. Instalar as dependências:
```bash
npm install
```

2. Executar o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abrir no navegador: [http://localhost:3000](http://localhost:3000)

4. Testar a compilação de produção:
```bash
npm run build
```

---

## ☁️ Deploy no Vercel (Recomendado)

O projeto está 100% configurado para a Vercel seguindo as melhores práticas oficiais da Next.js:

1. **Importação Direta**:
   - Conecte o repositório Git ao painel da [Vercel](https://vercel.com/new).
   - O framework **Next.js** é detectado automaticamente com as configurações padrão:
     - **Build Command**: `next build` (ou `npm run build`)
     - **Output Directory**: `.next`
     - **Install Command**: `npm install`
2. **Variáveis de Ambiente**:
   - Este projeto opera de forma estática e autônoma, dispensando variáveis de ambiente obrigatórias para o deploy inicial.
3. **Desempenho & Segurança**:
   - Headers de segurança HTTP (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) ativados.
   - Geração estática (SSG) de todas as rotas e fichas de produtos para entrega ultrarrápida via CDN global Vercel Edge Network.
