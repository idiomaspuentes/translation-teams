import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

export default function BotoneraReportes() {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const exportarDatos = () => {
    const blob = new Blob(['Este es un ejemplo de reporte.'], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'reporte.txt';
    link.click();
  };

  const programarReporte = () => {
    alert('Reporte programado exitosamente 🚀');
  };

  return (
    <div className="flex flex-wrap gap-3 items-center relative z-10">
      {/* Selector de fecha */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-800 shadow-sm hover:bg-gray-50 transition"
        >
          <Calendar className="w-4 h-4 text-purple-500" />
          <span>{startDate.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <span className="-ml-1">▼</span>
        </button>

        {isOpen && (
          <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setIsOpen(false);
              }}
              inline
            />
          </div>
        )}
      </div>

      {/* Exportar */}
      <button
        onClick={exportarDatos}
        className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
      >
        Exportar
      </button>

      {/* Programar Reporte */}
      <button
        onClick={programarReporte}
        className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition"
      >
        Programar Reporte
      </button>
    </div>
  );
}