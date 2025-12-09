import DescripcionDelProyecto from "./DescripcionDelProyecto";

export default function DescripcionDeLaTarea({}) {
  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="space-y-4">
          <descripciónDelProyecto
            titulo="Manual App Mobile"
            subtitulo="TechCorp • ES→EN"
            porcentaje="85"
          />
        </div>
      </div>
    </>
  );
}
