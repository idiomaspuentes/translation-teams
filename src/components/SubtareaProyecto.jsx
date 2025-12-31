const coloresStatus = {
  Alta: "text-red-600 bg-red-200",
  Media: "text-orange-600 bg-orange-200",
  Baja: "text-green-600 bg-green-100",
};

const coloresStatus2 = {
  Completado: "text-green-800 bg-green-100",
  "En progreso": "text-blue-800 bg-blue-100",
  Revisión: "text-amber-800 bg-amber-100",
  Borrador: "text-gray-500 bg-gray-100",
};

import { useState } from "react";
import { Link } from "react-router-dom";

export default function SubtareaProyecto({
  listo,
  tarea,
  subtitulo,
  subtitulo2,
  iniciales,
  asignado,
  prioridad,
  estado,
  vencimiento,
}) {
  const [done, setDone] = useState(listo);
  return (
    <>
      <div className="flex justify-between border-b border-gray-100 py-4">
        <div>
          <div className="flex items-center">
            <input
              id="mi-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-blue-100 border-gray-300 rounded focus:ring-blue-500"
              checked={done}
              onChange={() => setDone(!done)}
            />
            <label
              for="mi-checkbox"
              className={`ms-2 text-md font-medium ${
                done && "line-through text-gray-500"
              }`}
            >
              {tarea}
            </label>
          </div>
          <div className="flex space-x-4 items-center">
            <div>
              <div className="text-gray-500 font-semibold text-xs">
                {subtitulo}
              </div>
            </div>
            <span className="text-gray-500">•</span>
            <div>
              <div className="text-gray-500 text-xs">{subtitulo2}</div>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex gap-2">
              <div>
                <span className="flex aspect-square">
                  <span className="text-white text-xs bg-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-full font-bold w-5 h-5 aspect-square flex justify-center items-center">
                    {iniciales}
                  </span>
                </span>
              </div>
              <div>
                <div className="text-gray-500 text-xs mt-1">{asignado}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            className={`font-semibold  text-xs py-0.5 px-2 rounded-3xl cursor-pointer ${coloresStatus[prioridad]}`}
          >
            {prioridad}
          </button>
          <button
            className={`font-semibold text-xs rounded-3xl py-1 px-3 cursor-pointer ${coloresStatus2[estado]}`}
          >
            {estado}
          </button>
          <button className="text-gray-600  text-xs bg-white rounded-3xl py-1 px-3">
            {vencimiento}
          </button>
          <Link
            to="/subtareas"
            className="bg-white rounded-lg text-xs py-1 px-3 border border-gray-300 cursor-pointer"
            reloadDocument
          >
            Ver
          </Link>
          {!done && (
            <button className="bg-blue-500 text-white rounded-lg text-xs py-1 px-3 border border-gray-300 cursor-pointer">
              Editar
            </button>
          )}
        </div>
      </div>
    </>
  );
}
