import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { CakeCard } from "@/components/cake/CakeCard";

interface Cake {
  id: number;
  name: string;
  description?: string;
  price?: number;
  imageUrl?: string;
}

export function Cakes() {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        setLoading(true);
        const response = await api.get("/cakes");
        setCakes(response.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar bolos:", err);
        setError("Falha ao carregar os bolos. Tente novamente.");
        setCakes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCakes();
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto py-10">
        <div className="text-center">Carregando bolos...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto py-10">
        <div className="text-center text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Bolos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cakes.length > 0 ? (
          cakes.map((cake) => (
            <CakeCard
              key={cake.id}
              name={cake.name}
              imageUrl={cake.imageUrl}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            Nenhum bolo disponível no momento
          </div>
        )}
      </div>
    </section>
  );
}
