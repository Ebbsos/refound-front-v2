import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

import "./layout.css";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";

interface Props {
  onToggleSidebar: () => void;
}

export const Navbar = ({ onToggleSidebar }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <header className="navbar">
      <IconButton onClick={onToggleSidebar}>
        <MenuIcon sx={{ color: "#61eb1b" }} />
      </IconButton>
      <IconButton onClick={() => dispatch(logout())}>
        <LogoutIcon sx={{ color: "#fff" }} />
      </IconButton>
    </header>
  );
};
