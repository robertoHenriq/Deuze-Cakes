# Deuze Cakes - Monorepo

Um monorepo moderno para a aplicação Deuze Cakes, com frontend React + Vite e backend NestJS.

## Estrutura do Projeto

```
deuze-cakes/
├─ apps/                    # Aplicações
│  ├─ web/                  # FRONTEND (React + Vite)
│  │  ├─ src/
│  │  │  ├─ assets/
│  │  │  ├─ components/
│  │  │  │  ├─ layout/
│  │  │  │  │  ├─ Header.tsx
│  │  │  │  │  └─ Footer.tsx
│  │  │  │  ├─ ui/           # shadcn/ui
│  │  │  │  ├─ cake/
│  │  │  │  │  └─ CakeCard.tsx
│  │  │  ├─ pages/
│  │  │  │  ├─ Home.tsx
│  │  │  │  ├─ Cakes.tsx
│  │  │  │  ├─ CakeDetails.tsx
│  │  │  │  ├─ Cart.tsx
│  │  │  │  └─ Checkout.tsx
│  │  │  ├─ hooks/
│  │  │  ├─ services/
│  │  │  │  └─ api.ts
│  │  │  ├─ store/           # Zustand / Redux
│  │  │  ├─ types/
│  │  │  ├─ styles/
│  │  │  ├─ App.tsx
│  │  │  └─ main.tsx
│  │  ├─ index.html
│  │  ├─ vite.config.ts
│  │  ├─ tailwind.config.ts
│  │  └─ package.json
│  │
│  ├─ api/                  # BACKEND (NestJS)
│  │  ├─ src/
│  │  │  ├─ app.module.ts
│  │  │  ├─ main.ts
│  │  │  ├─ prisma/
│  │  │  ├─ common/
│  │  │  ├─ auth/
│  │  │  ├─ users/
│  │  │  ├─ cakes/
│  │  │  ├─ categories/
│  │  │  ├─ orders/
│  │  │  ├─ payments/
│  │  │  └─ uploads/
│  │  ├─ prisma/
│  │  │  ├─ schema.prisma
│  │  │  └─ seed.ts
│  │  ├─ test/
│  │  ├─ Dockerfile
│  │  └─ nest-cli.json
│  │
├─ packages/                # Código compartilhado
│  ├─ shared-types/         # Types entre front e back
│  │  ├─ cake.ts
│  │  ├─ category.ts
│  │  ├─ order.ts
│  │  └─ user.ts
│  │
│  └─ config/               # ESLint, TS, Prettier
│
├─ infra/                   # Infraestrutura
│  ├─ docker-compose.yml
│  ├─ nginx/
│  │  └─ nginx.conf
│  └─ scripts/
│
├─ .env
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Quick Start

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
# Frontend
npm run start:web

# Backend
npm run start:api

# Ambos (em paralelo)
npm run dev
```

### Build

```bash
npm run build
```

## Workspaces

Este projeto usa NPM Workspaces. Cada aplicação e pacote pode ter suas próprias dependências.

- **apps/web**: Frontend React com Vite
- **apps/api**: Backend NestJS
- **packages/shared-types**: Tipos compartilhados TypeScript
- **packages/config**: Configurações compartilhadas (ESLint, Prettier)

## Docker

Para executar com Docker:

```bash
docker-compose -f infra/docker-compose.yml up
```

## Contribuindo

1. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
2. Commit suas mudanças: `git commit -m 'Add minha-feature'`
3. Push para a branch: `git push origin feature/minha-feature`
4. Abra um Pull Request

## Licença

MIT
