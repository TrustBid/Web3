
import React from 'react';
import { ArrowRight } from 'lucide-react';
// Importamos el nuevo componente que creaste
import TransparencyChart from './TransparencyChart';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-lg">Trust<span className="text-blue-500">Bid</span></p>
              <p className="text-xs text-gray-500">From funds to impact</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#soluciones" className="text-gray-600 hover:text-gray-900 font-medium">Soluciones</a>
            <a href="#proceso" className="text-gray-600 hover:text-gray-900 font-medium">Proceso</a>
            <a href="#beneficios" className="text-gray-600 hover:text-gray-900 font-medium">Beneficios</a>
            <button
              onClick={() => onNavigate('login')}
              className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Ingresar
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
            ✓ Verificación en tiempo real
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Anticorrupción y<br/>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Trazabilidad de Fondos</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Los <strong>fondos sociales</strong> y las <strong>donaciones privadas</strong> se vuelven una <strong className="text-red-600">"caja negra"</strong> después del desembolso. La ejecución se prueba con <strong>reportes tardíos</strong> e <strong>impenetrables</strong>. Esto genera desconfianza en ejecutores, auditores y reduce el impacto real en las comunidades beneficiarias.
          </p>
          <button
            onClick={() => onNavigate('login')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition inline-flex items-center gap-2 mx-auto"
          >
            Comenzar Ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* EL PROBLEMA SECTION - AQUÍ ESTÁ EL CAMBIO PRINCIPAL */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">El Problema</h2>
              <div className="space-y-4">
                {[
                  'Dos de cada tres colombianos perciben corrupción en programas de regulación anticorrupción',
                  'Los fondos sociales pierden trazabilidad después del desembolso',
                  'Reportes tardíos e impenetrables para ejecutores y auditores',
                  'Reduce el impacto en las comunidades beneficiarias'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-red-500 flex-shrink-0 flex items-center justify-center mt-1">
                      <span className="text-red-600 text-xs">!</span>
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* INTEGRACIÓN DEL GRÁFICO ANIMADO */}
            <div className="w-full">
              <TransparencyChart />
            </div>
          </div>
        </div>
      </section>

      {/* LA SOLUCIÓN TRUSTBID */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-950 via-black to-blue-950 rounded-2xl p-12 border border-blue-500/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">TrustBid recupera la confianza de la gente</h2>
              <p className="text-lg text-gray-300">con <strong>trazabilidad incorruptible</strong> que evidencia y justifica cada transacción del flujo de fondos.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  title: "Registro verificable",
                  desc: "Registrar cada desembolso de fondos privados con monto, fecha, proyecto y entidad receptora, de forma verificable y pública."
                },
                {
                  title: "Ejecución estandarizada",
                  desc: "Estandarizar la ejecución del gasto mediante una categorización obligatoria: proyecto, rubro, periodo."
                },
                {
                  title: "Auditoría facilitada",
                  desc: "Facilitar auditoría y compliance mediante exportación de pruebas verificables y reportes."
                },
                {
                  title: "Verificación pública",
                  desc: "Habilitar verificación pública del estado del fondo (recibido, ejecutado, saldo) con evidencia técnica."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-white font-bold text-sm mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLUJO SECTION */}
      <section id="proceso" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Flujo de Fondos Transparente</h2>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
              {[
                { icon: "💵", label: "Donante", color: "cyan" },
                { icon: "❤️", label: "Fundación", color: "blue" },
                { icon: "📋", label: "Ejecución", color: "purple" },
                { icon: "👥", label: "Impacto", color: "emerald" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
                    {step.icon}
                  </div>
                  <p className="font-semibold text-gray-900">{step.label}</p>
                  {i < 3 && <ArrowRight className="hidden md:block absolute -right-12 w-6 h-6 text-gray-400" />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-12 border border-cyan-200">
            <p className="text-center text-gray-700 leading-relaxed">
              Cada paso del flujo es registrado, verificado y auditable. Los fondos se transforman en datos inmutables que garantizan transparencia, reducen corrupción y restauran la confianza en las comunidades beneficiarias.
            </p>
          </div>
        </div>
      </section>

      {/* WHY STELLAR SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Por qué Stellar</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: "🔒",
                title: "Anclaje inmutable de eventos críticos del uso de fondos",
              },
              {
                icon: "🔐",
                title: "Pruebas criptográficas sin exposición de datos sensibles",
              },
              {
                icon: "🏗️",
                title: "Infraestructura financiera probada para registrar y verificar desembolsos en el mundo real",
              },
              {
                icon: "🌐",
                title: "Red global descentralizada para auditorías internacionales",
              }
            ].map((item, i) => (
              <div key={i} className="bg-blue-950/30 border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/60 transition">
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-gray-200 font-medium">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-8">
            <div className="text-center">
              <p className="text-gray-300 mb-4">Plataformas Ancladas:</p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div>
                  <p className="text-white font-bold">Anchor Platform</p>
                  <p className="text-gray-400 text-sm">Disbursement Platform</p>
                </div>
                <span className="text-2xl">⚡</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">By Stellar</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">Integración con MoneyGram</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="beneficios" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para transformar la transparencia?
          </h2>
          <p className="text-xl text-blue-50">
            Únete a las organizaciones que ya confían en TrustBid para gestionar sus programas sociales con evidencia verificable.
          </p>
          <button
            onClick={() => onNavigate('login')}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Comenzar Ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-bold text-white mb-2">TrustBid</p>
            <p className="text-sm">Transparencia y trazabilidad para programas sociales en LATAM</p>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Producto</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Características</a></li>
              <li><a href="#" className="hover:text-white">Precios</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Recursos</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Documentación</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Empresa</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Acerca de</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 TrustBid. Todos los derechos reservados.</p>
          <p className="mt-2">Construido en Stellar • Powered by Innovation</p>
        </div>
      </footer>
    </div>
  );
};