function ProgresoFase({
  icono,
  titulo,
  descripcion,
  barraProgreso,
  porcentaje,
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <span className="flex aspect-square">
            <span className="text-white bg-orange-400 p-4 rounded-full font-medium w-15 aspect-square flex justify-center items-center">
              {icono}
            </span>
          </span>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">{titulo}</h1>
            <h2 className="text-gray-500">{descripcion}</h2>
          </div>
        </div>
        <div className="inline-flex text-center gap-12">
          <div className="flex flex-col">
            <div className="w-full bg-gray-400 rounded-full h-4">
              <div className="bg-blue-600 h-4 rounded-full w-[65%]"></div>
            </div>
            <span className="font-bold">{barraProgreso}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{porcentaje}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgresoPorFase({}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-10 space-y-6">
      <h1 className="font-medium text-2xl">Progreso por fase</h1>

      <ProgresoFase
        titulo="Preparación"
        descripcion="Análisis, glosario y configuración inicial"
        barraProgreso="100"
        porcentaje="100%"
      />

      <ProgresoFase
        titulo="María García"
        descripcion="Traductora principal"
        barraProgreso="420"
        porcentaje="85%"
      />
      <ProgresoFase
        titulo="María García"
        descripcion="Traductora principal"
        barraProgreso="420"
        porcentaje="18h"
      />
      <ProgresoFase
        titulo="María García"
        descripcion="Traductora principal"
        barraProgreso="420"
        porcentaje="18h"
      />
      <ProgresoFase
        titulo="María García"
        descripcion="Traductora principal"
        barraProgreso="420"
        porcentaje="18h"
      />
    </div>
  );
}
