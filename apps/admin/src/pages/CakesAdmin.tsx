import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { CakeDTO } from "../../../../packages/shared-types/cake";
import { CakeForm } from "@/components/cake/CakeForm";

export function CakesAdmin() {
  const [cakes, setCakes] = useState<CakeDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function loadCakes() {
    try {
      setError("");
      const res = await api.get("/cakes");
      setCakes(res.data);
    } catch (err) {
      setError("Erro ao carregar bolos");
    } finally {
      setLoading(false);
    }
  }

  async function removeCake(id: number) {
    if (!confirm("Tem certeza que deseja deletar este bolo?")) return;

    setDeletingId(id);
    try {
      await api.delete(`/admin/cakes/${id}`);
      setCakes((prev) => prev.filter((cake) => cake.id !== id));
    } catch (err) {
      setError("Erro ao deletar bolo");
    } finally {
      setDeletingId(null);
    }
  }

  useEffect(() => {
    loadCakes();
  }, []);
console.log("Bolos vindos da API:", cakes);
  return (
    <div>
      <CakeForm onCreated={loadCakes} />

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        📋 Bolos Cadastrados
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Carregando bolos...</p>
        </div>
      ) : cakes.length === 0 ? (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded text-blue-700">
          Nenhum bolo cadastrado ainda. Crie o primeiro acima! 🎂
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {cake.imageUrl && (
              <img
                src={cake.imageUrl}
                alt={cake.name}
                className="w-full h-48 object-cover"
              />
            )}

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {cake.name}
                </h3>

                {cake.description && (
                  <p className="text-gray-600 text-sm mb-3">
                    {cake.description}
                  </p>
                )}

                <div className="flex justify-between items-center mb-4">
                  <span className="text-pink-600 font-bold text-lg">
                  {/* O sinal de interrogação e o || 0 garantem que o código não quebre */}
                  R$ {(((cake.priceCents || 0) || (cake.price || 0) * 100) / 100).toFixed(2)}
                </span>
                  {cake.category && (
                    <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full">
                      {cake.category.name}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => removeCake(cake.id)}
                  disabled={deletingId === cake.id}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
                >
                  {deletingId === cake.id ? "Deletando..." : "🗑️ Deletar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
