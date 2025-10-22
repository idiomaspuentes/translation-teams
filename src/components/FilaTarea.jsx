const coloresStatus = {
  Completado: "text-green-800 bg-green-100",
  "En progreso": "text-amber-800 bg-amber-100",
  Revisión: "text-blue-800 bg-blue-200",
  Borrador: "text-gray-600 bg-gray-300",
};

export default function EstadoTarea({
  tarea,
  subtitulo,
  asignado,
  estado,
  progreso,
  palabras,
  tiempo,
  vencimiento,
}) {
  return (
    <div className="grid grid-cols-9 px-6 gap-8 border-t-2 border-gray-100 py-4">
      <div className="flex flex-col col-span-3">
        <span className="font-medium">{tarea}</span>
        <span className="text-medium text-sm text-gray-700">{subtitulo}</span>
      </div>

      <span className="text-medium text-md text-gray-700">{asignado}</span>
      <span
        className={` text-xs shadow-sm rounded-full text-center w-fit h-fit px-3 py-1 font-semibold ${coloresStatus[estado]}`}
      >
        {estado}
      </span>
      <span className="text-medium text-md text-gray-700">{progreso}</span>
      <span className="text-medium text-md text-gray-700">{palabras}</span>
      <span className="text-medium text-md text-gray-700">{tiempo}</span>
      <span className="text-medium text-md text-gray-700">{vencimiento}</span>
    </div>
  );
}
