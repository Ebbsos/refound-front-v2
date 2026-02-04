import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
interface Props {
  to: string;
  icon: ReactNode;
  label: string;
}

export const SidebarItem = ({ to, icon, label }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-item ${isActive ? "active" : ""}`
      }
    >
      <span className="sidebar-item-icon">{icon}</span>
      <span className="sidebar-item-label">{label}</span>
    </NavLink>
  );
};
