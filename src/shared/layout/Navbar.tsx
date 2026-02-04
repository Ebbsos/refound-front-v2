import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Box } from "@mui/material";

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
      <Box className="navbar-left">
        <IconButton onClick={onToggleSidebar}>
          <MenuIcon sx={{ color: "var(--primary-color)" }} />
        </IconButton>

        <img
          src="/logob.png"
          alt="Logo"
          className="navbar-logo"
        />
      </Box>

      <IconButton onClick={() => dispatch(logout())}>
        <LogoutIcon sx={{ color: "var(--text-primary)" }} />
      </IconButton>
    </header>
  );
};
