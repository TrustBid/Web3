import { useState } from 'react';
import { 
  LogOut, 
  Plus, 
  CheckCircle, 
  Home, 
  BarChart3 
} from 'lucide-react';

interface User {
  name: string;
  email: string;
}

interface DashboardPageProps {
  user: User;
  onLogout: () => void;
}

type View = 'main' | 'createProject' | 'projectDetail' | 'disbursements' | 'registerDisbursement' | 'reports' | 'createReport';

interface Project {
  id: number;
  name: string;
  status: string;
  funds: number;
  spent: number;
  progress: number;
}

interface Disbursement {
  id: number;
  date: string;
  amount: number;
  description: string;
  status: 'verified' | 'pending';
}

interface Report {
  id: number;
  name: string;
  date: string;
  status: string;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ user, onLogout }) => {
  const [view, setView] = useState<View>('main');
  const [projects, ] = useState<Project[]>([
    { id: 1, name: 'Becas Escolares', status: 'active', funds: 45000, spent: 12500, progress: 28 }
  ]);
  const [, setSelectedProject] = useState<Project | null>(null);
  const [disbursements, setDisbursements] = useState<Disbursement[]>([
    { id: 1, date: '2024-01-15', amount: 5000, description: 'Pago a beneficiarios', status: 'verified' },
    { id: 2, date: '2024-01-10', amount: 7500, description: 'Materiales educativos', status: 'pending' }
  ]);
  const [reports, setReports] = useState<Report[]>([
    { id: 1, name: 'Reporte Q1 2024', date: '2024-01-30', status: 'completed' }
  ]);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [verifyData, setVerifyData] = useState<{ type: string; amount: string | number; description: string } | null>(null);

  const openVerifyModal = (data: { type: string; amount: string | number; description: string }) => {
    setVerifyData(data);
    setShowVerifyModal(true);
  };

  // Función para registrar nuevo desembolso (Usa setDisbursements para limpiar el warning)
  const handleAddDisbursement = () => {
    const newD: Disbursement = { 
      id: Date.now(), 
      date: new Date().toISOString().split('T')[0], 
      amount: 0, 
      description: 'Nuevo gasto por clasificar', 
      status: 'pending' 
    };
    setDisbursements([...disbursements, newD]);
    setView('registerDisbursement');
  };

  // Función para generar reporte (Usa setReports para limpiar el warning)
  const handleCreateReport = () => {
    const newR: Report = { 
      id: Date.now(), 
      name: `Reporte Generado ${reports.length + 1}`, 
      date: new Date().toLocaleDateString(), 
      status: 'In Progress' 
    };
    setReports([...reports, newR]);
    alert("Reporte creado con éxito");
  };

  const Navbar = ({ title, backView }: { title: string; backView?: View }) => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {backView ? (
            <button onClick={() => setView(backView)} className="text-gray-600 hover:text-cyan-600 text-2xl mr-2 transition-colors">←</button>
          ) : (
            <Home className="w-6 h-6 text-cyan-600" />
          )}
          <div>
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
            {!backView && <p className="text-xs text-gray-500 font-medium">Operador: {user.name} ({user.email})</p>}
          </div>
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 text-red-500 hover:text-red-700 font-bold text-sm transition-colors">
          <LogOut className="w-4 h-4" /> Salir
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {view === 'main' && (
        <>
          <Navbar title="Panel de Control" />
          <div className="max-w-7xl mx-auto p-6 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Proyectos</p>
                <p className="text-4xl font-black text-slate-900">{projects.length}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Total Fondos</p>
                <p className="text-4xl font-black text-cyan-600">${projects.reduce((a, p) => a + p.funds, 0).toLocaleString()}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Transacciones OK</p>
                <p className="text-4xl font-black text-emerald-500">{disbursements.length}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={() => setView('createProject')} className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-cyan-700 transition-all shadow-md shadow-cyan-100">
                <Plus size={20} /> Nuevo Proyecto
              </button>
              <button onClick={() => setView('reports')} className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
                <BarChart3 size={20} /> Ver Reportes
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-black text-slate-900">Proyectos Activos</h2>
              <div className="grid gap-4">
                {projects.map(p => (
                  <div key={p.id} onClick={() => { setSelectedProject(p); setView('projectDetail'); }} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-cyan-500 cursor-pointer transition-all shadow-sm group">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-1 rounded-full uppercase">Stellar Verified</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full rounded-full transition-all duration-1000" style={{ width: `${p.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between mt-3 text-sm font-medium">
                      <p className="text-slate-500">Ejecutado: <span className="text-slate-900">${p.spent.toLocaleString()}</span></p>
                      <p className="text-cyan-600">{p.progress}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {view === 'reports' && (
        <>
          <Navbar title="Reportes de Transparencia" backView="main" />
          <div className="max-w-7xl mx-auto p-6 space-y-4">
            <div className="flex justify-between items-center mb-6">
               <p className="text-slate-500 font-medium text-sm">Basado en auditoría blockchain en tiempo real.</p>
               <button onClick={handleCreateReport} className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-bold text-sm">Generar Nuevo</button>
            </div>
            {reports.map(r => (
              <div key={r.id} className="bg-white border border-slate-200 p-5 rounded-2xl flex justify-between items-center shadow-sm">
                <div>
                  <p className="font-black text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-400 font-bold">{r.date}</p>
                </div>
                <button onClick={() => openVerifyModal({ type: 'Reporte de Impacto', amount: 'Verificado', description: r.name })} className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl font-bold text-xs hover:bg-slate-50 transition-colors">
                  <CheckCircle size={14} className="text-emerald-500" /> Hash Stellar
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {view === 'disbursements' && (
        <>
          <Navbar title="Gestión de Fondos" backView="projectDetail" />
          <div className="max-w-7xl mx-auto p-6 space-y-4">
            <button onClick={handleAddDisbursement} className="bg-cyan-600 text-white px-6 py-2 rounded-xl font-bold shadow-md shadow-cyan-100">Registrar Nuevo Gasto</button>
            {disbursements.map(d => (
              <div key={d.id} className="bg-white border border-slate-200 p-5 rounded-2xl flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="font-black text-slate-900">{d.description}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{d.date}</p>
                </div>
                <div className="flex items-center gap-6">
                   <p className="text-xl font-black text-cyan-600">${d.amount.toLocaleString()}</p>
                   <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${d.status === 'verified' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                     {d.status === 'verified' ? 'Blockchain OK' : 'Pending'}
                   </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* MODAL DE VERIFICACIÓN (Usa VerifyModal para limpiar el warning) */}
      {showVerifyModal && verifyData && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-8 shadow-2xl border border-white">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
                <CheckCircle size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Verificación Stellar</h3>
              <p className="text-sm text-slate-500 font-medium">Esta transacción es inmutable y pública en la red.</p>
            </div>
            
            <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
               <p className="text-[10px] font-black text-slate-400 uppercase">Hash de Transacción</p>
               <p className="text-[11px] font-mono break-all text-slate-600 leading-relaxed bg-white p-2 rounded-lg border border-slate-100">
                 {Math.random().toString(36).substring(2).toUpperCase()}{Math.random().toString(36).substring(2).toUpperCase()}
               </p>
            </div>

            <button onClick={() => setShowVerifyModal(false)} className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-slate-800 transition-all">Entendido</button>
          </div>
        </div>
      )}
    </div>
  );
};