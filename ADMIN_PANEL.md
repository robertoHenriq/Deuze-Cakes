# 🎂 Painel Administrativo - Deuze Cakes

## ✅ O Que Foi Criado

Painel administrativo completo para gerenciar bolos com:

- **📸 Upload de Imagem** - Salva no backend em `/uploads/cakes`
- **📝 Dados do Bolo** - Nome, descrição e preço
- **🗑️ Deletar Bolos** - Remove do banco e da pasta de uploads
- **📋 Listagem** - Grid responsivo com preview das imagens

## 🚀 Como Usar

### Terminal 1 - Backend
```bash
npm run start:api
```
Roda em: **http://localhost:3333**

### Terminal 2 - Frontend
```bash
npm run dev --workspace=apps/web
```
Roda em: **http://localhost:5174**

### Terminal 3 - Admin Panel
```bash
npm run dev --workspace=apps/admin
```
Roda em: **http://localhost:5175**

## 📁 Estrutura do Admin

```
apps/admin/
├─ src/
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ AdminHeader.tsx      (Cabeçalho com título)
│  │  │  └─ AdminLayout.tsx      (Layout wrapper)
│  │  └─ cake/
│  │     └─ CakeForm.tsx         (Formulário com upload)
│  ├─ pages/
│  │  └─ CakesAdmin.tsx          (CRUD completo)
│  ├─ services/
│  │  └─ api.ts                  (Cliente Axios)
│  ├─ App.tsx                    (Root component)
│  ├─ main.tsx                   (Entry point)
│  └─ index.css                  (Tailwind)
├─ public/
├─ index.html
├─ vite.config.js
├─ tailwind.config.cjs
└─ package.json
```

## 🔌 Backend Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/cakes` | Lista todos os bolos |
| POST | `/cakes/admin` | Cria novo bolo (multipart/form-data) |
| DELETE | `/cakes/admin/:id` | Deleta bolo por ID |

### Exemplo de POST `/cakes/admin`

```bash
curl -X POST http://localhost:3333/cakes/admin \
  -F "name=Bolo de Chocolate" \
  -F "description=Delicioso bolo de chocolate" \
  -F "price=45.90" \
  -F "image=@bolo.jpg"
```

## 📦 Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Estilo**: Tailwind CSS
- **HTTP**: Axios
- **Upload**: Multer (backend)
- **Backend**: NestJS + Prisma

## ✨ Features Implementadas

✅ Form com preview de imagem  
✅ Upload de arquivo com Multer  
✅ Listagem com grid responsivo  
✅ Deletar com confirmação  
✅ Integração com shared-types  
✅ CORS habilitado no backend  
✅ Pasta de uploads criada  
✅ Serve Static para servir imagens  

## 🎯 Próximos Passos (Opcional)

- [ ] Adicionar edição de bolos
- [ ] Autenticação para admin
- [ ] Upload em S3/CDN
- [ ] Filtros e busca
- [ ] Dashboard com estatísticas
- [ ] Categorização automática

---

**Acesse o admin em:** http://localhost:5175
