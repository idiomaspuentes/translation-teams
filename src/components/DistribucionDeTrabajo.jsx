export default function DistribucionDeTrabajo({}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-12 space-y-8">
      <h1 className="font-medium text-2xl">Distribución de trabajo</h1>
      <div className="rounded-xl shadow-lg border-3 border-dashed border-gray-200 bg-gray-50 py-40">
        <div className="text-center">
          <p className="text-gray-500 text-xl">
            Gráfico circular - Distribución por tipo de tarea
          </p>
          <p className="text-gray-500 text-lg">Traducción: 60%</p>
          <p className="text-gray-500 text-lg">Revisión: 25%</p>
          <p className="text-gray-500 text-lg">QA: 15%</p>
        </div>
      </div>
    </div>
  );
}
