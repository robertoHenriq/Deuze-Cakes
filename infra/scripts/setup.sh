#!/bin/bash

# Deuze Cakes - Project Setup Script
# Este script configura todo o ambiente do projeto

set -e

echo "🍰 Iniciando setup do Deuze Cakes..."

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Install dependencies
echo -e "${BLUE}📦 Instalando dependências...${NC}"
npm install

# Step 2: Create uploads directory
echo -e "${BLUE}📁 Criando pasta de uploads...${NC}"
mkdir -p apps/api/public/uploads/cakes

# Step 3: Create .env files if not exists
if [ ! -f apps/api/.env ]; then
    echo -e "${BLUE}📝 Criando .env backend...${NC}"
    echo "DATABASE_URL=postgresql://user:password@localhost:5432/deuze_cakes" > apps/api/.env
fi

if [ ! -f apps/web/.env ]; then
    echo -e "${BLUE}📝 Criando .env frontend...${NC}"
    echo "VITE_API_URL=http://localhost:3000" > apps/web/.env
fi

if [ ! -f apps/admin/.env ]; then
    echo -e "${BLUE}📝 Criando .env admin...${NC}"
    echo "VITE_API_URL=http://localhost:3000" > apps/admin/.env
fi

echo -e "${GREEN}✅ Setup concluído com sucesso!${NC}"
echo ""
echo -e "${BLUE}🚀 Próximos passos:${NC}"
echo ""
echo "Terminal 1 - Backend:"
echo "  npm run start:api"
echo ""
echo "Terminal 2 - Frontend:"
echo "  npm run dev --workspace=apps/web"
echo ""
echo "Terminal 3 - Admin Panel:"
echo "  npm run dev --workspace=apps/admin"
echo ""
echo -e "${YELLOW}📍 Portas:${NC}"
echo "  Backend: http://localhost:3000"
echo "  Frontend: http://localhost:5173"
echo "  Admin: http://localhost:5175"
echo "  Docs: http://localhost:3000/docs"
