export default function BuscarTareasProyectos({}) {
  return (
    <>
      <div className="bg-white m-4 p-4 rounded-lg shadow">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Buscar tareas..."
              className="border border-gray-300 rounded-lg px-3 py-2 flex-grow min-w-[200px]"
            />
            <select class="grow py-2 px-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Todos los estados</option>
              <option>Borrador</option>
              <option>En progreso</option>
              <option>Revisión</option>
              <option>Completado</option>
            </select>
            <select class="grow py-2 px-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Todos los asignados</option>
              <option>María García</option>
              <option>Juan López</option>
              <option>Carlos Ruiz</option>
              <option>Laura Silva</option>
            </select>
          </div>
          <div className="py-2 px-5 item-center justify-center flex rounded-lg border border-gray-300 divide-x divide-gray-300">
            <button className="bg-blue-500">🌳</button>
            <button className="bg-white">📋</button>
          </div>
        </div>
      </div>
    </>
  );
}
