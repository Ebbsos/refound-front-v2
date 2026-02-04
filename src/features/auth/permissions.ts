import { Roles } from "./roles";

export const hasRole = (user: User | null, role: Roles): boolean => {
  if (!user) return false;
  return user.roles.some((r) => r.name_py === role);
};
