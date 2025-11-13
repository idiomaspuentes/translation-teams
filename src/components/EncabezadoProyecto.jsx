export default function EncabezadoProyecto({
  subtitulo,
  fechaInicio,
  fechaEntrega,
  diasRestantes,
  capitulosTotales,
}) {
  return (
    <>
      <div className="bg-white rounded-xl p-8 shadow-sm border-gray-200 border">
        <div className="inline-flex justify-between w-full items-center">
          <div>
            <h1 className="font-bold text-3xl">
              Paquete de traducción - Marcos
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-100 text-green-800 font-medium py-2 px-4 text-sm rounded-full hover:bg-green-200 cursor-pointer">
              Activo
            </button>
            <button className="bg-white border border-gray-300 py-2.5 px-6 text-sm rounded-lg hover:bg-gray-100 cursor-pointer">
              Editar
            </button>
            <button className="bg-orange-400 text-white py-2.5 px-6 text-sm rounded-lg hover:bg-orange-500 cursor-pointer">
              Pausar
            </button>
            <button className="bg-emerald-500 text-white py-2.5 px-6 text-sm rounded-lg hover:bg-emerald-600 cursor-pointer">
              Marcar completado
            </button>
          </div>
        </div>
        <h2 className="text-gray-500 mt-2">{subtitulo}</h2>
        <div className="inline-flex gap-40 mt-6">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Fecha de Inicio
            </span>
            <span className="font-medium">{fechaInicio}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Fecha de Entrega
            </span>
            <span className="font-medium">{fechaEntrega}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Días Restantes
            </span>
            <span className="font-medium">{diasRestantes}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Capítulos Total
            </span>
            <span className="font-medium">{capitulosTotales}</span>
          </div>
        </div>
      </div>
    </>
  );
}
