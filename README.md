# Deuze Cakes - Monorepo

Um monorepo moderno para a aplicação Deuze Cakes, com frontend React + Vite e backend NestJS.


## Quick Start

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
# Frontend e admin
npm start

# Backend
npm run start:api

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

docker-compose up -d
```

## Contribuindo

1. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
2. Commit suas mudanças: `git commit -m 'Add minha-feature'`
3. Push para a branch: `git push origin feature/minha-feature`
4. Abra um Pull Request

## Licença

MIT
