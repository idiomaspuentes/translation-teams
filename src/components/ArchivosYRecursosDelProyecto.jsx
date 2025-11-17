function ArchivoProyecto({ icono, colorIcono, titulo, subtitulo, boton }) {
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
          {boton}
        </button>
      </div>
    </div>
  );
}

export default function ArchivosYRecursosDelProyecto({}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-1 border-gray-200 p-8 space-y-6">
      <h1 className="font-medium text-xl">Archivos y recursos</h1>
      <div>
        <ArchivoProyecto
          icono="📄"
          colorIcono="bg-blue-500"
          titulo="ULT_Mark_EN.usfm"
          subtitulo="156 KB • Texto fuente inglés"
          boton="Descargar"
        />

        <ArchivoProyecto
          icono="🎨"
          colorIcono="bg-blue-500"
          titulo="TPL_Marcos_ES.usfm"
          subtitulo="142 KB • Texto Puente Literal"
          boton="Descargar"
        />
        <ArchivoProyecto
          icono="📚"
          colorIcono="bg-blue-500"
          titulo="TPS_Marcos_ES.usfm"
          subtitulo="138 KB • Texto Puente Simple"
          boton="Descargar"
        />
        <ArchivoProyecto
          icono="🔧"
          colorIcono="bg-blue-500"
          titulo="Notas_Traduccion_Marcos.md"
          subtitulo="89 KB • Notas explicativas"
          boton="Descargar"
        />
      </div>
      <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
        Subir archivo
      </button>
    </div>
  );
}
