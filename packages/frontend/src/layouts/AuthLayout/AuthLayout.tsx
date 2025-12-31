// Cambiamos 'import { ReactNode }' por 'import type { ReactNode }'
import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  sideContent: ReactNode;
}

export default function AuthLayout({ children, sideContent }: AuthLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Columna Izquierda */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12 relative border-r border-slate-50">
        
        {/* LOGO TRUSTBID ACTUALIZADO */}
        <div className="absolute top-10 left-10 flex items-start select-none">
          <span className="font-bold text-2xl text-slate-900 tracking-tighter">
            TrustBid
          </span>
          {/* Asterisco azul según tu logo oficial */}
          <span className="text-blue-500 text-2xl font-black ml-0.5 mt-[-4px]">
            *
          </span>
        </div>
        
        {/* Contenedor del formulario centrado */}
        <div className="w-full max-w-[340px]">
          {children}
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="w-1/2 bg-[#0a0f1e] flex items-center justify-center p-16">
        <div className="w-full max-w-[440px]">
          {sideContent}
        </div>
      </div>
    </div>
  );
}
