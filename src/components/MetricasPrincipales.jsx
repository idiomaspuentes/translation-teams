export default function MetricasPrincipales({}) {
  return (
    <div className="rounded-lg shadow-lg border border-gray-100 p-8">
      <h1 className="font-medium text-xl mb-4">Métricas Principales</h1>
      <div className="grid grid-cols-4 gap-6 w-full">
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-blue-100 p-2 rounded-xl">📊</span>
            </span>
            <span className="font-bold text-3xl">75%</span>
            <span className="text-gray-500">Progreso completado</span>
            <span className="text-green-500 text-sm">↗ +15% esta semana</span>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-yellow-100 p-2 rounded-xl">⏱️</span>
            </span>
            <span className="font-bold text-3xl">42h</span>
            <span className="text-gray-500">Tiempo invertido</span>
            <span className="text-green-500 text-sm">↗ 84% del estimado</span>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-green-100 p-2 rounded-xl">✅</span>
            </span>
            <span className="font-bold text-3xl">98.2%</span>
            <span className="text-gray-500">Índice de calidad</span>
            <span className="text-green-500 text-sm">↗ +2.1% vs promedio</span>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-violet-100 p-2 rounded-xl">👥</span>
            </span>
            <span className="font-bold text-3xl">4</span>
            <span className="text-gray-500">Miembros activos</span>
            <span className="text-sm">→ 100% participación</span>
          </div>
        </div>
      </div>
    </div>
  );
}
