import ProjectCard from "../components/ProjectCard.jsx";
import SummaryCard from "../components/SummaryCard.jsx";
export default function Dashboard() {
  return (
    <>
      <div className="m-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <h2 className="text-gray-500">
          Resumen general de proyectos y actividad
        </h2>
        <div className="grid grid-cols-4 items-center gap-6">
          <SummaryCard
            numero="8"
            titulo="Paquetes activos"
            subtitulo="+2 este mes"
            color="green"
          />
          <SummaryCard
            numero="47"
            titulo="Porciones pendientes"
            subtitulo="-12 esta semana"
            color="red"
          />
          <SummaryCard
            numero="73%"
            titulo="Progreso promedio"
            subtitulo="+8% este mes"
            color="green"
          />
          <SummaryCard
            numero="15"
            titulo="Voluntarios activos"
            subtitulo="+3 nuevos"
            color="green"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <ProjectCard
            porcentaje="75"
            titulo="Paquete de Traducción - Marcos"
            subtitulo="EN → ES | CCR v2 | Iglesia Bautista Central"
            capitulos="16"
            voluntarios="4"
            porciones="12"
            estado="Adaptación"
            tablero="Kanban"
          />
          <ProjectCard
            porcentaje="92"
            titulo="Paquete de Traducción - 1 Juan"
            subtitulo="EN → ES | CCR v2 | Red Iglesias Pentecostales"
            capitulos="5"
            voluntarios="3"
            porciones="2"
            estado="Armonización"
            tablero="Kanban"
          />
          <ProjectCard
            porcentaje="100"
            titulo="Paquete de Traducción - Filemón"
            subtitulo="EN → ES | CCR v2 | Iglesia Metodista Unida"
            capitulos="1"
            voluntarios="2"
            estado="Completado"
            tablero="Door43"
            entregado={true}
          />
          <ProjectCard
            porcentaje="45"
            titulo="Paquete de Traducción - Santiago"
            subtitulo="EN → ES | CCR v2 | Iglesia Presbiteriana"
            capitulos="5"
            voluntarios="3"
            porciones="8"
            estado="Adaptación"
            tablero="Kanban"
          />
        </div>
      </div>
    </>
  );
}
