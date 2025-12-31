import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/landing/LandingPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";

// Creamos funciones dummy para satisfacer los tipos de TypeScript
const handleNavigate = (page: string) => {
  if (page === 'login') window.location.href = '/login';
};

const handleLogout = () => {
  console.log("Cerrando sesión...");
  window.location.href = '/';
};

// Datos simulados para el Dashboard
const mockUser = {
  name: "Administrador",
  email: "admin@trustbid.com"
};

export const router = createBrowserRouter([
  {
    path: "/",
    // Enviamos onNavigate porque LandingPage lo requiere
    element: <LandingPage onNavigate={handleNavigate} />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    // Enviamos user y onLogout porque DashboardPage los requiere
    element: <DashboardPage user={mockUser} onLogout={handleLogout} />,
  },
]);