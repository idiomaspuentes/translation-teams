const coloresStatus = {
  Alta: "text-red-600 bg-red-100",
  Media: "text-amber-600 bg-amber-100",
  Baja: "text-green-600 bg-green-100",
};

const colores2Status = {
  Completado: "text-red-600 bg-red-100",
  "En progreso": "text-amber-600 bg-amber-100",
  Revisión: "text-green-600 bg-green-100",
  Borrador: "text-gray-600 bg-gray-100",
};

import { Strikethrough } from "lucide-react";
import { useState } from "react";

export default function SubtareaProyecto({
  listo,
  titulo,
  subtitulo,
  subtitulo2,
  iniciales,
  asignado,
  estado,
  boton1,
  boton2,
  boton3,
}) {
  const [done, setDone] = useState(listo);
  return (
    <>
      <div className="flex justify-between">
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
              className={`ms-2 text-md font-medium text-gray-500 ${
                done && "line-through"
              }`}
            >
              {titulo}
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <div className="text-gray-500 text-xs">{subtitulo}</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">{subtitulo2}</div>
            </div>
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
        <div>
          <button
            className={`font-medium text-xs py-1 px-3 rounded-3xl me-2 cursor-pointer ${coloresStatus[estado]}`}
          >
            {estado}
          </button>
          <button className="text-green-700 font-medium text-sm bg-green-100 rounded-3xl py-1 px-3 me-2 cursor-pointer">
            {boton1}
          </button>
          <button className="text-gray-500 font-medium text-sm bg-white rounded-3xl py-1 px-3 me-2 border border-gray-300 cursor-pointer">
            {boton2}
          </button>
          <button className="bg-white rounded-lg text-xs py-1 px-3 me-2 border border-gray-300 cursor-pointer">
            {boton3}
          </button>
        </div>
      </div>
    </>
  );
}
