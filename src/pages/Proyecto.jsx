import BreadCrumbs from "../components/BreadCrumbs";
import EncabezadoProyecto from "../components/EncabezadoProyecto";
import ProgresoGeneralProyecto from "../components/ProgresoGeneralProyecto";
import DescripcionDelProyecto from "../components/DescripcionDelProyecto";
import EquipoDelProyecto from "../components/EquipoDelProyecto";
import ArchivosYRecursosDelProyecto from "../components/ArchivosYRecursosDelProyecto";
import ActividadRecienteDelProyecto from "../components/ActividadRecienteDelProyecto";

function Proyecto() {
  return (
    <>
      <div className="m-8">
        <BreadCrumbs
          links={[
            {
              titulo: "Proyectos",
              link: "http://milink.com",
            },
          ]}
          tituloActual={"Paquete de traducción - Marcos"}
        />
        <div className="mt-6">
          <EncabezadoProyecto
            subtitulo={"CCR v2 • Iglesia Bautista Central • EN → ES"}
            fechaInicio={"15 Noviembre 2024"}
            fechaEntrega={"30 Noviembre 2024"}
            diasRestantes={"5 días"}
            capitulosTotales={"16 capítulos"}
          />
        </div>
        <div className="mt-8">
          <ProgresoGeneralProyecto
            titulo={"Progreso General"}
            boton={"Ver reporte completo"}
            porcentaje={"75"}
          />
        </div>
        <div className="flex gap-8">
          <div className="mt-8 w-[60%] space-y-8">
            <DescripcionDelProyecto
              titulo="Descripción del proyecto"
              descripcion="Adaptación del Evangelio de Marcos del inglés al castellano siguiendo el modelo CCR v2. El paquete incluye TPL (Texto Puente Literal), TPS (Texto Puente Simple), notas de traducción, diccionario bíblico y preguntas de comprensión. Destinado a facilitar la traducción posterior a lenguas indígenas con criterios de claridad, naturalidad y fidelidad"
              secciones={[
                {
                  titulo: "Especificaciones Técnicas",
                  propiedades: [
                    {
                      nombre: "Idioma Origen",
                      valor: "Inglés",
                    },
                    {
                      nombre: "Idioma Destino",
                      valor: "Castellano",
                    },
                    {
                      nombre: "Tipo de Contenido",
                      valor: "Texto Bíblico - Evangelio",
                    },
                    {
                      nombre: "Plataforma de Publicación",
                      valor: "Door43.org",
                    },
                    {
                      nombre: "Herramientas",
                      valor: "translationCore",
                    },
                    {
                      nombre: "Modelo CCR",
                      valor: "Versión 2 - Publicación Progresiva",
                    },
                  ],
                },
                {
                  titulo: "Requisitos Especiales",
                  propiedades: [
                    {
                      nombre: "TPL (Texto Puente Literal)",
                      valor: "Fiel a estructuras originales",
                    },
                    {
                      nombre: "TPS (Texto Puente Simple)",
                      valor: "Claro y natural",
                    },
                    {
                      nombre: "Aprobación Pastoral",
                      valor: "Pastores Latinoamericanos",
                    },
                    {
                      nombre: "Criterios de Calidad",
                      valor: "Claridad, Naturalidad, Fidelidad",
                    },
                  ],
                },
              ]}
            />
            <ActividadRecienteDelProyecto
              actividades={[
                {
                  icono: "✓",
                  colorIcono: "bg-blue-500, text-white",
                  titulo: "Porción publicada: Marcos 1:1-8",
                  descripcion:
                    "María García completó TPL y TPS del bautismo de Juan - Publicado en Door43",
                  fecha: "Hace 2 horas",
                },
                {
                  icono: "📝",
                  colorIcono: "bg-blue-500",
                  titulo: "Aprobación pastoral completada",
                  descripcion:
                    "Pastor Carlos aprobó la adaptación teológica de Marcos 2:1-12",
                  fecha: "Hace 4 horas",
                },
                {
                  icono: "📤",
                  colorIcono: "bg-blue-500",
                  titulo: "Armonización completada",
                  descripcion:
                    "Juan López armonizó TPL/TPS con notas de traducción para Marcos 3",
                  fecha: "Ayer a las 16:30",
                },
                {
                  icono: "👥",
                  colorIcono: "bg-blue-500",
                  titulo: "Voluntario asignado",
                  descripcion:
                    "Laura Silva se unió como especialista en preguntas de traducción",
                  fecha: "Ayer a las 14:15",
                },
                {
                  icono: "🚀",
                  colorIcono: "bg-blue-500",
                  titulo: "Paquete CCR v2 iniciado",
                  descripcion:
                    "Iglesia Bautista Central envió voluntarios para Marcos",
                  fecha: "15 Nov 2024",
                },
              ]}
            />
          </div>
          <div className="mt-8 w-[40%] space-y-8">
            <EquipoDelProyecto />
            <ArchivosYRecursosDelProyecto
              archivos={[
                {
                  icono: "📄",
                  colorIcono: "bg-blue-500",
                  titulo: "ULT_Mark_EN.usfm",
                  subtitulo: "156 KB • Texto fuente inglés",
                },
                {
                  icono: "🎨",
                  colorIcono: "bg-blue-500",
                  titulo: "TPL_Marcos_ES.usfm",
                  subtitulo: "142 KB • Texto Puente Literal",
                },
                {
                  icono: "📚",
                  colorIcono: "bg-blue-500",
                  titulo: "TPS_Marcos_ES.usfm",
                  subtitulo: "138 KB • Texto Puente Simple",
                },
                {
                  icono: "🔧",
                  colorIcono: "bg-blue-500",
                  titulo: "Notas_Traduccion_Marcos.md",
                  subtitulo: "89 KB • Notas explicativas",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Proyecto;
