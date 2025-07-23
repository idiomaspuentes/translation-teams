import React from 'react';

export default function LayoutInterno() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6 font-sans">

      {/* Encabezado */}
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Resumen general de proyectos y actividad</p>
      </header>

      {/* Tarjetas de resumen */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ResumenCard titulo="Proyectos Activos" valor="24" cambio="+12% este mes" cambioColor="text-green-500" />    
      </section>

      {/* Filtros */}
      <section className="flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="border border-gray-300 rounded px-3 py-2 flex-grow min-w-[200px]"
        />
        <select className="border border-gray-300 rounded px-3 py-2">
          <option>Todos los estados</option>
        </select>
        <select className="border border-gray-300 rounded px-3 py-2">
          <option>Todos los idiomas</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Nuevo Proyecto
        </button>
      </section>

      {/* Tarjetas de proyectos */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProyectoCard
          titulo="Manual de Usuario - App Mobile"
          cliente="TechCorp"
          idioma="ES → EN"
          estado="Activo"
          progreso="75"
          palabras="1,250"
          traductores="3"
          dias="5"
        />
        
      </section>
    </div>
  );
}

function ResumenCard({ titulo, valor, cambio, cambioColor }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col">
      <span className="text-2xl font-bold text-gray-900">{valor}</span>
      <span className="text-sm text-gray-500">{titulo}</span>
      <span className={`text-sm ${cambioColor}`}>{cambio}</span>
    </div>
  );
}

function ProyectoCard({ titulo, cliente, idioma, estado, progreso, palabras, traductores, dias }) {
  const estadoColor = {
    Activo: 'bg-green-100 text-green-700',
    Revisión: 'bg-yellow-100 text-yellow-700',
    Completado: 'bg-blue-100 text-blue-700',
  }[estado] || 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{titulo}</h3>
        <span className={`text-xs px-2 py-1 rounded ${estadoColor}`}>{estado}</span>
      </div>
      <p className="text-sm text-gray-600">{idioma} | Cliente: {cliente}</p>
      <div className="space-y-1">
        <span className="text-sm text-gray-500">Progreso General</span>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div className="bg-blue-500 h-2 rounded" style={{ width: `${progreso}%` }} />
        </div>
        <div className="text-xs text-gray-700 flex justify-between">
          <span>{palabras} Palabras</span>
          <span>{traductores} Traductores</span>
          <span>{dias} días rest.</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
          Ver Detalles
        </button>
        <button className="border text-sm px-3 py-1 rounded text-gray-700 border-gray-300">
          {estado === 'Completado' ? 'Descargar' : 'Kanban'}
        </button>
      </div>
    </div>
  );
}
