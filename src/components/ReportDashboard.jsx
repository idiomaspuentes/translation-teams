import React from 'react';
import { ReportCard } from './ReportCard';
import { BarChart4, FileText, Timer, CheckCircle } from 'lucide-react';

export const ReportDashboard = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ReportCard
          icon={<BarChart4 className="text-indigo-500" />}
          value="24"
          label="Proyectos Completados"
          change="+15% vs mes anterior"
          changeColor="text-green-500"
        />
        <ReportCard
          icon={<FileText className="text-emerald-500" />}
          value="125,430"
          label="Palabras Traducidas"
          change="+8% vs mes anterior"
          changeColor="text-green-500"
        />
        <ReportCard
          icon={<Timer className="text-yellow-500" />}
          value="4.2"
          label="Días Promedio Entrega"
          change="-12% vs mes anterior"
          changeColor="text-red-500"
        />
        <ReportCard
          icon={<CheckCircle className="text-green-600" />}
          value="96.8%"
          label="Índice de Calidad"
          change="+2% vs mes anterior"
          changeColor="text-green-500"
        />
      </div>
    </div>
  );
};
