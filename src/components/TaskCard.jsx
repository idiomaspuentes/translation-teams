import React from "react";

export const TaskCard = ({
  id,
  prioridad = "Media",
  titulo,
  descripcion,
  etiquetas = [],
  usuarioAsignado,
  inicialesUsuario,
  fechaVencimiento,
}) => {
  const prioridadColor = {
    Alta: "bg-red-200 text-red-600",
    Media: "bg-orange-200 text-orange-600",
    Baja: "bg-green-200 text-green-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm border border-gray-200">
      {/* ID y Prioridad */}
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs text-gray-500 font-medium">{id}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-sans ${
            prioridadColor[prioridad] || prioridadColor["Media"]
          }`}
        >
          {prioridad}
        </span>
      </div>

      {/* Título */}
      <h3 className="text-md font-semibold text-gray-800">{titulo}</h3>

      {/* Descripción */}
      <p className="text-sm text-gray-500 mt-1">{descripcion}</p>

      {/* Etiquetas */}
      <div className="flex flex-wrap gap-2 mt-3">
        {etiquetas.map((etiqueta, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-0.5 rounded"
          >
            {etiqueta}
          </span>
        ))}
      </div>

      {/* Usuario asignado y vencimiento */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="bg-orange-400 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
            {inicialesUsuario}
          </div>
          <span className="text-xs text-gray-500">{usuarioAsignado}</span>
        </div>
        <span className="text-xs text-gray-500">Vence: {fechaVencimiento}</span>
      </div>
    </div>
  );
};
export default TaskCard;
