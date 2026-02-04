export const Roles = {
  DEVOLUCIONES: "DEVOLUCIONES",
  ADMIN: "ADMIN",
} as const;

export type Roles = typeof Roles[keyof typeof Roles];
