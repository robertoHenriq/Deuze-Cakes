import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"; // 👈 ajuste o caminho conforme a pasta correta

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const { data } = await api.post("/auth/login", form); // ✅ usa o axios certo
      localStorage.setItem("token", data.access_token);
      navigate("/admin/cakes");
    } catch (err: any) {
      console.error(err);
      setError("Falha no login, verifique suas credenciais.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Senha"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 w-full rounded mt-2"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
