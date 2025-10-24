import ProgresoProyecto from "./ProgresoProyecto";

export default function ProgresoDeProyectos({}) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg border-1 border-gray-200 p-6">
        <h1 className="font-medium text-xl">Progreso de proyectos</h1>
        <div className="mt-8 space-y-4">
          <ProgresoProyecto
            titulo="Manual App Mobile"
            subtitulo="TechCorp • ES→EN"
            porcentaje="85"
          />

          <ProgresoProyecto
            titulo="Documentación API"
            subtitulo="DevTools • EN→FR,DE"
            porcentaje="92"
          />

          <ProgresoProyecto
            titulo="Campaña Marketing"
            subtitulo="Marketing Pro • EN→ES,PT"
            porcentaje="45"
          />

          <ProgresoProyecto
            titulo="Sitio Web Corp"
            subtitulo="Global Inc • DE→ES"
            porcentaje="100"
          />
        </div>
      </div>
    </>
  );
}
