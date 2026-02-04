import { useAppSelector } from "../../app/hooks";
import { hasRole } from "./permissions";
import { Roles } from "./roles";

export const usePermissions = () => {
  const user = useAppSelector((state) => state.auth.user);

  return {
    canRefund: hasRole(user, Roles.DEVOLUCIONES),
    isAdmin: hasRole(user, Roles.ADMIN),
  };
};
