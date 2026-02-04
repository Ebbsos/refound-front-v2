import PowerInputIcon from "@mui/icons-material/PowerInput";
import PrintIcon from "@mui/icons-material/Print";

import "./layout.css";
import { useAppSelector } from "../../app/hooks";
import { hasRole } from "../../features/auth/permissions";
import { Roles } from "../../features/auth/roles";
import { SidebarItem } from "./SideBarItem";

interface Props {
  open: boolean;
}

export const Sidebar = ({ open }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`}>
      <nav className="sidebar-menu">
        {hasRole(user, Roles.DEVOLUCIONES) && (
          <SidebarItem
            to="/"
            icon={<PowerInputIcon />}
            label="Devoluciones"
          />
        )}

        {hasRole(user, Roles.REIMPRIMIR) && (
          <SidebarItem
            to="/reimprimir"
            icon={<PrintIcon />}
            label="Reimprimir"
          />
        )}
      </nav>
    </aside>
  );
};
