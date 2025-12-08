const coloresStatus = {
  Completado: "text-green-700 bg-green-100",
  "En progreso": "text-amber-700 bg-amber-100",
  Revisión: "text-blue-700 bg-blue-100",
  Borrador: "text-gray-700 bg-gray-100",
};

const coloresStatus2 = {
  Alta: "text-red-600 bg-red-200",
  Media: "text-yellow-700 bg-yellow-100",
  Baja: "text-green-700 bg-green-100",
};

export default function DatosDelProyecto({
  estado,
  titulo,
  subtitulo,
  asignadoA,
  iniciales,
  prioridad,
  fechaDeVencimiento,
  palabrasEstimadas,
  tiempoEstimado,
  categoria,
}) {
  return (
    <>
      <div className="bg-white rounded-xl p-8 shadow-sm border-gray-200 border">
        <div className="inline-flex justify-between w-full items-center">
          <div>
            <h1 className="font-medium text-sm text-gray-600">#TT-002</h1>
          </div>
          <div className="flex gap-4">
            <button
              className={`font-medium py-2 px-4 text-sm rounded-full cursor-pointer  ${coloresStatus[estado]}`}
            >
              {estado}
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
        <h1 className="text-3xl font-bold">{titulo}</h1>
        <h2 className="text-gray-500 mt-2">{subtitulo}</h2>
        <div className="inline-flex gap-40 mt-6">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Asignado a
            </span>
            <div className="inline-flex gap-3 items-center mt-1">
              <span className="flex aspect-square">
                <span className="text-white bg-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-full font-bold w-8 h-8 aspect-square flex justify-center items-center">
                  {iniciales}
                </span>
              </span>
              <span className="font-medium">{asignadoA}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">Prioridad</span>
            <div>
              <span
                className={`font-medium rounded-full py-1 px-3 text-xs ${coloresStatus2[prioridad]}`}
              >
                {prioridad}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Fecha de vencimiento
            </span>
            <span className="font-medium">{fechaDeVencimiento}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Palabras estimadas
            </span>
            <span className="font-medium">{palabrasEstimadas}</span>
          </div>
        </div>
        <div className="inline-flex gap-46 mt-6">
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">
              Tiempo estimado
            </span>
            <span className="font-medium">{tiempoEstimado}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium text-sm">Categoría</span>
            <div>
              <span className="font-medium ">{categoria}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
