import { useState } from 'react';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';


function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [, setUserData] = useState<{ name?: string; walletAddress?: string } | null>(null);

  const handleNavigate = (page: string, data?: any) => {
    if (data) {
      setUserData(data);
    }
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'login' && (
        <LoginPage onNavigate={handleNavigate} />
      )}

      {currentPage === 'register' && (
        <RegisterPage onNavigate={handleNavigate} />
      )}

      
    </div>
  );
}

export default App;