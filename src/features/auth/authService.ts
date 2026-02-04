import axios from "axios";
import type { LoginResponse } from "../../types/types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_LOGIN,
});

export const loginRequest = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("auth/login", {
    email,
    password,
  });
  return data;
};
