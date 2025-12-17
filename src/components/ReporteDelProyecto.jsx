export default function ReporteDelProyecto({
  nombreDelProyecto,
  estado,
  progreso,
  dias,
  presupuesto,
}) {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reporte del proyecto</h1>
        </div>
        <div className="space-x-4 flex">
          <select className="grow py-2 px-4 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>
              <span>📅</span>15 Nov - 30 Nov 2025
            </option>
            <option>
              <span>📅</span>16 Nov - 01 Dic 2025
            </option>
          </select>
          <button className="text-gray-700 border border-gray-300 rounded-lg py-2 px-6 cursor-pointer">
            Exportar PDF
          </button>
          <button className="text-white bg-blue-500 rounded-lg py-2 px-6 cursor-pointer">
            Programar envío
          </button>
        </div>
      </div>
      <h2 className="text-gray-600">{nombreDelProyecto}</h2>
      <div className="inline-flex gap-30 mt-6">
        <div className="flex flex-col">
          <span className="text-gray-600 font-medium">Estado del Proyecto</span>
          <span className="text-yellow-500 font-medium">{estado}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 font-medium">Progreso General</span>
          <span className="font-medium">{progreso}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 font-medium">Días Transcurridos</span>
          <span className="font-medium">{dias}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 font-medium">
            Presupuesto Utilizado
          </span>
          <span className="font-medium">{presupuesto}</span>
        </div>
      </div>
    </div>
  );
}
