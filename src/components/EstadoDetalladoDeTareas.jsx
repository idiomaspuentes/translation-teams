export default function EstadoDetalladoDeTareas({}) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-8">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium mb-6">
            Estado detallado de tareas
          </h1>
          <button className="border-1 border-gray-300 text-gray-600 font-medium rounded-lg py-3 px-6">
            Exportar lista
          </button>
        </div>
        <div className="grid grid-cols-8 bg-gray-100 px-6 py-4 gap-8">
          <span className="font-medium text-lg text-gray-600 col-span-2">
            Tarea
          </span>
          <span className="font-medium text-lg text-gray-600">Asignado</span>
          <span className="font-medium text-lg text-gray-600">Estado</span>
          <span className="font-medium text-lg text-gray-600">Progreso</span>
          <span className="font-medium text-lg text-gray-600">Palabras</span>
          <span className="font-medium text-lg text-gray-600">Tiempo</span>
          <span className="font-medium text-lg text-gray-600">Vencimiento</span>
        </div>
      </div>
    </>
  );
}
