import BreadCrumbs from "../components/BreadCrumbs";
import ReporteDelProyecto from "../components/ReporteDelProyecto";
import MetricasPrincipales from "../components/MetricasPrincipales";
import ProgresoDiario from "../components/ProgresoDiario";
import DistribucionDeTrabajo from "../components/DistribucionDeTrabajo";
import ProgresoPorFase from "../components/ProgresoPorFase";
import RendimientoDelEquipo from "../components/RendimientoDelEquipo";
import TimelineDelProyecto from "../components/TimelineDelProyecto";
import EstadoTarea from "../components/EstadoTarea";

function ReporteProyecto() {
  return (
    <>
      <div className="m-8">
        <BreadCrumbs
          links={[
            {
              titulo: "Proyectos",
              link: "http://milink.com",
            },
            {
              titulo: "Manual de Usuario - App Mobile",
              link: "http://milink.com",
            },
          ]}
          tituloActual={"Reporte del Proyecto"}
        />
        <div className="mt-8">
          <ReporteDelProyecto
            nombreDelProyecto={
              "Manual de Usuario - App Mobile • Análisis de Progreso y Rendimiento"
            }
            estado={"En progreso"}
            progreso={"75%"}
            dias={"10 de 15 días"}
            presupuesto={"€1,875 de €2,500"}
          />
        </div>
        <div className="mt-8">
          <MetricasPrincipales
            porcentajeProgreso={"75%"}
            variacionProgreso={"↗ +15% esta semana"}
            horasInvertidas={"42h"}
            avanceTiempo={"↗ 84% del estimado"}
            porcentajeCalidad={"98.2"}
            avanceCalidad={"↗ +2.1% vs promedio"}
            numeroMiembrosActivos={"4"}
            porcentajeMiembrosActivos={"→ 100% participación"}
          />
        </div>
        <div className="flex">
          <div className="w-[50%]">
            <div className="mt-8">
              <ProgresoDiario />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="mt-8">
              <DistribucionDeTrabajo />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ProgresoPorFase
            ProgresoFase={[
              {
                icono: "✓",
                colorIcono: "bg-green-100",
                titulo: "Preparación",
                descripcion: "Análisis, glosario y configuración inicial",
                porcentaje: "100",
              },

              {
                icono: "⚡",
                colorIcono: "bg-orange-100",
                titulo: "Traducción",
                descripcion: "Traducción del contenido principal",
                porcentaje: "85",
              },
              {
                icono: "📝",
                colorIcono: "bg-yellow-100",
                titulo: "Revisión",
                descripcion: "Revisión linguística y correcciones",
                porcentaje: "60",
              },
              {
                icono: "⏳",
                colorIcono: "bg-gray-100",
                titulo: "Control de calidad",
                descripcion: "QA final y verificación de formato",
                porcentaje: 25,
              },
              {
                icono: "📤",
                colorIcono: "bg-blue-100",
                titulo: "Entrega",
                descripcion: "Preparación y entrega final",
                porcentaje: 0,
              },
            ]}
          />
        </div>
        <div className="mt-8">
          <RendimientoDelEquipo
            RendimientoPersona={[
              {
                iniciales: "MG",
                nombre: "María García",
                rol: "Traductora principal",
                numPalabras: "420",
                horasTrabajo: "18h",
                porcentajeCalidad: "98.5%",
              },

              {
                iniciales: "JL",
                nombre: "Juan López",
                rol: "Traductor",
                numPalabras: "280",
                horasTrabajo: "12h",
                porcentajeCalidad: "97.2%",
              },

              {
                iniciales: "CR",
                nombre: "Carlos Ruiz",
                rol: "Revisor",
                numPalabras: "180",
                horasTrabajo: "8h",
                porcentajeCalidad: "99.1%",
              },

              {
                iniciales: "LS",
                nombre: "Laura Silva",
                rol: "Control de calidad",
                numPalabras: "58",
                horasTrabajo: "4h",
                porcentajeCalidad: "99.8%",
              },
            ]}
          />
        </div>
        <div className="mt-8">
          <TimelineDelProyecto
            TimelineProyecto={[
              {
                icono: "🚀",
                colorIcono: "bg-blue-500",
                titulo: "Proyecto iniciado",
                descripcion:
                  "Se creó el proyecto y se asignó el equipo inicial",
                fecha: "15 Noviembre 2025",
              },

              {
                icono: "📚",
                colorIcono: "bg-blue-500",
                titulo: "Glosario Completado",
                descripcion:
                  "Se finalizó el glosario terminológico del proyecto",
                fecha: "16 Noviembre 2025",
              },

              {
                icono: "✍️",
                colorIcono: "bg-blue-500",
                titulo: "Traducción Iniciada",
                descripcion:
                  "Comenzó la fase de traducción del contenido principal",
                fecha: "17 Noviembre 2025",
              },

              {
                icono: "📝",
                colorIcono: "bg-blue-500",
                titulo: "Primera Revisión",
                descripcion: "Se completó la revisión del primer capítulo",
                fecha: "22 Noviembre 2025",
              },

              {
                icono: "⏰",
                colorIcono: "bg-blue-500",
                titulo: "Hito del 75%",
                descripcion: "El proyecto alcanzó el 75% de completitud",
                fecha: "25 Noviembre 2025 (Hoy)",
                sinLinea: true,
              },
            ]}
          />
        </div>
        <div className="mt-8">
          <EstadoTarea
            rendimientos={[
              {
                tarea: "#TT-001 • Traducir Capítulo 1: Introducción",
                subtitulo: "Traducción",
                asignado: "María García",
                estado: "Completado",
                progreso: "100%",
                palabras: "250",
                tiempo: "6h",
                vencimiento: "Completado",
              },
              {
                tarea: "#TT-002 • Traducir Capítulo 2: Instalación",
                subtitulo: "Traducción",
                asignado: "María García",
                estado: "En progreso",
                progreso: "65%",
                palabras: "320",
                tiempo: "2.6h",
                vencimiento: "Hoy",
              },
              {
                tarea: "#TT-005 • Revisar Capítulo 1: Introducción",
                subtitulo: "Revisión",
                asignado: "Carlos Ruiz",
                estado: "Revisión",
                progreso: "80%",
                palabras: "250",
                tiempo: "3h",
                vencimiento: "Hoy",
              },
              {
                tarea: "#TT-003 • Traducir Capítulo 3: Configuración",
                subtitulo: "Traducción",
                asignado: "Juan López",
                estado: "Borrador",
                progreso: "0%",
                palabras: "480",
                tiempo: "0h",
                vencimiento: "Mañana",
              },
              {
                tarea: "#TT-007 • Localizar Screenshots de UI",
                subtitulo: "Localización",
                asignado: "Juan López",
                estado: "En progreso",
                progreso: "40%",
                palabras: "-",
                tiempo: "5h",
                vencimiento: "5 días",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default ReporteProyecto;
