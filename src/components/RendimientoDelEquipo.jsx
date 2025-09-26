function RendimientoPersona({
  iniciales,
  nombre,
  rol,
  numPalabras,
  horasTrabajo,
  porcentajeCalidad,
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <span className="flex aspect-square">
            <span className="text-white bg-orange-400 p-4 rounded-full font-medium w-15 aspect-square flex justify-center items-center">
              {iniciales}
            </span>
          </span>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">{nombre}</h1>
            <h2 className="text-gray-500">{rol}</h2>
          </div>
        </div>
        <div className="inline-flex text-center gap-12">
          <div className="flex flex-col">
            <span className="font-bold">{numPalabras}</span>
            <span className="text-gray-500">Palabras</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{horasTrabajo}</span>
            <span className="text-gray-500">Tiempo</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{porcentajeCalidad}</span>
            <span className="text-gray-500">Calidad</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RendimientoDelEquipo({}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-10 space-y-6">
      <h1 className="font-medium text-2xl">Rendimiento del equipo</h1>

      <RendimientoPersona
        iniciales="MG"
        nombre="María García"
        rol="Traductora principal"
        numPalabras="420"
        horasTrabajo="18h"
        porcentajeCalidad="98.5%"
      />

      <RendimientoPersona
        iniciales="JL"
        nombre="Juan López"
        rol="Traductor"
        numPalabras="280"
        horasTrabajo="12h"
        porcentajeCalidad="97.2%"
      />

      <RendimientoPersona
        iniciales="CR"
        nombre="Carlos Ruiz"
        rol="Revisor"
        numPalabras="180"
        horasTrabajo="8h"
        porcentajeCalidad="99.1%"
      />

      <RendimientoPersona
        iniciales="LS"
        nombre="Laura Silva"
        rol="Control de calidad"
        numPalabras="58"
        horasTrabajo="4h"
        porcentajeCalidad="99.8%"
      />
    </div>
  );
}
