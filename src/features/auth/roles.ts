export const Roles = {
  DEVOLUCIONES: "DEVOLUCIONES",
  ADMIN: "ADMIN",
  REIMPRIMIR: "REIMPRIMIR",
  REIMPRIMIR_FACTURA: "REIMPRIMIR_FACTURA",
} as const;

export type Roles = typeof Roles[keyof typeof Roles];
