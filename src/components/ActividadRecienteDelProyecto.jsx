function ActividadProyecto({
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

export default function ActividadRecienteDelProyecto({}) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border-1 border-gray-200 p-8">
        <h1 className="text-xl font-medium mb-6">Actividad reciente</h1>

        <ActividadProyecto
          icono="✓"
          colorIcono="bg-blue-500 text-white"
          titulo="Porción publicada: Marcos 1:1-8"
          descripcion="María García completó TPL y TPS del bautismo de Juan - Publicado en Door43"
          fecha="Hace 2 horas"
        />

        <ActividadProyecto
          icono="📝"
          colorIcono="bg-blue-500"
          titulo="Aprobación pastoral completada"
          descripcion="Pastor Carlos aprobó la adaptación teológica de Marcos 2:1-12"
          fecha="Hace 4 horas"
        />

        <ActividadProyecto
          icono="📤"
          colorIcono="bg-blue-500"
          titulo="Armonización completada"
          descripcion="Juan López armonizó TPL/TPS con notas de traducción para Marcos 3"
          fecha="Ayer a las 16:30"
        />

        <ActividadProyecto
          icono="👥"
          colorIcono="bg-blue-500"
          titulo="Voluntario asignado"
          descripcion="Laura Silva se unió como especialista en preguntas de traducción"
          fecha="Ayer a las 14:15"
        />

        <ActividadProyecto
          icono="🚀"
          colorIcono="bg-blue-500"
          titulo="Paquete CCR v2 iniciado"
          descripcion="Iglesia Bautista Central envió voluntarios para Marcos"
          fecha="15 Nov 2025"
          sinLinea={true}
        />
      </div>
    </>
  );
}
