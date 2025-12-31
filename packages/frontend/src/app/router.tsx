import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage"; // 👈 Importación corregida
import DashboardApp from "../pages/dashboard/DashboardPage";

const genericNavigate = (page: string) => {
  if (page === 'login') window.location.href = '/login';
  if (page === 'register') window.location.href = '/register';
  if (page === 'dashboard') window.location.href = '/dashboard';
};

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  {
    path: "/login",
    element: <LoginPage onNavigate={genericNavigate} />,
  },
  {
    path: "/register", // 👈 Esta es la ruta para tu nuevo código
    element: <RegisterPage onNavigate={genericNavigate} />,
  },
  {
    path: "/dashboard",
    element: <DashboardApp />,
  },
]);