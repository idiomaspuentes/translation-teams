export default function MetricasPrincipales({
  porcentajeProgreso,
  variacionProgreso,
  horasInvertidas,
  avanceTiempo,
  porcentajeCalidad,
  avanceCalidad,
  numeroMiembrosActivos,
  porcentajeMiembrosActivos,
}) {
  return (
    <div className="bg-white rounded-xl shadow border-1 border-gray-200 p-8">
      <h1 className="font-medium text-xl mb-4">Métricas Principales</h1>
      <div className="grid grid-cols-4 gap-6 w-full">
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-blue-100 p-2 rounded-xl">📊</span>
            </span>
            <span className="font-bold text-3xl">{porcentajeProgreso}</span>
            <span className="text-gray-500 text-sm">Progreso completado</span>
            <span className="text-green-600 text-xs">{variacionProgreso}</span>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-yellow-100 p-2 rounded-xl">⏱️</span>
            </span>
            <span className="font-bold text-3xl">{horasInvertidas}</span>
            <span className="text-gray-500 text-sm">Tiempo invertido</span>
            <span className="text-green-600 text-xs">{avanceTiempo}</span>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-green-100 p-2 rounded-xl">✅</span>
            </span>
            <span className="font-bold text-3xl">{porcentajeCalidad}%</span>
            <span className="text-gray-500 text-sm">Índice de calidad</span>
            <span className="text-green-600 text-xs">{avanceCalidad}</span>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 px-12 py-8 rounded-xl">
          <div className="flex flex-col text-center space-y-2">
            <span className="flex justify-center">
              <span className="text-2xl bg-violet-100 p-2 rounded-xl">👥</span>
            </span>
            <span className="font-bold text-3xl">{numeroMiembrosActivos}</span>
            <span className="text-gray-500 text-sm">Miembros activos</span>
            <span className="text-xs">{porcentajeMiembrosActivos}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
