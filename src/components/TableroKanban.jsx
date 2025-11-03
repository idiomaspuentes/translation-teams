export default function tableroKanban({}) {
  return (
    <>
      <div className="bg-white m-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Tablero kanban</h1>
          </div>
          <div className="space-x-4 flex">
            <select class="grow py-2 px-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Paquete de traducción - Marcos</option>
              <option>Paquete de traducción - 1 Juan</option>
              <option>Paquete de traducción - Santiago</option>
            </select>
            <button className="text-gray-700 text-sm border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Configurar columnas
            </button>
            <div>
              <button className="text-white text-sm bg-blue-500 rounded-lg py-2 px-4 hover:bg-blue-600 cursor-pointer">
                + Nueva tarea
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="space-x-4 flex">
            <span className="bg-gray-100 py-1 px-3 text-sm rounded-full hover:bg-blue-500 hover:text-white border border-gray-200 cursor-pointer">
              Todas
            </span>
            <span className="bg-gray-100 py-1 px-3 text-sm rounded-full hover:bg-blue-500 hover:text-white border border-gray-200 cursor-pointer">
              Mis tareas
            </span>
            <span className="bg-gray-100 py-1 px-3 text-sm rounded-full hover:bg-blue-500 hover:text-white border border-gray-200 cursor-pointer">
              Alta prioridad
            </span>
            <span className="bg-gray-100 py-1 px-3 text-sm rounded-full hover:bg-blue-500 hover:text-white border border-gray-200 cursor-pointer">
              Vencimiento Próximo
            </span>
            <span className="bg-gray-100 py-1 px-3 text-sm rounded-full hover:bg-blue-500 hover:text-white border border-gray-200 cursor-pointer">
              Bloqueadas
            </span>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-gray-200 w-full"></div>
    </>
  );
}
