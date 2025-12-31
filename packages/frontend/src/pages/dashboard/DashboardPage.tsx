'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Settings,
  Bell,
  User,
  Search,
  Plus,
  Filter,
  Download,
  Check,
  X,
  ChevronRight,
  LogOut,
  Calendar // Añadido para el formulario
} from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- NUEVO COMPONENTE LOGO ---
const Logo = () => (
  <div className="flex items-center gap-1">
    <span className="text-2xl font-bold text-black tracking-tight">TrustBid</span>
    <span className="text-blue-500 text-2xl font-bold align-top leading-none -mt-2">*</span>
  </div>
);

// --- TUS TIPOS Y DATOS ORIGINALES ---
type View = 'projects' | 'reportes' | 'configuration' | 'file';
type ProjectTab = 'overview' | 'disbursements' | 'expenses';

interface Project {
  id: string;
  title: string;
  organization: string;
  status: 'Activo' | 'Borrador' | 'Cerrado';
  budget: number;
  executed: number;
  description: string;
  year: number;
}

interface Report {
  id: string;
  project: string;
  period: string;
  date: string;
  status: 'Publicado' | 'Pendiente';
}

interface Disbursement {
  id: string;
  date: string;
  amount: number;
  concept: string;
  status: string;
}

interface Expense {
  id: string;
  date: string;
  amount: number;
  category: string;
  concept: string;
}

const projects: Project[] = [
  { id: '1', title: 'Infraestructura Digital 2024', organization: 'Ministerio de Tecnología', status: 'Activo', budget: 5000000, executed: 1250000, description: 'Modernización de sistemas de gobierno digital y plataformas...', year: 2024 },
  { id: '2', title: 'Educación Rural', organization: 'Secretaría de Educación', status: 'Borrador', budget: 2000000, executed: 450000, description: 'Programa de mejora de infraestructura educativa en zonas rurales', year: 2024 },
  { id: '3', title: 'Salud Comunitaria 2023', organization: 'Ministerio de Salud', status: 'Cerrado', budget: 3500000, executed: 3500000, description: 'Implementación de centros de salud comunitarios', year: 2023 }
];

const reports: Report[] = [
  { id: '1', project: 'Infraestructura Digital 2024', period: 'Q1 2024', date: '4/4/2024', status: 'Publicado' },
  { id: '2', project: 'Infraestructura Digital 2024', period: 'Q2 2024', date: '9/7/2024', status: 'Publicado' }
];

const disbursements: Disbursement[] = [
  { id: '1', date: '2024-01-15', amount: 500000, concept: 'Pago Fase 1', status: 'Completado' },
  { id: '2', date: '2024-03-20', amount: 450000, concept: 'Pago Fase 2', status: 'Completado' },
  { id: '3', date: '2024-06-10', amount: 300000, concept: 'Pago Fase 3', status: 'Pendiente' }
];

const expenses: Expense[] = [
  { id: '1', date: '2024-01-10', amount: 125000, category: 'Personal', concept: 'Salarios equipo técnico' },
  { id: '2', date: '2024-02-05', amount: 85000, category: 'Equipos', concept: 'Compra servidores' },
  { id: '3', date: '2024-03-12', amount: 200000, category: 'Infraestructura', concept: 'Desarrollo plataforma' }
];

const expenseData = [
  { name: 'Personal', value: 400000 },
  { name: 'Equipos', value: 300000 },
  { name: 'Infraestructura', value: 280000 },
  { name: 'Otros', value: 220000 }
];

const timelineData = [
  { month: 'Ene', amount: 125000 },
  { month: 'Feb', amount: 210000 },
  { month: 'Mar', amount: 410000 },
  { month: 'Abr', amount: 590000 },
  { month: 'May', amount: 770000 },
  { month: 'Jun', amount: 1070000 }
];

const COLORS = ['#3B60E4', '#70A9A1', '#CFD7C7', '#7765E3'];

