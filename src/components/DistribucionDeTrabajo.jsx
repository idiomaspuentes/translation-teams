export default function DistribucionDeTrabajo({}) {
  return (
    <div className="bg-white rounded-xl shadow border-1 border-gray-200">
      <div className="p-8">
        <h1 className="font-medium text-lg pb-6">Distribución de trabajo</h1>
        <div className="rounded-xl border-3 shadow border-dashed border-gray-200 bg-gray-50 py-22.5">
          <div className="text-center">
            <p className="text-gray-500 text-md">
              Gráfico circular - Distribución por tipo de tarea
            </p>
            <p className="text-gray-500 text-md">Traducción: 60%</p>
            <p className="text-gray-500 text-md">Revisión: 25%</p>
            <p className="text-gray-500 text-md">QA: 15%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
