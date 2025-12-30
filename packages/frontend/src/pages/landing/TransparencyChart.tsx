
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';

// Datos basados en la imagen que subiste
const data = [
  { country: 'Argentina', anuales: 32, gastos: 65, donativos: 78 },
  { country: 'Chile', anuales: 38, gastos: 72, donativos: 82 },
  { country: 'Colombia', anuales: 74, gastos: 70, donativos: 85 },
  { country: 'Costa Rica', anuales: 45, gastos: 58, donativos: 68 },
];

// Colores alineados con tu paleta TrustBid
const colors = {
  anuales: '#2563eb',   // blue-600
  gastos: '#94a3b8',    // slate-400 (gris neutro)
  donativos: '#06b6d4', // cyan-500
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-2xl backdrop-blur-md">
        <p className="text-white font-bold mb-2 text-sm">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex justify-between items-center gap-4 text-xs mb-1">
            <span style={{ color: entry.color }}>{entry.name}:</span>
            <span className="font-mono font-bold text-white">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const TransparencyChart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full h-[450px] bg-gradient-to-br from-slate-800 to-slate-950 p-6 rounded-2xl border border-slate-700 shadow-2xl"
    >
      <div className="mb-6">
        <h3 className="text-white text-lg font-semibold tracking-tight">
          Índice de Opacidad en Fondos
        </h3>
        <p className="text-slate-400 text-xs">
          % de instituciones que NO divulgan información crítica
        </p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          barGap={6}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
          <XAxis 
            dataKey="country" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 10 }}
            tickFormatter={(v) => `${v}%`}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff08' }} />
          <Legend 
            verticalAlign="bottom"
            iconType="circle"
            content={({ payload }) => (
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
                {payload?.map((entry: any, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                      {entry.value.replace('NO publica ', '')}
                    </span>
                  </div>
                ))}
              </div>
            )}
          />
          
          <Bar 
            name="NO publica Informes Anuales" 
            dataKey="anuales" 
            fill={colors.anuales} 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            name="NO publica Resúmenes de Gastos" 
            dataKey="gastos" 
            fill={colors.gastos} 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            name="NO publica Origen Donativos" 
            dataKey="donativos" 
            fill={colors.donativos} 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default TransparencyChart;