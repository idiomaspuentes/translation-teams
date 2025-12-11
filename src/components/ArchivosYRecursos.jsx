function Archivo({ icono, colorIcono, titulo, subtitulo }) {
  return (
    <div>
      <div className="flex justify-between border-b border-gray-100 py-4">
        <div className="flex gap-6">
          <span className="flex">
            <span
              className={`text-white ${colorIcono} rounded-md font-medium w-9 h-9 flex justify-center items-center`}
            >
              {icono}
            </span>
          </span>
          <div className="flex flex-col">
            <h1 className="font-medium text-md">{titulo}</h1>
            <h2 className="text-gray-500 text-xs">{subtitulo}</h2>
          </div>
        </div>
        <button className="bg-white border border-gray-300 text-xs rounded-lg px-4 hover:bg-gray-100 cursor-pointer">
          Descargar
        </button>
      </div>
    </div>
  );
}

export default function ArchivosYRecursos({ archivos }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-1 border-gray-200 p-8 space-y-6">
      <h1 className="font-medium text-xl">Archivos y recursos</h1>
      <div>
        {archivos.map((archivo) => {
          return (
            <>
              <Archivo
                icono={archivo.icono}
                colorIcono={archivo.colorIcono}
                titulo={archivo.titulo}
                subtitulo={archivo.subtitulo}
              />
            </>
          );
        })}
      </div>
      <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
        Subir archivo
      </button>
    </div>
  );
}
