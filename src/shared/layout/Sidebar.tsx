import { NavLink } from "react-router-dom";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import PrintIcon from "@mui/icons-material/Print";

import "./layout.css";
import { useAppSelector } from "../../app/hooks";
import { hasRole } from "../../features/auth/permissions";
import { Roles } from "../../features/auth/roles";

interface Props {
  open: boolean;
}

export const Sidebar = ({ open }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`}>
      {hasRole(user, Roles.DEVOLUCIONES) && (
        <NavLink to="/" className="sidebar-item">
          <PowerInputIcon />
          <span>Devoluciones</span>
        </NavLink>
      )}

      {hasRole(user, Roles.REIMPRIMIR) && (
        <NavLink to="/reimprimir" className="sidebar-item">
          <PrintIcon />
          <span>Reimprimir</span>
        </NavLink>
      )}
    </aside>
  );
};
