import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export const PrivateRoute = () => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
