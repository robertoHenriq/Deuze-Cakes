# Guia de Desenvolvimento - Deuze Cakes

## Estrutura do Projeto

Este é um monorepo que contém:
- **apps/web**: Frontend React + Vite
- **apps/api**: Backend NestJS
- **packages/shared-types**: Tipos TypeScript compartilhados
- **packages/config**: Configurações compartilhadas

## Requisitos

- Node.js 18+
- npm 9+
- Docker & Docker Compose (para rodar com containers)

## Configuração Inicial

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar banco de dados
cd apps/api
npm run prisma:generate
npm run prisma:migrate
```

## Desenvolvimento

### Frontend

```bash
# Terminal 1: Rodar frontend
npm run start:web
# Acesse: http://localhost:5173
```

### Backend

```bash
# Terminal 2: Rodar backend
npm run start:api
# Acesse: http://localhost:3000
```

### Ambos em Paralelo

```bash
npm run dev
```

## Estrutura de Pastas

### Frontend (apps/web/src)

```
src/
├── assets/          # Imagens, ícones, fontes
├── components/
│   ├── layout/      # Header, Footer, Sidebar
│   ├── ui/          # shadcn/ui components
│   └── cake/        # Componentes específicos
├── pages/           # Páginas da aplicação
├── hooks/           # Hooks customizados
├── services/        # Chamadas de API
├── store/           # Zustand/Redux state management
├── types/           # Types locais
├── styles/          # Estilos globais
├── App.tsx
└── main.tsx
```

### Backend (apps/api/src)

```
src/
├── auth/            # Autenticação
├── users/           # Gerenciamento de usuários
├── cakes/           # Gerenciamento de bolos
├── categories/      # Categorias
├── orders/          # Pedidos
├── payments/        # Pagamentos
├── uploads/         # Upload de arquivos
├── common/
│   ├── decorators/  # Decoradores customizados
│   ├── filters/     # Exception filters
│   ├── guards/      # Guards de autenticação
│   └── interceptors/# Interceptors
├── prisma/          # Prisma ORM
├── app.module.ts
└── main.ts
```

## Tipos Compartilhados

Os tipos em `packages/shared-types/` devem ser usados tanto no frontend quanto no backend para garantir consistência.

```typescript
// Exemplo de uso
import { Cake, User } from '@shared/types';
```

## Comandos Importantes

### Frontend

```bash
npm run dev:web           # Desenvolvimento
npm run build:web         # Build para produção
npm run lint:web          # ESLint
npm run format:web        # Prettier
```

### Backend

```bash
npm run start:api         # Desenvolvimento
npm run build:api         # Build
npm run prisma:generate   # Gerar Prisma Client
npm run prisma:migrate    # Executar migrations
npm run prisma:seed       # Seed do banco
npm run test              # Testes
```

## Git Workflow

1. Crie uma branch: `git checkout -b feature/nome-da-feature`
2. Faça seus commits: `git commit -m 'feat: descrição'`
3. Push: `git push origin feature/nome-da-feature`
4. Abra um Pull Request

## Convenções de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de build, dependências

## Docker

```bash
# Build e inicia todos os serviços
docker-compose -f infra/docker-compose.yml up -d

# Ver logs
docker-compose -f infra/docker-compose.yml logs -f

# Parar serviços
docker-compose -f infra/docker-compose.yml down
```

## Variáveis de Ambiente

Consulte `.env.example` para todas as variáveis disponíveis.

```
BACKEND_PORT=3000
DATABASE_URL=postgresql://...
JWT_SECRET=seu_secret
VITE_API_URL=http://localhost:3000
```

## Troubleshooting

### Porta em uso
Se a porta 3000 ou 5173 estiver em uso:

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Limpar cache
```bash
rm -rf node_modules package-lock.json
npm install
```

### Prisma issues
```bash
npm run prisma:generate
npm run prisma:migrate reset
```

## Recursos

- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
