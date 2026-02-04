import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { hasRole } from "../features/auth/permissions";
import type { Roles } from "../features/auth/roles";

interface Props {
  allowedRoles: Roles[];
}

export const RoleRoute = ({ allowedRoles }: Props) => {
  const { user, token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const allowed = allowedRoles.some((role) => hasRole(user, role));

  if (!allowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
