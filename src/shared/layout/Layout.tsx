import { useState } from "react";
import { Outlet } from "react-router-dom";
;
import "./layout.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout-root">
      <Navbar onToggleSidebar={() => setSidebarOpen((p) => !p)} />

      <div className="layout-body">
        <Sidebar open={sidebarOpen} />

        <main className={`layout-content ${sidebarOpen ? "with-sidebar" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
