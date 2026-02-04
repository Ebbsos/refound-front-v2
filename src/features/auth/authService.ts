import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_LOGIN,
});

interface LoginApiResponse {
  status: number;
  statusMsg: string;
  data: {
    token: string;
    tesoreria_token?: string;
    user: User;
  };
}

export const loginRequest = async (
  email: string,
  password: string,
): Promise<{ user: User; token: string }> => {
  const response = await api.post<LoginApiResponse>("auth/login", {
    email,
    password,
  });

  const { data } = response.data;

  if (!data?.user || !data?.token) {
    throw new Error("Formato de login inválido");
  }

  return {
    user: data.user,
    token: data.token,
  };
};
