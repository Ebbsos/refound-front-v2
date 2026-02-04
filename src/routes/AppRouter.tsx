import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { RoleRoute } from "./RoleRoutes";

import { LoginPage } from "../features/auth/pages/LoginPage";
import { RefundVouchersPage } from "../features/refunds/pages/RefundVouchersPage";
import { Roles } from "../features/auth/roles";
import { Layout } from "../shared/layout/Layout";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<PrivateRoute />}>
        
        <Route element={<Layout />}>
          
          <Route element={<RoleRoute allowedRoles={[Roles.DEVOLUCIONES]} />}>
            <Route path="/" element={<RefundVouchersPage />} />
            <Route path="/refunds" element={<RefundVouchersPage />} />
          </Route>

        </Route>
      </Route>

      <Route path="/unauthorized" element={<div style={{ color: "white" }}>No autorizado</div>} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
