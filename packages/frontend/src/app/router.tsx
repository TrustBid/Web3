import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage"; 
import DashboardApp from "../pages/dashboard/DashboardPage";

// 1. Corregimos la navegación para que use rutas relativas
const genericNavigate = (page: string) => {
  if (page === 'login') window.location.href = './login';
  if (page === 'register') window.location.href = './register';
  if (page === 'dashboard') window.location.href = './dashboard';
};

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  {
    path: "/login",
    element: <LoginPage onNavigate={genericNavigate} />,
  },
  {
    path: "/register",
    element: <RegisterPage onNavigate={genericNavigate} />,
  },
  {
    path: "/dashboard",
    element: <DashboardApp />,
  },
], {
  // 2. AÑADIMOS ESTO PARA GITHUB PAGES
  basename: "/Web3", 
});