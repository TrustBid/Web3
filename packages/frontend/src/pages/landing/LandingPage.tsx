import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { TransparencyChart } from './TransparencyChart';

export const LandingPage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* SECCIÓN 1: EL IMPACTO (Hero) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 text-slate-900">
            Trust<span className="text-blue-600">Bid</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 italic max-w-3xl mx-auto leading-relaxed">
            "Donaciones que se vuelven una <span className="text-red-600 font-bold">caja negra</span> tras el desembolso."
          </p>
          <div className="mt-12 animate-bounce">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Haz scroll para descubrir</p>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 2: LA EVIDENCIA (Sticky Scroll) */}
      <section className="relative bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna Izquierda: Texto Narrativo */}
          <div className="py-24 space-y-[40vh]">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border-l-8 border-red-500"
            >
              <AlertCircle className="w-12 h-12 text-red-500 mb-6" />
              <h2 className="text-3xl font-black mb-4 text-slate-900">Percepción de Corrupción</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                <strong>2 de cada 3 colombianos</strong> perciben corrupción en programas sociales. La regulación actual no recupera la confianza.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border-l-8 border-blue-500"
            >
              <BarChart3 className="w-12 h-12 text-blue-500 mb-6" />
              <h2 className="text-3xl font-black mb-4 text-slate-900">Déficit de Transparencia</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                El origen de los fondos es lo que menos se publica en la región, llegando a un <strong>85% de opacidad</strong> en Colombia.
              </p>
            </motion.div>
          </div>

          {/* Columna Derecha: Gráfico Fijo */}
          <div className="sticky top-0 h-screen flex items-center justify-center py-10">
            <motion.div 
              layout
              className="w-full"
            >
              <TransparencyChart title="Opacidad en LATAM" dataKey="origen" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: LA SOLUCIÓN (Cierre) */}
      <section className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center py-32 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            TrustBid recupera la <span className="text-blue-400 text-italic font-black">confianza</span>
          </h2>
          <p className="text-2xl text-slate-400">
            Trazabilidad incorruptible con tecnología Stellar para evidenciar y justificar cada flujo de fondos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left pt-10">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <ShieldCheck className="text-blue-400 mb-4 w-8 h-8" />
              <h4 className="font-bold text-xl mb-2">Anclaje Inmutable</h4>
              <p className="text-slate-400 text-sm">Registro de eventos críticos sin exposición de datos sensibles.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Zap className="text-blue-400 mb-4 w-8 h-8" />
              <h4 className="font-bold text-xl mb-2">Infraestructura Probada</h4>
              <p className="text-slate-400 text-sm">Verificación de desembolsos en el mundo real.</p>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('login')}
            className="mt-16 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all flex items-center gap-4 mx-auto shadow-2xl shadow-blue-500/20"
          >
            INGRESAR AHORA <ArrowRight className="w-8 h-8" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};