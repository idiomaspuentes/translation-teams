const coloresStatus = {
  Completado: "text-green-700 bg-green-100",
  "En progreso": "text-amber-700 bg-amber-100",
  Revisión: "text-blue-700 bg-blue-100",
  Borrador: "text-gray-500 bg-gray-100",
};

export default function TablaDeTareasDelProyecto({
  proyecto,
  subtitulo,
  cliente,
  idiomas,
  progreso,
  palabras,
  equipo,
  entrega,
  estado,
  acciones,
}) {
  return (
    <div className="grid grid-cols-8 gap-2 border-t-2 border-gray-100 p-4 items-center">
      <div className="flex flex-col col-span-2">
        <span className="font-medium">{proyecto}</span>
        <span className="text-xs text-gray-500">{subtitulo}</span>
      </div>

      <div className="flex gap-2 items-center">
        <span className=" text-md text-gray-700">{cliente}</span>
        <span className="text-md text-gray-700">{idiomas}</span>
        <span className="text-md text-gray-700">{progreso}</span>
      </div>

      <span
        className={` text-xs rounded-full text-center w-fit h-fit px-3 py-1 font-semibold ${coloresStatus[estado]}`}
      >
        {estado}
      </span>
      <span className="font-semibold rounded-full text-center w-fit h-fit px-2 py-0.5 text-xs">
        {equipo}
      </span>
      <span className=" text-md text-gray-700">{entrega}</span>
      <span className=" text-md text-gray-700">{palabras}</span>

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
