import axios from "axios";

const API_URL = "http://localhost:3333/auth";

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(errText || "Erro ao registrar usuário");
  }

  return await response.json();
}


export const api = axios.create({
  baseURL: "http://localhost:3333",
});



api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Ou onde você guarda o JWT
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



