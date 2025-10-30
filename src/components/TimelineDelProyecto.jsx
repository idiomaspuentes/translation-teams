function TimelineProyecto({
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
        <div className="flex flex-col mb-6">
          <span className="font-medium">{titulo}</span>
          <span className="text-gray-500 text-md">{descripcion}</span>
          <span className="text-gray-500 text-sm">{fecha}</span>
        </div>
      </div>
    </div>
  );
}

export default function TimelineDelProyecto({}) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-8">
        <h1 className="text-xl font-medium mb-6">Timeline del proyecto</h1>

        <TimelineProyecto
          icono="🚀"
          colorIcono="bg-blue-500"
          titulo="Proyecto iniciado"
          descripcion="Se creó el proyecto y se asignó el equipo inicial"
          fecha="15 Noviembre 2025"
        />

        <TimelineProyecto
          icono="📚"
          colorIcono="bg-blue-500"
          titulo="Glosario Completado"
          descripcion="Se finalizó el glosario terminológico del proyecto"
          fecha="16 Noviembre 2025"
        />

        <TimelineProyecto
          icono="✍️"
          colorIcono="bg-blue-500"
          titulo="Traducción Iniciada"
          descripcion="Comenzó la fase de traducción del contenido principal"
          fecha="17 Noviembre 2025"
        />

        <TimelineProyecto
          icono="📝"
          colorIcono="bg-blue-500"
          titulo="Primera Revisión"
          descripcion="Se completó la revisión del primer capítulo"
          fecha="22 Noviembre 2025"
        />

        <TimelineProyecto
          icono="⏰"
          colorIcono="bg-blue-500"
          titulo="Hito del 75%"
          descripcion="El proyecto alcanzó el 75% de completitud"
          fecha="25 Noviembre 2025 (Hoy)"
          sinLinea={true}
        />
      </div>
    </>
  );
}
