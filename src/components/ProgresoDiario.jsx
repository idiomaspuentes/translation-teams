export default function ProgresoDiario({}) {
  return (
    <div className="bg-white rounded-xl shadow border-1 border-gray-200">
      <div className="p-8">
        <div className="flex justify-between space-y-6">
          <div>
            <h1 className="font-medium text-lg">Progreso diario</h1>
          </div>
          <div className="space-x-2">
            <button className="text-white text-xs bg-blue-500 py-0.5 px-3 rounded-full cursor-pointer">
              Palabras
            </button>
            <button className="bg-gray-100 text-xs py-0.5 px-3 rounded-full cursor-pointer">
              Tareas
            </button>
            <button className="bg-gray-100 text-xs py-0.5 px-3 rounded-full cursor-pointer">
              Horas
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow border-3 border-dashed border-gray-200 bg-gray-50 py-32">
          <div className="text-center">
            <p className="text-gray-500 text-md">
              Gráfico de líneas - Progreso diario del proyecto
            </p>
            <p className="text-gray-500 text-sm">
              Integración con recharts en implementación real
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
