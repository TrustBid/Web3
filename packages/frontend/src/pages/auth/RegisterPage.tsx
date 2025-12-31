import { useState } from 'react';
import { User, Mail, Building2, Heart, BarChart3, ShieldCheck, Lock } from 'lucide-react';
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

export default function RegisterPage({ onNavigate }: { onNavigate: (p: string, d?: any) => void }) {
  const [userType, setUserType] = useState('organismo');

  const registerSide = (
    <div className="flex flex-col items-start text-left max-w-[320px]">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-5 shadow-sm">
        <ShieldCheck className="w-5 h-5 text-blue-600" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
        Transparencia <br />
        <span className="text-blue-500">incorruptible</span> para el futuro.
      </h2>
      <p className="text-slate-400 text-[13px] leading-relaxed mb-8">
        Únete a la red que asegura la trazabilidad de cada fondo en programas sociales.Tecnologia Blockchain para Auditores,donantes y organismos.
      </p>
      
      <div className="flex gap-3 w-full">
        <div className="flex-1 bg-white/5 border border-white/10 p-3 rounded-xl">
          <div className="flex items-center gap-1.5 text-blue-400 font-bold mb-1">
            <Lock className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-tighter">Seguridad</span>
          </div>
          <p className="text-[9px] text-slate-500">Datos inmutables.</p>
        </div>
        <div className="flex-1 bg-white/5 border border-white/10 p-3 rounded-xl">
          <div className="flex items-center gap-1.5 text-blue-400 font-bold mb-1">
            <BarChart3 className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-tighter">Trazabilidad</span>
          </div>
          <p className="text-[9px] text-slate-500">Tiempo real.</p>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout sideContent={registerSide}>
      <div className="w-full flex flex-col py-2">
        <div className="mb-5">
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Crear Cuenta</h1>
          <p className="text-slate-400 text-[11px]">Completa tus datos para empezar.</p>
        </div>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Nombre Completo</label>
            <div className="relative">
              <input type="text" placeholder="Ingresa tu nombre" className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[11px] outline-none focus:border-blue-500 transition-all" />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email</label>
            <div className="relative">
              <input type="email" placeholder="Ingresa tu Correo Electronico" className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[11px] outline-none" />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Tipo de Usuario</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'organismo', label: 'Organismo', icon: Building2 },
                { id: 'donante', label: 'Donante', icon: Heart },
                { id: 'auditor', label: 'Auditor', icon: BarChart3 },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setUserType(type.id)}
                  className={`flex flex-col items-center py-2 rounded-lg border transition-all ${
                    userType === type.id 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-slate-100 bg-white text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <type.icon className="w-4 h-4 mb-1" />
                  <span className="text-[8px] font-bold uppercase">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Contraseña</label>
              <input type="password" placeholder="••••" className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[11px] outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Confirmar Contraseña</label>
              <input type="password" placeholder="••••" className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[11px] outline-none" />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input type="checkbox" id="terms" className="w-3 h-3 rounded border-slate-300 text-blue-600" />
            <label htmlFor="terms" className="text-[10px] text-slate-400">
              Acepto <span className="text-blue-600 font-bold">Términos y condiciones </span> y la <span className="text-blue-600 font-bold"> Politica de Privacidad</span>.
            </label>
          </div>

          <button 
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-[11px] shadow-sm transition-all"
          >
            Registrarse
          </button>
        </form>

        <p className="mt-4 text-center text-[10px] text-slate-400">
          ¿Ya tienes cuenta? <button onClick={() => onNavigate('login')} className="text-blue-600 font-bold hover:underline">Iniciar Sesión</button>
        </p>
      </div>
    </AuthLayout>
  );
}