// --- COMPONENTES AUXILIARES ---

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const colors: Record<string, { bg: string; text: string }> = {
    'Activo': { bg: 'bg-green-100', text: 'text-green-700' },
    'Borrador': { bg: 'bg-amber-100', text: 'text-amber-700' },
    'Cerrado': { bg: 'bg-gray-100', text: 'text-gray-700' },
    'Publicado': { bg: 'bg-green-100', text: 'text-green-700' },
    'Pendiente': { bg: 'bg-yellow-100', text: 'text-yellow-700' },
    'Completado': { bg: 'bg-green-100', text: 'text-green-700' }
  };
  const color = colors[status] || { bg: 'bg-gray-100', text: 'text-gray-700' };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color.bg} ${color.text}`}>
      {status}
    </span>
  );
};

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = 
  ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700"><X size={20} /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onSelect: (id: string) => void }> = ({ project, onSelect }) => {
  const percentage = Math.round((project.executed / project.budget) * 100);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
          <p className="text-gray-500 text-sm">{project.organization}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-700">Ejecución</span>
          <span className="font-semibold">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm mb-4">
        <span className="text-gray-600">Presupuesto: <span className="font-semibold">${(project.budget / 1000000).toFixed(1)}M US$</span></span>
      </div>
      <button onClick={() => onSelect(project.id)} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition">
        Ver detalle
      </button>
    </div>
  );
};

const ProjectDetail: React.FC<{ projectId: string; onBack: () => void }> = ({ projectId, onBack }) => {
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');
  const [showDisbursementForm, setShowDisbursementForm] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const project = projects.find(p => p.id === projectId);
  if (!project) return null;

  return (
    <div>
      <button onClick={onBack} className="mb-6 text-blue-500 hover:text-blue-700 font-medium flex items-center gap-2">← Volver a Proyectos</button>
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div><h1 className="text-3xl font-bold mb-2">{project.title}</h1><p className="text-gray-600">{project.organization}</p></div>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-gray-700 mb-6">{project.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg"><p className="text-gray-600 text-sm">Presupuesto Total</p><p className="text-2xl font-bold text-blue-600">${(project.budget / 1000000).toFixed(1)}M</p></div>
          <div className="bg-gray-50 p-4 rounded-lg"><p className="text-gray-600 text-sm">Ejecutado</p><p className="text-2xl font-bold text-green-600">${(project.executed / 1000000).toFixed(1)}M</p></div>
        </div>
      </div>
      <div className="bg-white rounded-lg">
        <div className="flex border-b">
          {(['overview', 'disbursements', 'expenses'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-4 font-medium border-b-2 transition ${activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}>
              {tab === 'overview' && 'Resumen'}{tab === 'disbursements' && 'Desembolsos'}{tab === 'expenses' && 'Gastos'}
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Gastos por Categoría</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart><Pie data={expenseData} cx="50%" cy="50%" labelLine={false} label={{ fontSize: 12 }} dataKey="value">{expenseData.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}</Pie><Tooltip formatter={(value) => `$${value}`} /></PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Evolución de Gastos</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timelineData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip formatter={(value) => `$${value}`} /><Line type="monotone" dataKey="amount" stroke="#3B82F6" strokeWidth={2} /></LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          {activeTab === 'disbursements' && (
            <div>
              <div className="flex justify-between items-center mb-4"><h3 className="font-semibold">Desembolsos</h3><button onClick={() => setShowDisbursementForm(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"><Plus size={16} /> Registrar</button></div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b"><tr><th className="px-4 py-3 text-left font-semibold text-gray-700">Fecha</th><th className="px-4 py-3 text-left font-semibold text-gray-700">Concepto</th><th className="px-4 py-3 text-right font-semibold text-gray-700">Monto</th><th className="px-4 py-3 text-left font-semibold text-gray-700">Estado</th></tr></thead>
                <tbody>{disbursements.map(d => (<tr key={d.id} className="border-b hover:bg-gray-50"><td className="px-4 py-3">{d.date}</td><td className="px-4 py-3">{d.concept}</td><td className="px-4 py-3 text-right font-semibold">${(d.amount / 1000).toFixed(0)}K</td><td className="px-4 py-3"><StatusBadge status={d.status} /></td></tr>))}</tbody>
              </table>
            </div>
          )}
          {activeTab === 'expenses' && (
            <div>
              <div className="flex justify-between items-center mb-4"><h3 className="font-semibold">Gastos</h3><button onClick={() => setShowExpenseForm(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"><Plus size={16} /> Registrar</button></div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b"><tr><th className="px-4 py-3 text-left font-semibold text-gray-700">Fecha</th><th className="px-4 py-3 text-left font-semibold text-gray-700">Categoría</th><th className="px-4 py-3 text-left font-semibold text-gray-700">Concepto</th><th className="px-4 py-3 text-right font-semibold text-gray-700">Monto</th></tr></thead>
                <tbody>{expenses.map(e => (<tr key={e.id} className="border-b hover:bg-gray-50"><td className="px-4 py-3">{e.date}</td><td className="px-4 py-3">{e.category}</td><td className="px-4 py-3">{e.concept}</td><td className="px-4 py-3 text-right font-semibold">${(e.amount / 1000).toFixed(0)}K</td></tr>))}</tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      <Modal isOpen={showDisbursementForm} onClose={() => setShowDisbursementForm(false)} title="Registrar Desembolso">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label><input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Concepto</label><input type="text" placeholder="Descripción" className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Monto</label><input type="number" placeholder="0.00" className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
          <button onClick={() => setShowDisbursementForm(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">Guardar</button>
        </div>
      </Modal>

      <Modal isOpen={showExpenseForm} onClose={() => setShowExpenseForm(false)} title="Registrar Gasto">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label><input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label><select className="w-full border border-gray-300 rounded-lg px-3 py-2"><option>Personal</option><option>Equipos</option></select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Concepto</label><input type="text" placeholder="Descripción" className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Monto</label><input type="number" placeholder="0.00" className="w-full border border-gray-300 rounded-lg px-3 py-2" /></div>
          <button onClick={() => setShowExpenseForm(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">Guardar</button>
        </div>
      </Modal>
    </div>
  );
};

const Sidebar: React.FC<{ currentView: View; setCurrentView: (view: View) => void }> = ({ currentView, setCurrentView }) => {
  const navigate = useNavigate();
  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 flex flex-col h-screen">
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="space-y-2 flex-1">
        {[
          { id: 'projects', icon: FileText, label: 'Proyectos', hasArrow: false },
          { id: 'file', icon: FileText, label: 'File', hasArrow: true },
          { id: 'reportes', icon: FileText, label: 'Reportes', hasArrow: true },
          { id: 'configuration', icon: Settings, label: 'Configuración', hasArrow: true }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id as View)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
              currentView === item.id ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} />
              {item.label}
            </div>
            {item.hasArrow && <ChevronRight size={16} className={currentView === item.id ? 'text-blue-700' : 'text-gray-400'} />}
          </button>
        ))}
      </nav>
      <div className="pt-4 border-t border-gray-100">
        <button 
          onClick={() => navigate('/login')} 
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
        >
          <LogOut size={20} />
          <span className="font-medium">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input type="text" placeholder="Buscar proyectos, reportes..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-gray-900"><Bell size={24} /></button>
        <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600"><User size={20} /></button>
      </div>
    </div>
  );
};

export default function DashboardApp() {
  const [currentView, setCurrentView] = useState<View>('projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [verifyModal, setVerifyModal] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showCreateReport, setShowCreateReport] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos los estados');

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'Todos los estados' || p.status === statusFilter)
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-8">
          {selectedProjectId && currentView === 'projects' ? (
            <ProjectDetail projectId={selectedProjectId} onBack={() => setSelectedProjectId(null)} />
          ) : (
            <>
              {currentView === 'projects' && (
                <div>
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Mis Proyectos</h1>
                    <p className="text-gray-600">Gestiona y monitorea todos tus proyectos con transparencia blockchain</p>
                  </div>
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input type="text" placeholder="Buscar proyectos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-50">
                      <Filter size={18} className="text-gray-600" />
                      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border-0 outline-none bg-transparent">
                        <option>Todos los estados</option><option>Activo</option><option>Borrador</option><option>Cerrado</option>
                      </select>
                    </div>
                    <button 
                      onClick={() => setShowCreateProject(true)} 
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2"
                    >
                      <Plus size={18} /> Crear proyecto
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (<ProjectCard key={project.id} project={project} onSelect={setSelectedProjectId} />))}
                  </div>
                </div>
              )}
              {currentView === 'reportes' && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div><h1 className="text-3xl font-bold mb-2">Reportes</h1><p className="text-gray-600">Genera y gestiona reportes de cierre de proyectos</p></div>
                    <button 
                      onClick={() => setShowCreateReport(true)} 
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2"
                    >
                      <Plus size={18} /> Crear reporte
                    </button>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b"><tr><th className="px-6 py-4 text-left font-semibold text-gray-700">Proyecto</th><th className="px-6 py-4 text-left font-semibold text-gray-700">Periodo</th><th className="px-6 py-4 text-left font-semibold text-gray-700">Fecha de publicación</th><th className="px-6 py-4 text-left font-semibold text-gray-700">Estado</th><th className="px-6 py-4 text-left font-semibold text-gray-700">Acciones</th></tr></thead>
                      <tbody>
                        {reports.map(report => (
                          <tr key={report.id} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{report.project}</td><td className="px-6 py-4">{report.period}</td><td className="px-6 py-4">{report.date}</td><td className="px-6 py-4"><StatusBadge status={report.status} /></td>
                            <td className="px-6 py-4 flex gap-3">
                              <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1"><Download size={16} /> PDF</button>
                              <button onClick={() => setVerifyModal(true)} className="text-gray-600 hover:text-gray-900 flex items-center gap-1"><Check size={16} /> Verificar</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {currentView === 'configuration' && (
                <div><h1 className="text-3xl font-bold mb-2">Configuración</h1><p className="text-gray-600 mb-8">Gestiona tu cuenta y preferencias</p><div className="bg-white rounded-lg p-6 text-gray-600">Funcionalidad en desarrollo...</div></div>
              )}
              {currentView === 'file' && (
                <div><h1 className="text-3xl font-bold mb-2">Archivos</h1><p className="text-gray-600 mb-8">Gestión de documentos del sistema</p><div className="bg-white rounded-lg p-6 text-gray-600">Módulo de archivos disponible próximamente.</div></div>
              )}
            </>
          )}
        </div>
      </main>

      {/* MODAL CREAR PROYECTO ACTUALIZADO */}
      <Modal isOpen={showCreateProject} onClose={() => setShowCreateProject(false)} title="Crear Nuevo Proyecto">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Título del Proyecto</label>
              <input type="text" placeholder="Ej: Modernización Vial Fase I" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Entidad / Beneficiario</label>
              <input type="text" placeholder="Nombre de la institución" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>Infraestructura</option>
                <option>Educación</option>
                <option>Salud</option>
                <option>Tecnología</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Presupuesto Total (US$)</label>
              <input type="number" placeholder="0.00" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Inicio</label>
              <div className="relative">
                <Calendar className="absolute right-3 top-2.5 text-gray-400" size={18} />
                <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Fin</label>
              <div className="relative">
                <Calendar className="absolute right-3 top-2.5 text-gray-400" size={18} />
                <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Detalles del proyecto..."></textarea>
          </div>
          <button onClick={() => setShowCreateProject(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">Crear Proyecto</button>
        </div>
      </Modal>

      {/* MODAL CREAR REPORTE ACTUALIZADO */}
      <Modal isOpen={showCreateReport} onClose={() => setShowCreateReport(false)} title="Crear Nuevo Reporte">
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Proyecto</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                {projects.map(p => <option key={p.id}>{p.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Periodo del Reporte</label>
              <input type="text" placeholder="Ej: Q3 2024" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Anexos del Reporte</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Extractos Bancarios',
                'Facturas y Recibos',
                'Registro de Actividades',
                'Evidencia Fotográfica',
                'Listas de Asistencia',
                'Certificaciones de Obra'
              ].map((anexo) => (
                <label key={anexo} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer border border-transparent hover:border-gray-200">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">{anexo}</span>
                </label>
              ))}
            </div>
          </div>

          <button onClick={() => setShowCreateReport(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">Generar Reporte</button>
        </div>
      </Modal>

      <Modal isOpen={verifyModal} onClose={() => setVerifyModal(false)} title="Verificar Reporte">
        <div className="space-y-4"><div className="bg-green-50 border border-green-200 rounded-lg p-4"><p className="text-green-800 font-medium">✓ Reporte verificado exitosamente</p><p className="text-green-700 text-sm mt-1">Hash blockchain: 0x7a9c4...2f8d</p></div><button onClick={() => setVerifyModal(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">Cerrar</button></div>
      </Modal>
    </div>
  );
}