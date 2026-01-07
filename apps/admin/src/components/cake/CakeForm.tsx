import { useState } from "react";
import { api } from "@/services/api";

interface CakeFormProps {
  onCreated: () => void;
}

export function CakeForm({ onCreated }: CakeFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }

      await api.post("/cakes/admin", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
      setPreview("");
      onCreated();
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao cadastrar bolo");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg mb-8 border-l-4 border-pink-600"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📸 Novo Bolo</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Esquerda - Formulário */}
        <div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nome do Bolo
            </label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:border-pink-600 p-3 w-full rounded-lg focus:outline-none transition"
              placeholder="Ex: Bolo de Chocolate"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              className="border-2 border-gray-300 focus:border-pink-600 p-3 w-full rounded-lg focus:outline-none transition h-24 resize-none"
              placeholder="Descreva o bolo..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preço (R$)
            </label>
            <input
              type="number"
              step="0.01"
              className="border-2 border-gray-300 focus:border-pink-600 p-3 w-full rounded-lg focus:outline-none transition"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Imagem do Bolo
            </label>
            <input
              type="file"
              accept="image/*"
              className="border-2 border-dashed border-pink-300 p-3 w-full rounded-lg cursor-pointer hover:border-pink-600 transition"
              onChange={handleImageChange}
            />
            {image && (
              <p className="text-sm text-green-600 mt-2">✓ {image.name}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Salvando..." : "✓ Cadastrar Bolo"}
          </button>
        </div>

        {/* Direita - Preview */}
        <div className="flex flex-col items-center justify-center">
          {preview ? (
            <div className="w-full">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Preview:
              </p>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl shadow"
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
              <span>Nenhuma imagem selecionada</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
