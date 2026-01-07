# Deuze Cakes - Frontend

Frontend moderno da aplicação Deuze Cakes, construído com React, Vite e TypeScript.

## 🚀 Requisitos

- Node.js 18+
- npm 9+

## 📦 Instalação

```bash
npm install
```

## 🏃 Execução

### Desenvolvimento

```bash
npm run dev
```

Frontend será executado em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Componentes de layout (Header, Footer)
│   ├── ui/              # Componentes UI reutilizáveis
│   └── cake/            # Componentes específicos de bolos
├── pages/               # Páginas da aplicação
├── services/            # Serviços (API calls)
├── App.tsx              # Componente raiz
├── main.tsx             # Entry point
└── index.css            # Estilos globais
```

## 🔧 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

## 🎯 Componentes Principais

### Header
- Navegação principal
- Logo da marca

### Footer
- Copyright e informações

### CakeCard
- Exibição individual de bolo
- Imagem, nome e botão de ação

### Cakes (Página)
- Grid de bolos
- Fetch de dados do backend

## 🔗 Variáveis de Ambiente

```
VITE_API_URL=http://localhost:3000
```

## 📝 Scripts

```bash
npm run dev          # Desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificar linting
npm run type-check   # Verificar types
```

## 🤝 Integração com o Backend

O frontend se comunica com o backend via API REST:

- `VITE_API_URL` define a URL base da API
- Endpoint padrão: `GET /cakes` para listar bolos

## 📚 Path Aliases

Para simplificar imports:

```typescript
// ❌ Evitar
import Header from '../../../components/layout/Header'

// ✅ Usar
import { Header } from '@/components/layout/Header'
```

Aliases disponíveis:
- `@/*` → `src/*`
- `@shared/*` → `packages/shared-types/*`

## 🐛 Troubleshooting

### Porta 5173 em uso

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5173
kill -9 <PID>
```

### Limpar cache

```bash
rm -rf node_modules package-lock.json
npm install
```

### API não conecta

Verificar:
1. Backend está rodando em `http://localhost:3000`
2. CORS está configurado no backend
3. Variável `VITE_API_URL` está correta em `.env`

## 📞 Suporte

Para dúvidas ou problemas, consulte a [documentação principal](../../../README.md) e o [guia de desenvolvimento](../../../DEVELOPMENT.md).
