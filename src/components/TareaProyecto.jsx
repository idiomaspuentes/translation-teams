import BarraDeProgreso from "./BarraDeProgreso";
import { useState } from "react";

export default function TareaProyecto({
  titulo,
  descripcion,
  numTareas,
  numSubtareas,
  porcentaje,
  children,
}) {
  const [abierto, setAbierto] = useState(false);
  return (
    <>
      <div
        onClick={() => setAbierto((abierto) => !abierto)}
        className="bg-gray-50 border-b border-gray-200 p-6"
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="rounded-lg mr-4">
              <div>{abierto ? "🔽" : "▶"}</div>
            </div>
            <div>
              <h1 className="text-xl font-medium">{titulo}</h1>
              <h2 className="text-gray-500 text-sm ">{descripcion}</h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex space-x-8">
              <div className="flex flex-col">
                <span className="font-bold text-md text-center">
                  {numTareas}
                </span>
                <span className="text-gray-600 text-xs">Tareas</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-md text-center">
                  {numSubtareas}
                </span>
                <span className="text-gray-600 text-xs">Subtareas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-20">
                  <BarraDeProgreso porcentaje={porcentaje} />
                </div>
                <span className="text-gray-500 text-xs font-medium">
                  {porcentaje}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{abierto && children}</div>
    </>
  );
}
