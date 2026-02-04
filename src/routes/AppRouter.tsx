import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { Roles } from "../features/auth/roles";
import { RoleRoute } from "./RoleRoutes";


export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />

      {/* Private */}
      <Route element={<PrivateRoute />}>
        {/* Role protected */}
        <Route element={<RoleRoute allowedRoles={[Roles.DEVOLUCIONES]} />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/refunds" element={<LoginPage />} />
        </Route>
      </Route>

      <Route path="/unauthorized" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);
