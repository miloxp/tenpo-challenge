import axios from "axios";
import { getAuthToken } from "../context/auth";

// crear instancia
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // endpoint público de ejemplo
  timeout: 10000,
});

// interceptor para adjuntar token-fake
api.interceptors.request.use((config) => {
  const token = getAuthToken(); // función que devuelve token en memoria
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
