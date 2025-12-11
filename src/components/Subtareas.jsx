import { useState } from "react";

function Subtarea({
  listo,
  titulo,
  subtitulo,
  subtitulo2,
  iniciales,
  asignado,
}) {
  const [done, setDone] = useState(listo);
  return (
    <>
      <div className="flex justify-between bg-gray-50 rounded-lg border border-gray-100 p-4 items-center">
        <div>
          <div className="flex items-center">
            <input
              id="mi-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-blue-100 border-gray-300 rounded focus:ring-blue-500"
              checked={done}
              onChange={() => setDone(!done)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            for="mi-checkbox"
            className={`ms-2 text-md font-medium ${
              done && "line-through text-gray-500"
            }`}
          >
            {titulo}
          </label>
          <div className="flex space-x-2 items-center">
            <div>
              <div className="text-gray-500 text-xs">{subtitulo}</div>
            </div>
            <span className="text-gray-500">•</span>
            <div>
              <div className="text-gray-500 text-xs">{subtitulo2}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-2">
            <div>
              <span className="flex aspect-square">
                <span className="text-white text-xs bg-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-full font-bold w-5 h-5 aspect-square flex justify-center items-center">
                  {iniciales}
                </span>
              </span>
            </div>
            <div>
              <div className=" text-sm">{asignado}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Subtareas({}) {
  return (
    <>
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow">
        <div className="flex justify-between mb-8">
          <div className="font-medium text-xl">Subtareas (3 de 3)</div>
          <button className="py-2 px-4 text-xs text-gray-800 border border-gray-300 rounded-lg cursor-pointer">
            + Agregar subtarea
          </button>
        </div>
        <div className="space-y-4">
          <Subtarea
            listo="true"
            titulo={`Traducir sección "Requisitos del sistema"`}
            subtitulo="85 palabras"
            subtitulo2="Completado hace 2 horas"
            iniciales="MG"
            asignado="María García"
          />
          <Subtarea
            listo="false"
            titulo={`Traducir sección "Proceso de instalación"`}
            subtitulo="180 palabras"
            subtitulo2="En progreso"
            iniciales="MG"
            asignado="María García"
          />
          <Subtarea
            listo="false"
            titulo={`Traducir sección "Configuración inicial"`}
            subtitulo="55 palabras"
            subtitulo2=" Pendiente"
            iniciales="MG"
            asignado="María García"
          />
        </div>
      </div>
    </>
  );
}
