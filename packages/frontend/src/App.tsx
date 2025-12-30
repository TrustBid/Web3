import { useState } from 'react';
import { LandingPage } from './pages/landing/LandingPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';

// Definimos la interfaz para que TypeScript sepa qué esperar de un usuario
interface User {
  name: string;
  email: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  // Especificamos que el usuario puede ser de tipo User o null
  const [user, setUser] = useState<User | null>(null);

  const handleNavigate = (page: string, userData?: User) => {
    setCurrentPage(page);
    if (userData) setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return <LandingPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'login') {
    return <RegisterPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'dashboard') {
    // Si por alguna razón llegamos aquí sin usuario, redirigimos o mostramos error
    if (!user) {
      setCurrentPage('landing');
      return null;
    }

    return <DashboardPage user={user} onLogout={handleLogout} />;
  }

  return <LandingPage onNavigate={handleNavigate} />;
}

export default App;