# E-commerce Project

Este é um projeto de E-commerce moderno desenvolvido com as tecnologias mais recentes do ecossistema React. O projeto utiliza a arquitetura App Router do Next.js, estilização com Tailwind CSS v4 e validação robusta de dados.

## 🚀 Tecnologias

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI/Core:** [React 19](https://react.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Validação:** [Zod](https://zod.dev/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Requisições:** [Axios](https://axios-http.com/)
- **Gerenciamento de Imagens:** Cloudinary
- **Linting & Formatação:** [Biome](https://biomejs.dev/)
- **Git Hooks:** Husky & Lint-staged

## ✨ Funcionalidades

- **Autenticação:**
  - Login e Registro de usuários.
  - Gerenciamento de sessão via Cookies/JWT.
- **Produtos:**
  - Listagem de produtos.
  - Página de detalhes do produto.
  - Criação de novos produtos (Admin).
- **Carrinho de Compras:**
  - Adição e remoção de itens.
  - Drawer (gaveta) lateral para visualização rápida.
- **Usuário:**
  - Perfil do usuário.
- **Qualidade de Código:**
  - Verificação automática de linting e formatação antes dos commits.

## 📦 Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone <seu-repositorio-url>
   cd e-commerce
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto (baseado no `.env.example` se houver) e configure suas chaves (ex: API URL, Cloudinary, etc).

4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção.
- `npm run start`: Inicia o servidor em modo de produção.
- `npm run lint`: Verifica erros de linting com Biome.
- `npm run format`: Formata o código automaticamente com Biome.

## 📂 Estrutura de Pastas

```
src/
├── app/             # Rotas e Páginas (Next.js App Router)
├── components/      # Componentes Reutilizáveis (UI)
├── lib/             # Configurações de API e Autenticação
├── styles/          # Estilos globais e específicos
├── types/           # Interfaces e Tipos TypeScript
└── utils/           # Funções utilitárias
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.