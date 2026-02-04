import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "../features/auth/constants";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  const token = Cookies.get(import.meta.env.VITE_TOKEN_NAME);
  console.log("TOKEN ENVIADO 👉", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
