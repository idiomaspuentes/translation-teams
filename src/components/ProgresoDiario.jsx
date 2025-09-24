export default function ProgresoDiario({}) {
  return (
    <div className="rounded-xl shadow-lg border-1 border-gray-200 m-28">
      <div className="px-12 py-8">
        <div className="flex justify-between space-y-6">
          <div>
            <h1 className="font-medium text-2xl">Progreso diario</h1>
          </div>
          <div className="space-x-2">
            <button className="text-white bg-blue-500 py-1 px-4 rounded-full font-medium cursor-pointer">
              Palabras
            </button>
            <button className="bg-gray-100 py-1 px-4 rounded-full font-medium cursor-pointer">
              Tareas
            </button>
            <button className="bg-gray-100 py-1 px-4 rounded-full font-medium cursor-pointer">
              Horas
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow-lg border-3 border-dashed border-gray-200 bg-gray-50 py-40">
          <div className="text-center">
            <p className="text-gray-500 text-xl">
              Gráficos de líneas - Progreso diario del proyecto
            </p>
            <p className="text-gray-500 text-lg">
              Integración con recharts en implementación real
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
