import React, { useState } from 'react';

interface RegisterPageProps {
  onNavigate: (page: string, user?: any) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onNavigate('dashboard', { name: 'Usuario Demo', email });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 space-y-6 border border-gray-200 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Bienvenido a TrazaFondos</h2>
          <p className="text-gray-600">Ingresa para continuar</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-cyan-500 outline-none transition"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-cyan-500 outline-none transition"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
        >
          Ingresar
        </button>

        <button
          onClick={() => onNavigate('landing')}
          className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition"
        >
          Volver
        </button>
      </div>
    </div>
  );
};