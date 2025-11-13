export default function EncabezadoProyecto({}) {
  return (
    <>
      <div className="bg-white rounded-lg p-6 shadow-md border-gray-100 border">
        <div className="inline-flex justify-between">
          <div>
            <h1 className="font-bold text-3xl">
              Paquete de traducción - Marcos
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-green-100 text-green-800 font-medium py-2 px-4 text-sm rounded-full hover:bg-green-200 cursor-pointer">
              Activo
            </button>
            <button className="bg-white border border-gray-200 py-2 px-4 text-sm rounded-lg hover:bg-gray-100 cursor-pointer">
              Editar
            </button>
            <button>Pausar</button>
            <button>Marcar completado</button>
          </div>
        </div>
      </div>
    </>
  );
}
