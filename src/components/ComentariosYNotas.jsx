function Nota({ iniciales, asignado, hora, comentario }) {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <span className="flex aspect-square">
            <span className="text-white text-sm bg-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-full font-bold w-10 h-10 aspect-square flex justify-center items-center">
              {iniciales}
            </span>
          </span>
        </div>
        <div>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <h2 className="font-medium">{asignado}</h2>
              <span className="text-gray-500 text-xs">{hora}</span>
            </div>
            <p className="text-gray-500">{comentario}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ComentariosYNotas({ notas }) {
  return (
    <>
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow">
        <h1 className="font-medium text-xl mb-4">Comentarios y Notas</h1>
        <div className="space-y-6">
          {notas.map((nota) => {
            return (
              <>
                <Nota
                  iniciales={nota.iniciales}
                  asignado={nota.asignado}
                  hora={nota.hora}
                  comentario={nota.comentario}
                />
              </>
            );
          })}
          <div className="flex gap-4 mt-8">
            <textarea
              className="border rounded-lg p-2 font-mono text-gray-700 text-sm w-full"
              placeholder="Agregar un comentario..."
            ></textarea>
            <button className="bg-blue-500 text-white rounded-lg p-6 cursor-pointer">
              Comentar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
