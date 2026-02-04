// src/layout/LayoutComponent.tsx
import { Navigation } from "@erpexo/navigation";
import { Logout, Print } from "@mui/icons-material";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import { Roles } from "../features/auth/roles";
import { hasRole } from "../features/auth/permissions";

const LayoutComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);

  const isLogged = Boolean(token);

  return (
    <Navigation
      events={{
        onChangeNavigation: ({ baseURL, path, type }) => {
          if (type === "soft") {
            navigate(path);
          } else {
            window.location.href = baseURL + path;
          }
        },
      }}
      config={{
        userConfig: {
          name: user ? `${user.name} ${user.surname}` : "",
          avatar: "/icon.png",
          enableUserConfig: isLogged,
          actions: [
            {
              label: "Cerrar sesión",
              icon: <Logout />,
              onClick: () => {
                dispatch(logout());
                navigate("/login", { replace: true });
              },
            },
          ],
        },
      }}
      options={[
        {
          label: "Devoluciones",
          path: "/",
          Icon: <PowerInputIcon />,
          NavigationType: "soft",
          isVisible: isLogged && hasRole(user, Roles.DEVOLUCIONES),
        },
        {
          label: "Devoluciones +30 días",
          path: "/devolucion30dias",
          Icon: <PowerInputIcon />,
          NavigationType: "soft",
          isVisible: isLogged && hasRole(user, Roles.DEVOLUCIONES),
        },
        {
          label: "Reimprimir",
          path: "/reimprimir",
          Icon: <Print />,
          NavigationType: "soft",
          isVisible: isLogged && hasRole(user, Roles.REIMPRIMIR),
        },
        {
          label: "Reimprimir Factura",
          path: "/reimprimirfactura",
          Icon: <Print />,
          NavigationType: "soft",
          isVisible: isLogged && hasRole(user, Roles.REIMPRIMIR_FACTURA),
        },
      ]}
    >
      <Outlet />
    </Navigation>
  );
};

export default LayoutComponent;
