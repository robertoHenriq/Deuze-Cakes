// Deuze Cakes - Loja de Bolos (React + Tailwind)
// Observação: Este projeto é 100% React no frontend.
// O que NÃO é React e você precisará adicionar:
// 1) Backend (API): Node.js + Express/Nest para produtos, categorias, pedidos
// 2) Banco de dados: PostgreSQL, MySQL ou MongoDB
// 3) Autenticação: JWT / OAuth
// 4) Pagamentos: Stripe, Mercado Pago, etc
// 5) Hospedagem: Vercel/Netlify (frontend) + Render/AWS (backend)

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categorias = [
  "Bolos de Chocolate",
  "Bolos Brancos",
  "Bolos Zero Açúcar",
  "Bolos Caseiros",
];

const bolos = [
  {
    id: 1,
    nome: "Caseiro Premium Ninho com Frutas Vermelhas",
    imagem: "https://via.placeholder.com/300x300",
  },
  {
    id: 2,
    nome: "Caseiro Premium Doce de Leite com Nutella",
    imagem: "https://via.placeholder.com/300x300",
  },
  {
    id: 3,
    nome: "Bolo Caseiro de Paçoca",
    imagem: "https://via.placeholder.com/300x300",
  },
  {
    id: 4,
    nome: "Bolo Caseiro de Churros",
    imagem: "https://via.placeholder.com/300x300",
  },
];

export default function DeuzeCakes() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900">
      {/* Header */}
      <header className="bg-pink-200 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Deuze Cakes</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-pink-600">A Deuze</a>
            <a href="#" className="hover:text-pink-600">Produtos</a>
            <a href="#" className="hover:text-pink-600">Lojas</a>
            <a href="#" className="hover:text-pink-600">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-pink-300 to-pink-400">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold text-white">BOLOS</h2>
          <p className="mt-4 text-white max-w-xl">
            Deliciosamente recheados e feitos com carinho para todas as ocasiões.
          </p>
        </motion.div>
      </section>

      {/* Categorias */}
      <section className="bg-pink-300 py-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Selecione a categoria</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((cat) => (
              <Button key={cat} className="bg-pink-600 hover:bg-pink-700">
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Bolos */}
      <section className="max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bolos.map((bolo) => (
          <motion.div
            key={bolo.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-4 text-center">
                <img
                  src={bolo.imagem}
                  alt={bolo.nome}
                  className="rounded-xl mb-4"
                />
                <h4 className="font-semibold mb-3">{bolo.nome}</h4>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Eu quero
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-pink-200 py-6 text-center text-sm">
        © {new Date().getFullYear()} Deuze Cakes. Todos os direitos reservados.
      </footer>
    </div>
  );
}
