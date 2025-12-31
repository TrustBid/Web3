import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const countryData = [
  { name: 'Argentina', informes: 32, origen: 78, gastos: 65 },
  { name: 'Chile', informes: 38, origen: 82, gastos: 72 },
  { name: 'Colombia', informes: 74, origen: 85, gastos: 70 },
  { name: 'Costa Rica', informes: 45, origen: 68, gastos: 58 },
];

interface ChartProps {
  title: string;
  dataKey: "informes" | "origen" | "gastos"; // Se agregó "gastos" aquí para corregir el error
}

export const TransparencyChart = ({ title, dataKey }: ChartProps) => {
  return (
    <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 shadow-2xl w-full h-[450px] flex flex-col justify-center">
      <div className="mb-6 text-center">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-cyan-400 text-[10px] uppercase tracking-widest font-bold mt-2">
          Déficit de Transparencia
        </p>
      </div>
      
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={countryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
            <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} dy={10} />
            <YAxis stroke="#525252" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} domain={[0, 100]} />
            <Tooltip 
              cursor={{ fill: '#ffffff0a' }}
              contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '12px', color: '#fff' }}
              formatter={(value) => [`${value}%`, 'Falta de Transparencia']}
            />
            <Bar dataKey={dataKey} fill="#22d3ee" radius={[6, 6, 0, 0]} barSize={55} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-[10px] text-gray-600 mt-6 italic">
        Fuente: AFE Colombia - Índice Capacidad Organizacional 2023
      </p>
    </div>
  );
};