function Actividad({
  icono,
  colorIcono,
  titulo,
  descripcion,
  fecha,
  sinLinea = false,
}) {
  return (
    <div className="flex flex-col">
      <div className="inline-flex gap-4">
        <div className="flex flex-col">
          <span
            className={`bg-blue-500 ${colorIcono} h-10 w-10 rounded-full flex justify-center items-center`}
          >
            {icono}
          </span>
          <div className="flex flex-1">
            {!sinLinea && (
              <div className="border-r-3 border-gray-200 w-[50%]"></div>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-8">
          <span className="font-medium">{titulo}</span>
          <span className="text-gray-500 text-sm">{descripcion}</span>
          <span className="text-gray-500 text-xs">{fecha}</span>
        </div>
      </div>
    </div>
  );
}

export default function ActividadReciente({ actividades }) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border-1 border-gray-200 p-8">
        <h1 className="text-xl font-medium mb-6">Actividad reciente</h1>
        <div>
          {actividades.map((actividad, index) => {
            return (
              <>
                <Actividad
                  icono={actividad.icono}
                  colorIcono={actividad.colorIcono}
                  titulo={actividad.titulo}
                  descripcion={actividad.descripcion}
                  fecha={actividad.fecha}
                  sinLinea={actividades.length === index + 1}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
