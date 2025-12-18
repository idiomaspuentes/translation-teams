import { useEffect, useState } from "react";

export default function BuscarTareasProyectos({ onChange }) {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    onChange(toggle);
  }, [toggle]);
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Buscar tareas..."
              className="border border-gray-300 rounded-lg px-3 py-2 flex-grow min-w-[300px]"
            />
            <select className="grow py-2 px-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Todos los estados</option>
              <option>Borrador</option>
              <option>En progreso</option>
              <option>Revisión</option>
              <option>Completado</option>
            </select>
            <select className="grow py-2 px-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Todos los asignados</option>
              <option>María García</option>
              <option>Juan López</option>
              <option>Carlos Ruiz</option>
              <option>Laura Silva</option>
            </select>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                setToggle(true);
              }}
              className={`${
                toggle ? "bg-blue-500" : "bg-white"
              } px-4 py-1 border border-l-lg border-gray-300 rounded-l-lg cursor-pointer text-sm`}
            >
              🌳
            </button>
            <button
              onClick={() => {
                setToggle(false);
              }}
              className={`${
                !toggle ? "bg-blue-500" : "bg-white"
              } px-4 py-1 border border-r-lg border-gray-300 rounded-r-lg cursor-pointer text-sm`}
            >
              📋
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
