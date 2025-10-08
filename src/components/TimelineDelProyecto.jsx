export default function TimelineDelProyecto({}) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-8">
        <h1 className="text-xl font-medium mb-6">Timeline del proyecto</h1>
        <div className="space-y-6 flex flex-col">
          <div className="inline-flex gap-4">
            <div>
              <span className="bg-blue-500 h-10 w-10 rounded-full flex justify-center items-center">
                🚀
              </span>
              <div className="border-r border-2 border-red-500"></div>
              <div className=""></div>
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Proyecto Iniciado</span>
              <span className="text-gray-500 text-md">
                Se creó el proyecto y se asignó el equipo inicial
              </span>
              <span className="text-gray-500 text-sm">15 Noviembre 2025</span>
            </div>
          </div>
          <div className="inline-flex gap-4">
            <div>
              <span className="bg-blue-500 h-10 w-10 rounded-full flex justify-center items-center">
                📚
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Glosario Completado</span>
              <span className="text-gray-500 text-md">
                Se finalizó el glosario terminológico del proyecto
              </span>
              <span className="text-gray-500 text-sm">16 Noviembre 2025</span>
            </div>
          </div>
          <div className="inline-flex gap-4">
            <div>
              <span className="bg-blue-500 h-10 w-10 rounded-full flex justify-center items-center">
                ✍️
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Traducción Iniciada</span>
              <span className="text-gray-500 text-md">
                Comenzó la fase de traducción del contenido principal
              </span>
              <span className="text-gray-500 text-sm">17 Noviembre 2025</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="bg-blue-500 h-10 w-10 rounded-full flex justify-center items-center">
              📝
            </span>
            <span className="font-medium">Primera Revisión</span>
            <span className="text-gray-500 text-md">
              Se completó la revisión del primer capítulo
            </span>
            <span className="text-gray-500 text-sm">22 Noviembre 2025</span>
          </div>
          <div className="flex flex-col">
            <span className="bg-blue-500 h-10 w-10 rounded-full flex justify-center items-center">
              ⏰
            </span>
            <span className="font-medium">Hito del 75%</span>
            <span className="text-gray-500 text-md">
              El proyecto alcanzó el 75% de completitud
            </span>
            <span className="text-gray-500 text-sm">
              25 Noviembre 2025 (Hoy)
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
