export default function ComentariosYNotas({ iniciales }) {
  return (
    <>
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow">
        <h1 className="font-medium text-xl">Comentarios y Notas</h1>
        <div className="flex gap-4">
          <div>
            <span className="flex aspect-square">
              <span className="text-white bg-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-full font-bold w-8 h-8 aspect-square flex justify-center items-center">
                {iniciales}
              </span>
            </span>
          </div>
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex justify-between">
                <h2>María García</h2>
                <span>Hace 1 hora</span>
              </div>
              <p>
                He completado la primera sección. Encontré algunos términos
                técnicos que no están en el glosario, los he marcado para
                revisión. ¿Podríamos actualizar el glosario con estos términos?
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <textarea
            className="border-2 rounded-lg p-2 font-mono text-gray-900 text-sm"
            placeholder="Agregar un comentario..."
          ></textarea>
          <button className="bg-blue-500 text-white rounded-lg p-6">
            Comentar
          </button>
        </div>
      </div>
    </>
  );
}
