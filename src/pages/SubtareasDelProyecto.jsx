import BreadCrumbs from "../components/BreadCrumbs";
import DatosDelProyecto from "../components/DatosDelProyecto";
import ProgresoDeLaTarea from "../components/ProgresoDeLaTarea";
import DescripcionDeLaTarea from "../components/DescripcionDeLaTarea";
import ArchivosYRecursosTareas from "../components/ArchivosYRecursosTareas";
import ActividadRecienteTareas from "../components/ActividadRecienteTareas";
import Subtareas from "../components/Subtareas";
import ComentariosYNotas from "../components/ComentariosYNotas";

function IntegracionDeSubtareasDelProyecto() {
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
            {
              titulo: "Tareas",
              link: "http://milink.com",
            },
          ]}
          tituloActual={"Traducir Capítulo 2: Instalación"}
        />
        <div className="mt-6">
          <DatosDelProyecto
            estado={"En progreso"}
            titulo={"Traducir Capítulo 2: Instalación"}
            subtitulo={"Manual de Usuario - App Mobile • Traducción ES → EN"}
            asignadoA={"María García"}
            iniciales={"MG"}
            prioridad={"Alta"}
            fechaDeVencimiento={"Hoy - 23:59"}
            palabrasEstimadas={"320 palabras"}
            tiempoEstimado={"4 horas"}
            categoria={"Traducción"}
          />
        </div>
        <div className="mt-8">
          <ProgresoDeLaTarea
            titulo={"Progreso de la Tarea"}
            porcentajeNumero={"65"}
            porcentaje={65}
          />
        </div>
        <div className="flex gap-8">
          <div className="w-[60%]">
            <div className="mt-8">
              <DescripcionDeLaTarea
                titulo="Descripción de la tarea"
                descripcion="Traducir el Capítulo 2 del manual de usuario que cubre el proceso completo de instalación de la aplicación móvil. Este capítulo incluye los requisitos del sistema, el proceso paso a paso de instalación, y la configuración inicial básica. Es importante mantener la consistencia terminológica con el glosario del proyecto y asegurar que las instrucciones sean claras y precisas para usuarios no técnicos."
                secciones={[
                  {
                    titulo: "Especificaciones",
                    propiedades: [
                      {
                        nombre: "Idioma Origen",
                        valor: "Español",
                      },
                      {
                        nombre: "Idioma Destino",
                        valor: "Inglés (US)",
                      },
                      {
                        nombre: "Tipo de Contenido",
                        valor: "Instrucciones Técnicas",
                      },
                      {
                        nombre: "Tono Requerido",
                        valor: "Profesional y Accesible",
                      },
                      {
                        nombre: "Herramienta CAT",
                        valor: "Trados Studio 2024",
                      },
                      {
                        nombre: "Memoria de Traducción",
                        valor: "TechCorp_Mobile_ES-EN.tmx",
                      },
                    ],
                  },
                  {
                    titulo: "Instrucciones Especiales",
                    propiedades: [
                      {
                        nombre: "Glosario",
                        valor: "Usar terminología del glosario del proyecto",
                      },
                      {
                        nombre: "Screenshots",
                        valor: "Actualizar referencias a capturas localizadas",
                      },
                      {
                        nombre: "Formato",
                        valor: "Mantener formato y estructura original",
                      },
                      {
                        nombre: "Revisión",
                        valor: "Auto-revisión antes de marcar como completada",
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="mt-8">
              <Subtareas
                subtareas={[
                  {
                    listo: true,
                    titulo: `Traducir sección "Requisitos del sistema"`,
                    palabras: "85 palabras",
                    estado: "Completado hace 2 horas",
                    iniciales: "MG",
                    asignado: "María García",
                  },
                  {
                    listo: false,
                    titulo: `Traducir sección "Proceso de instalación"`,
                    palabras: "180 palabras",
                    estado: "En progreso",
                    iniciales: "MG",
                    asignado: "María García",
                  },
                  {
                    listo: false,
                    titulo: `Traducir sección "Configuración inicial"`,
                    palabras: "55 palabras",
                    estado: " Pendiente",
                    iniciales: "MG",
                    asignado: "María García",
                  },
                ]}
              />
            </div>
            <div className="mt-8">
              <ComentariosYNotas
                notas={[
                  {
                    iniciales: "MG",
                    asignado: "María García",
                    hora: "Hace 1 hora",
                    comentario:
                      "He completado la primera sección. Encontré algunos términos técnicos que no están en el glosario, los he marcado para revisión. ¿Podríamos actualizar el glosario con estos términos?",
                  },
                  {
                    iniciales: "CR",
                    asignado: "Carlos Ruiz",
                    hora: "Hace 3 horas",
                    comentario:
                      "Recuerda que para las capturas de pantalla, debemos usar las versiones localizadas que están en la carpeta `Screenshots_Localized`. Las referencias deben coincidir exactamente.",
                  },
                ]}
              />
            </div>
          </div>
          <div className=" w-[40%]">
            <div className="mt-8">
              <ArchivosYRecursosTareas
                archivos={[
                  {
                    icono: "📄",
                    colorIcono: "bg-blue-500",
                    titulo: "Capitulo_2_Original.docx",
                    subtitulo: "45 KB • Archivo fuente",
                  },
                  {
                    icono: "🎨",
                    colorIcono: "bg-blue-500",
                    titulo: "Screenshots_Cap2_EN.zip",
                    subtitulo: "2.1 MB • Capturas localizadas",
                  },
                  {
                    icono: "📚",
                    colorIcono: "bg-blue-500",
                    titulo: "Glosario_Terminologico.xlsx",
                    subtitulo: "156 KB • Referencia",
                  },
                  {
                    icono: "📝",
                    colorIcono: "bg-blue-500",
                    titulo: "Capitulo_2_Progreso.docx",
                    subtitulo: "32 KB • Trabajo en progreso",
                  },
                ]}
              />
            </div>
            <div className="mt-8">
              <ActividadRecienteTareas
                actividades={[
                  {
                    icono: "✓",
                    colorIcono: "bg-blue-500, text-white",
                    titulo: "Subtarea completada",
                    descripcion: `María completó "Requisitos del sistema"`,
                    fecha: "Hace 2 horas",
                  },
                  {
                    icono: "💬",
                    colorIcono: "bg-blue-500",
                    titulo: "Comentario añadido",
                    descripcion: "María añadió una nota sobre terminología",
                    fecha: "Hace 1 hora",
                  },
                  {
                    icono: "📤",
                    colorIcono: "bg-blue-500",
                    titulo: "Archivo actualizado",
                    descripcion: "Se subió la versión en progreso",
                    fecha: "Hace 30 minutos",
                  },
                  {
                    icono: "⏰",
                    colorIcono: "bg-blue-500",
                    titulo: "Tiempo registrado",
                    descripcion: "2.6 horas de trabajo registradas",
                    fecha: "Hace 15 minutos",
                  },
                  {
                    icono: "🚀",
                    colorIcono: "bg-blue-500",
                    titulo: "Tarea iniciada",
                    descripcion: "María comenzó a trabajar en esta tarea",
                    fecha: "Ayer a las 14:30",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntegracionDeSubtareasDelProyecto;
