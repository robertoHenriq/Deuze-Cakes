# Deuze Cakes - Backend (NestJS + Prisma + PostgreSQL)

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 16+
- npm ou yarn
- Docker e Docker Compose (para Postgres)
- VS Code (opcional, mas recomendado)

### 1. Abrir o workspace no VS Code

**Importante:** Para que o VS Code reconheça corretamente os imports e tipos:

1. Abra VS Code
2. **File → Open Folder** (ou `Ctrl+K Ctrl+O`)
3. Navegue até `C:\Users\jose roberto\Documents\deuze\deuze-backend`
4. Selecione a pasta `deuze-backend` e clique em "Select Folder"
5. Aguarde o VS Code indexar (você verá "Pyright Language Server" ou TypeScript iniciando)
6. Pronto! Os imports `@nestjs/*` serão reconhecidos

### 2. Instalar dependências

```bash
cd deuze-backend
npm install
```

### 3. Configurar banco de dados

#### Via Docker Compose (recomendado)

```bash
docker-compose up -d db
```

Isso inicia o Postgres em `localhost:5432` com credenciais:
- User: `deuze`
- Password: `deuze123`
- Database: `deuze`

#### Via Prisma (migrate + seed)

```bash
npx prisma migrate dev --name init
npm run prisma:seed
```

### 4. Iniciar a API em desenvolvimento

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3333`

- **Swagger Docs:** http://localhost:3333/docs
- **Health Check:** http://localhost:3333/api (base)

---

## 📋 Estrutura do Projeto

```
src/
├── main.ts                  # Bootstrap da aplicação
├── app.module.ts           # Módulo raiz
├── prisma/
│   ├── prisma.service.ts   # Serviço Prisma
│   └── prisma.module.ts    # Módulo Prisma
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── dto/login.dto.ts
│   └── strategies/jwt.strategy.ts
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│   └── dto/create-user.dto.ts
└── common/
    ├── decorators/roles.decorator.ts
    ├── guards/
    │   ├── jwt-auth.guard.ts
    │   └── roles.guard.ts
    └── filters/http-exception.filter.ts

prisma/
├── schema.prisma           # Schema do banco
└── seed.ts                # Script de seed

```

---

## 🔑 Endpoints Disponíveis

### Autenticação

**POST** `/auth/login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
Retorna: `{ "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }`

### Usuários

**POST** `/users/register`
```json
{
  "email": "newuser@example.com",
  "password": "password123"
}
```
Retorna: `{ "id": 1, "email": "newuser@example.com" }`

---

## 🛠️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL=postgresql://deuze:deuze123@localhost:5432/deuze
JWT_SECRET=supersecret
```

Para produção, use credenciais seguras.

---

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run start:dev` | Inicia a API em desenvolvimento (com reload automático) |
| `npm run build` | Compila TypeScript para `dist/` |
| `npm run prisma:migrate` | Executa migrations do Prisma |
| `npm run prisma:seed` | Executa script de seed |

---

## 🐳 Docker Compose

Para levantar a API + banco de dados em contêineres:

```bash
docker-compose up --build
```

Isso inicia:
- **db** (Postgres 15) em `localhost:5432`
- **api** (NestJS) em `localhost:3333`

---

## 🧪 Testes

Teste rapidamente com curl:

```bash
# Registrar novo usuário
curl -X POST http://localhost:3333/users/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"secret123"}'

# Fazer login
curl -X POST http://localhost:3333/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"secret123"}'
```

---

## 🔒 Segurança

- Senhas são hasheadas com **bcrypt** (salt rounds: 10)
- JWT signed com `JWT_SECRET` (expiração: 7 dias)
- CORS habilitado para `*` (em produção, restringir)
- Helmet para headers de segurança HTTP

---

## 🚦 Próximos Passos

- [ ] Implementar módulos `categories`, `cakes`, `orders`, `payments`
- [ ] Adicionar autenticação com roles (ADMIN, USER)
- [ ] Integrar pagamento (Pix, Cartão)
- [ ] Testes unitários/e2e
- [ ] Deploy em produção

---

## 💡 Dúvidas?

Se os imports ainda não forem reconhecidos:
1. Feche VS Code
2. Delete a pasta `.vscode/`
3. Abra `deuze-backend` como pasta raiz no VS Code (não como subpasta de `deuze`)
4. Aguarde o IntelliSense indexar (~30s)

Pronto! 🎉
