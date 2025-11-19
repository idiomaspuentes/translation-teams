function RendimientoPersona({ iniciales, nombre, rol, capitulos }) {
  return (
    <div className="bg-gray-50 rounded-xl p-5">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <span className="flex aspect-square">
            <span className="text-white bg-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-full font-bold w-12 h-12 aspect-square flex justify-center items-center">
              {iniciales}
            </span>
          </span>
          <div className="flex flex-col">
            <h1 className="font-medium text-md">{nombre}</h1>
            <h2 className="text-gray-500 text-ms">{rol}</h2>
            <h2 className="text-gray-500 text-xs">{capitulos}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EquipoDelProyecto({}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-1 border-gray-200 p-10 space-y-6">
      <h1 className="font-medium text-xl">Equipo del proyecto</h1>

      <RendimientoPersona
        iniciales="MG"
        nombre="María García"
        rol="Especialista TPL Senior"
        capitulos="8 porciones • TPL Marcos 1-4"
      />

      <RendimientoPersona
        iniciales="JL"
        nombre="Juan López"
        rol="Especialista TPS"
        capitulos="6 porciones • TPS Marcos 1-3"
      />

      <RendimientoPersona
        iniciales="CR"
        nombre="Carlos Ruiz"
        rol="Pastor Aprobador"
        capitulos="4 capítulos • Aprobación Pastoral"
      />

      <RendimientoPersona
        iniciales="LS"
        nombre="Laura Silva"
        rol="Especialista Preguntas"
        capitulos="3 capítulos • Preguntas de Traducción"
      />
      <button className="bg-white border border-gray-300 text-md text-gray-800 font-medium w-full py-4 rounded-lg hover:bg-gray-50 cursor-pointer">
        Ver todas las tareas
      </button>
    </div>
  );
}
