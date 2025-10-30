function ProgresoFase({
  icono,
  colorIcono,
  titulo,
  descripcion,
  barraProgreso,
  porcentaje,
}) {
  return (
    <div>
      <div className="flex justify-between border-b border-gray-100 py-4">
        <div className="flex gap-6">
          <span className="flex">
            <span
              className={`text-green-600 ${colorIcono} rounded-full font-medium w-10 h-10 flex justify-center items-center`}
            >
              {icono}
            </span>
          </span>
          <div className="flex flex-col">
            <h1 className="font-medium text-md">{titulo}</h1>
            <h2 className="text-gray-500 text-sm">{descripcion}</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center text-center">
          <div className="flex flex-col">
            <div className="w-23 bg-gray-100 rounded-full h-2">
              <div
                className="h-full rounded-full bg-gradient-to-r	from-blue-500	to-blue-700"
                style={{ width: porcentaje + "%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">
              {porcentaje}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgresoPorFase({}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-8 space-y-6">
      <h1 className="font-medium text-xl">Progreso por fase</h1>
      <div>
        <ProgresoFase
          icono="✓"
          colorIcono="bg-green-100"
          titulo="Preparación"
          descripcion="Análisis, glosario y configuración inicial"
          porcentaje="100"
        />

        <ProgresoFase
          icono="⚡"
          colorIcono="bg-orange-100"
          titulo="Traducción"
          descripcion="Traducción del contenido principal"
          porcentaje="85"
        />
        <ProgresoFase
          icono="📝"
          colorIcono="bg-yellow-100"
          titulo="Revisión"
          descripcion="Revisión linguística y correcciones"
          porcentaje="60"
        />
        <ProgresoFase
          icono="⏳"
          colorIcono="bg-gray-100"
          titulo="Control de calidad"
          descripcion="QA final y verificación de formato"
          porcentaje="25"
        />
        <ProgresoFase
          icono="📤"
          colorIcono="bg-blue-100"
          titulo="Entrega"
          descripcion="Preparación y entrega final"
          porcentaje="0"
        />
      </div>
    </div>
  );
}
