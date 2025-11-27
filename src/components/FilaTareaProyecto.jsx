const coloresStatus = {
  Completado: "text-green-700 bg-green-100",
  "En progreso": "text-amber-700 bg-amber-100",
  Revisión: "text-blue-700 bg-blue-100",
  Borrador: "text-gray-700 bg-gray-100",
};

const coloresStatus2 = {
  Alta: "text-red-700 bg-red-200",
  Media: "text-yellow-700 bg-yellow-200",
  Baja: "text-green-700 bg-green-200",
};

export default function TablaDeTareasDelProyecto({
  tarea,
  subtitulo,
  iniciales,
  asignado,
  estado,
  prioridad,
  progreso,
  vencimiento,
  acciones,
}) {
  return (
    <div className="grid grid-cols-9 px-6 border-t-2 border-gray-100 py-4">
      <div className="flex flex-col col-span-3">
        <span className="font-medium">{tarea}</span>
        <span className="text-xs text-gray-500">{subtitulo}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="flex aspect-square">
          <span className="text-white text-xs bg-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full font-bold w-5 h-5 aspect-square flex justify-center items-center">
            {iniciales}
          </span>
        </span>
        <span className="text-md text-gray-700">{asignado}</span>
      </div>

      <span
        className={` text-xs rounded-full text-center w-fit h-fit px-3 py-1 font-semibold ${coloresStatus[estado]}`}
      >
        {estado}
      </span>
      <span
        className={`font-semibold rounded-full text-center w-fit h-fit px-2 py-0.5 text-xs ${coloresStatus2[prioridad]}`}
      >
        {prioridad}
      </span>
      <span className=" text-md text-gray-700">{progreso}</span>
      <span className="font-medium text-md text-gray-700">{vencimiento}</span>

      <span className="space-x-2">
        <button className="text-xs text-gray-700 border border-gray-300 py-1 px-2 rounded-lg cursor-pointer">
          Ver
        </button>
        <button className="text-xs text-white bg-blue-500 py-1 px-2 rounded-lg cursor-pointer">
          Editar
        </button>
        {acciones}
      </span>
    </div>
  );
}
