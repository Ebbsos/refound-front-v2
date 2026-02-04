import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hasRole } from "../permissions";
import { Roles } from "../roles";
import { LoginForm } from "../components/LoginForm";
import { useAppSelector } from "../../../app/hooks";

export const LoginPage = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (token && hasRole(user, Roles.DEVOLUCIONES)) {
      navigate("/");
    }
  }, [token, user]);

  return <LoginForm />;
};
