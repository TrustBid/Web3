import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { TransparencyChart } from './TransparencyChart';

// Definimos la interfaz para que coincida exactamente con App.tsx
interface LandingPageProps {
  onNavigate: (page: string, userData?: { name: string; email: string }) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white overflow-x-hidden font-sans">
      
      {/* SECCIÓN 1: HERO - EL CONCEPTO DE CAJA NEGRA */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Blockchain for Social Good
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 text-slate-900">
            Trust<span className="text-blue-600">Bid</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 italic max-w-3xl mx-auto leading-relaxed font-light">
            "Donaciones que se vuelven una <span className="text-red-600 font-bold">caja negra</span> tras el desembolso."
          </p>
          <div className="mt-16 animate-bounce flex flex-col items-center gap-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Scrollytelling</p>
            <div className="w-[1px] h-12 bg-slate-200"></div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 2: EL PROBLEMA - SCROLLYTELLING DINÁMICO */}
      <section className="relative bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna Izquierda: Bloques de texto que activan el scroll */}
          <div className="py-24 space-y-[45vh]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border-l-8 border-red-500"
            >
              <AlertCircle className="w-12 h-12 text-red-500 mb-6" />
              <h2 className="text-3xl font-black mb-4 text-slate-900 tracking-tight">Percepción Crítica</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                <strong>2 de cada 3 colombianos</strong> perciben corrupción en programas sociales. La regulación actual no logra recuperar la confianza pública.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border-l-8 border-blue-500"
            >
              <BarChart3 className="w-12 h-12 text-blue-500 mb-6" />
              <h2 className="text-3xl font-black mb-4 text-slate-900 tracking-tight">Opacidad de Datos</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                El origen de los fondos es el dato menos publicado en la región. En Colombia, el índice de opacidad alcanza el <strong>85%</strong>.
              </p>
              <div className="mt-6 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span>Fuente: AFE Colombia 2023</span>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: Gráfico Fijo (Sticky) */}
          <div className="sticky top-0 h-screen flex items-center justify-center py-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              {/* Usamos el componente que ya configuramos con los datos de la AFE */}
              <TransparencyChart title="Déficit de Transparencia" dataKey="origen" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: LA SOLUCIÓN - TRUSTBID + STELLAR */}
      <section className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center py-32 px-4 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-12 relative"
        >
          {/* Decoración de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            TrustBid recupera la <span className="text-blue-400 italic">confianza</span>
          </h2>
          <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto">
            Utilizamos la infraestructura de <strong>Stellar</strong> para evidenciar y justificar cada transacción del flujo de fondos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left pt-10">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors group">
              <ShieldCheck className="text-blue-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-xl mb-2">Anclaje Inmutable</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Registro de eventos críticos del uso de fondos mediante pruebas criptográficas sin exponer datos sensibles.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors group">
              <Zap className="text-blue-400 mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-xl mb-2">Impacto Real</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Infraestructura probada para registrar y verificar desembolsos en el mundo real en tiempo real.
              </p>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('login')}
            className="mt-16 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all flex items-center gap-4 mx-auto shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
          >
            INGRESAR AHORA <ArrowRight className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-12 bg-slate-900 border-t border-white/5 text-center">
        <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
          TrustBid — From Funds to Impact
        </p>
      </footer>
    </div>
  );
};