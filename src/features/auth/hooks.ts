import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "./authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  return {
    ...auth,
    login: (email: string, password: string) =>
      dispatch(login({ email, password })),
  };
};
