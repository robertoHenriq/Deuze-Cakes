# Admin Panel - Deuze Cakes

Painel administrativo para gerenciar bolos (criar, listar e deletar).

## Features

- 📸 Upload de imagem do bolo
- 📝 Nome e descrição
- 💰 Preço
- 🗑️ Deletar bolos
- 📋 Listagem com preview

## Scripts

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview do build
```

## Portas

- Admin Panel: http://localhost:5175

## Integração

O painel se conecta ao backend em `http://localhost:3333` e usa os endpoints:
- `GET /cakes` - Listar bolos
- `POST /admin/cakes` - Criar bolo (multipart/form-data)
- `DELETE /admin/cakes/:id` - Deletar bolo
