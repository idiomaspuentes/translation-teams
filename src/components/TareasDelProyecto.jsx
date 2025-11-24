export default function TareasDelProyecto({
  tituloDelProyecto,
  tareas,
  subtareas,
}) {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Tareas del proyecto</h1>
          <div className="space-x-4">
            <button className="text-sm border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 cursor-pointer">
              Exportar
            </button>
            <button className="text-sm bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 cursor-pointer">
              + Nueva tarea
            </button>
          </div>
        </div>
        <div className="space-x-2">
          <span className="text-gray-500">{tituloDelProyecto}</span>
          <span className="text-gray-500">• {tareas}</span>
          <span className="text-gray-500">• {subtareas}</span>
        </div>
      </div>
    </>
  );
}
