import { useState } from 'react';
import { Mail, Lock, Eye, ArrowRight, Wallet } from 'lucide-react';
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

export default function LoginPage({ onNavigate }: { onNavigate: (p: string, d?: any) => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false); // Estado para el feedback de carga

  // Función lógica para conectar la Wallet
  const handleWalletConnect = async () => {
    setIsConnecting(true);
    try {
      // @ts-ignore - Verificamos si Freighter está instalado en el navegador
      const freighter = window.freighterApi;

      if (!freighter) {
        alert("Por favor, instala la extensión Freighter Wallet para continuar.");
        window.open("https://www.freighter.app/", "_blank");
        return;
      }

      // Solicitamos la llave pública del usuario
      const { address, error } = await freighter.getPublicKey();

      if (error) {
        console.error("Error al obtener la llave:", error);
        return;
      }

      if (address) {
        // Navegamos al dashboard pasando la dirección de la wallet
        onNavigate('dashboard', { 
          name: 'Stellar User', 
          walletAddress: address 
        });
      }
    } catch (err) {
      console.error("Error de conexión:", err);
    } finally {
      setIsConnecting(false);
    }
  };

  const loginSide = (
    <div className="bg-slate-900/40 rounded-[2rem] p-8 border border-white/5 backdrop-blur-sm max-w-[380px]">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
        <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Live Data Trazabilidad</span>
      </div>
      <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
        De los fondos <span className="text-blue-500 italic">al impacto real.</span>
      </h2>
      <p className="text-slate-400 text-[13px] leading-relaxed mb-6">
        TrustBid recupera la confianza con trazabilidad incorruptible que justifica cada transacción.
      </p>
      <div className="flex items-end gap-1.5 h-16 opacity-30">
        {[40, 70, 55, 90, 100].map((h, i) => (
          <div key={i} className="flex-1 bg-slate-700 rounded-t-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );

  return (
    <AuthLayout sideContent={loginSide}>
      <div className="w-full flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Bienvenido</h1>
          <p className="text-slate-400 text-[12px]">Acceda a la plataforma de trazabilidad.</p>
        </div>

        <div className="w-full space-y-4">
          <div className="space-y-1">
            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 w-3.5 h-3.5" />
              <input 
                type="email" 
                placeholder="Ingresa tu Correo Electronico" 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-lg text-[11px] outline-none focus:border-blue-500 transition-all" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Contraseña</label>
              <button className="text-[10px] text-blue-600 font-bold hover:underline">¿Olvidaste tu contraseña?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 w-3.5 h-3.5" />
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="••••••••" 
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-100 rounded-lg text-[11px] outline-none focus:border-blue-500 transition-all" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-blue-500"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-[11px] shadow-sm transition-all"
            >
              Ingresar  <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="relative flex items-center justify-center py-1">
              <div className="absolute w-full border-t border-slate-100"></div>
              <span className="relative bg-white px-3 text-[9px] font-bold text-slate-300 uppercase italic">o</span>
            </div>

            {/* BOTÓN ACTUALIZADO CON handleWalletConnect */}
            <button 
              type="button"
              onClick={handleWalletConnect}
              disabled={isConnecting}
              className={`w-full bg-[#0a0f1e] hover:bg-black text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2.5 text-[11px] border border-slate-800 transition-all ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Wallet className="w-3.5 h-3.5 text-blue-400" />
              {isConnecting ? "Conectando..." : "Entrar con Stellar Wallet"}
            </button>
          </div>

          <p className="text-center text-[10px] text-slate-500 pt-3">
            ¿No tienes cuenta? <button onClick={() => onNavigate('register')} className="text-blue-600 font-bold hover:underline">Registrate</button>
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center opacity-30">
          <span className="text-[7px] font-bold uppercase tracking-[0.2em] mb-2 text-slate-400">Tecnología asegurada por</span>
          <div className="flex items-center gap-1 grayscale scale-75">
            <div className="w-3 h-3 bg-slate-900 rounded-full" />
            <span className="font-black text-xs tracking-tighter italic text-slate-900">Stellar</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}