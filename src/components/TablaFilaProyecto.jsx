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
    <div className="grid grid-cols-10 w-full border-t-2 border-gray-100 p-4 items-center">
      <div className="flex flex-col gap-1 col-span-2">
        <span className="font-medium">{proyecto}</span>
        <span className="text-xs text-gray-500">{subtitulo}</span>
      </div>

      <span className=" text-md text-gray-700">{cliente}</span>
      <span className="text-md text-gray-700">{idiomas}</span>
      <span className="text-md text-gray-700">{progreso}%</span>
      <span className=" text-md text-gray-700">{palabras}</span>
      <span className=" text-md text-gray-700">{equipo}</span>
      <span className=" text-md text-gray-700">{entrega}</span>

      <span
        className={` text-xs rounded-full text-center w-fit h-fit px-3 py-1 font-semibold ${coloresStatus[estado]}`}
      >
        {estado}
      </span>
      <span className="space-x-2">
        <button className="text-xs font-medium text-gray-700 border border-gray-300 py-2 px-3 rounded-lg cursor-pointer">
          Ver
        </button>
        <button className="text-xs font-medium text-gray-700 border border-gray-300 py-2 px-3 rounded-lg cursor-pointer">
          Tareas
        </button>
        {acciones}
      </span>
    </div>
  );
}
