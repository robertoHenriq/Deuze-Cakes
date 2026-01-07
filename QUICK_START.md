# 🚀 GUIA RÁPIDO - PRIMEIROS PASSOS

## ⏱️ 5 minutos para começar

### Passo 1: Instalar Dependências (2 min)

```bash
cd C:\Users\jose roberto\Documents\deuze
npm install
```

**O que acontece:**
- Instala todas as dependências do monorepo
- Configura workspaces (frontend, backend, packages)
- Pronto para desenvolvimento

### Passo 2: Configurar Ambiente (1 min)

```bash
# Copiar template de variáveis
cp .env.example .env

# Abrir .env e verificar:
VITE_API_URL=http://localhost:3000
```

### Passo 3: Escolher o que rodar (2 min)

#### Opção A: Apenas Frontend
```bash
npm run start:web
# Acesse: http://localhost:5173
```

#### Opção B: Apenas Backend
```bash
npm run start:api
# Acesse: http://localhost:3000
```

#### Opção C: Frontend + Backend (RECOMENDADO)
```bash
npm run dev
# Frontend: http://localhost:5173
# Backend:  http://localhost:3000
```

#### Opção D: Com Docker
```bash
docker-compose -f infra/docker-compose.yml up
# Todos os serviços rodando em containers
```

---

## 📁 Arquivos Importantes

Abra estes arquivos no VS Code para entender o projeto:

```
VS Code → File → Open Folder
→ C:\Users\jose roberto\Documents\deuze
```

### Documentação (LEIA PRIMEIRO)
1. **README.md** - Overview geral (5 min)
2. **DEVELOPMENT.md** - Guia completo (10 min)
3. **FRONTEND_REAJUSTE_MONOREPO.md** - Frontend em detalhes (5 min)

### Arquivos de Configuração
- **package.json** (raiz) - Scripts e workspaces
- **apps/web/package.json** - Frontend específico
- **apps/web/.env** - Variáveis do frontend
- **tsconfig.json** - TypeScript base

### Código Fonte
- **apps/web/src/App.tsx** - Componente raiz
- **apps/web/src/components/** - Componentes React
- **apps/web/src/services/api.ts** - Cliente HTTP
- **packages/shared-types/** - Tipos compartilhados

---

## 🔧 Comandos Úteis

### Frontend (apps/web)
```bash
npm run dev              # Dev server
npm run build            # Build para produção
npm run preview          # Preview do build
npm run type-check       # Verificar tipos TypeScript
npm run lint             # ESLint
```

### Backend (apps/api)
```bash
npm run start:api        # Dev server
npm run build            # Build
npm run test             # Testes
npm run prisma:generate  # Gerar Prisma Client
npm run prisma:migrate   # Executar migrations
```

### Raiz (Monorepo)
```bash
npm run dev              # Frontend + Backend
npm run start:web        # Apenas Frontend
npm run start:api        # Apenas Backend
npm run build            # Build ambos
```

---

## 🎨 Estrutura do Frontend (apps/web/src)

```
src/
├── components/           # Componentes React
│   ├── layout/          # Header, Footer
│   ├── cake/            # CakeCard
│   └── ui/              # Buttons, Cards
│
├── pages/               # Páginas completas
│   └── Cakes.tsx        # Página de bolos
│
├── services/            # Serviços (API)
│   └── api.ts           # Cliente HTTP
│
├── App.tsx              # Componente raiz
├── main.tsx             # Entry point
└── index.css            # Estilos globais
```

### Como Usar Path Aliases

```typescript
// ✅ BOM: Usar aliases
import { api } from '@/services/api'
import { Header } from '@/components/layout/Header'
import { Cake } from '@shared/types'

// ❌ RUIM: Usar paths relativos
import { api } from '../../../services/api'
```

---

## 🤝 Integração Frontend ↔ Backend

### 1. Frontend faz requisição

```typescript
// apps/web/src/pages/Cakes.tsx
const response = await api.get('/cakes')
// URL completa: http://localhost:3000/api/cakes
```

### 2. Backend responde

```typescript
// apps/api/src/main.ts
// Servidor rodando em http://localhost:3000
```

### 3. Variável de Ambiente

```bash
# apps/web/.env
VITE_API_URL=http://localhost:3000
```

---

## 🐛 Troubleshooting

### Porta já está em uso

```bash
# Windows - Encontrar processo na porta
netstat -ano | findstr :5173

# Matar o processo
taskkill /PID <PID> /F
```

### Módulos não encontrados

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### API não conecta

Verificar em ordem:
1. ✅ Backend está rodando: `npm run start:api`
2. ✅ Frontend vê a URL: `apps/web/.env` → `VITE_API_URL=http://localhost:3000`
3. ✅ CORS está ativado no backend
4. ✅ Endpoint existe: `GET /api/cakes`

### TypeScript errors

```bash
# Verificar tipos
npm run type-check

# Não deixa compilar? Reiniciar VS Code
Ctrl + Shift + P → "TypeScript: Reload Project"
```

---

## 📊 Próximas Ações

### Curto Prazo (Esta semana)
1. ✅ Instalar e rodar projeto
2. ✅ Explorar componentes existentes
3. ✅ Testar integração frontend-backend
4. ✅ Ler documentação

### Médio Prazo (Próximas semanas)
1. Adicionar mais páginas em `src/pages/`
2. Criar mais componentes em `src/components/`
3. Implementar state management (`src/store/`)
4. Adicionar validação de formulários

### Longo Prazo (Próximos meses)
1. Adicionar testes (Vitest, Cypress)
2. Melhorar performance (code splitting, lazy loading)
3. Implementar PWA (Progressive Web App)
4. Deploy em produção

---

## 📚 Recursos Úteis

### Documentação Oficial
- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Axios](https://axios-http.com/docs/intro)

### Projeto Local
- `README.md` - Overview
- `DEVELOPMENT.md` - Guia completo
- `apps/web/README.md` - Frontend específico
- `FRONTEND_REAJUSTE_MONOREPO.md` - Detalhes da migração

---

## ✨ Resumo

| O que | Como | Onde |
|------|------|------|
| **Rodar Frontend** | `npm run start:web` | http://localhost:5173 |
| **Rodar Backend** | `npm run start:api` | http://localhost:3000 |
| **Rodar Ambos** | `npm run dev` | Ambos acima |
| **Criar Componente** | Adicionar em `src/components/` | `apps/web/src/components/` |
| **Criar Página** | Adicionar em `src/pages/` | `apps/web/src/pages/` |
| **Compartilhar Type** | Adicionar em packages | `packages/shared-types/` |
| **Chamar API** | Usar `api` de `@/services/api` | `apps/web/src/services/api.ts` |

---

## 🎉 Pronto!

Você está pronto para começar a desenvolver. 

**Próximo comando:**
```bash
npm install && npm run dev
```

Boa sorte! 🚀

---

**Última atualização:** 07/01/2026
