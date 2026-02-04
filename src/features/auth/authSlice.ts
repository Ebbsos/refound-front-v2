import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "./authService";
import { TOKEN_COOKIE_NAME } from "./constants";
import Cookies from "js-cookie";

const getStoredUser = () => {
  const user = localStorage.getItem("auth_user");
  return user ? JSON.parse(user) : null;
};

const tokenFromCookie = Cookies.get(TOKEN_COOKIE_NAME) || null;

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: getStoredUser(),
  token: Cookies.get(TOKEN_COOKIE_NAME) || null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      return await loginRequest(email, password);
    } catch {
      return rejectWithValue("Credenciales inválidas");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;

      Cookies.remove(TOKEN_COOKIE_NAME);
      localStorage.removeItem("auth_user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        Cookies.set(TOKEN_COOKIE_NAME, action.payload.token);
        localStorage.setItem("auth_user", JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
