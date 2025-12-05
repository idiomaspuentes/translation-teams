import ListaDeTareasDelProyecto from "../components/ListaDeTareasDelProyecto";

export default {
  title: "Lista de tareas del proyecto",
  component: ListaDeTareasDelProyecto,
};

export const Ejemplo = {
  args: {
    fases: [
      {
        titulo: "Traducción",
        descripcion: "Contenido principal del manual",
        numTareas: 6,
        numSubtareas: 18,
        porcentaje: 75,
        tareas: [
          {
            listo: true,
            titulo: "Traducir Capítulo 1: Introducción",
            subtitulo: "#TT-001",
            subtitulo2: "250 palabras",
            iniciales: "MG",
            asignado: "María García",
            prioridad: "Alta",
            estado: "Completado",
            diaLimite: "Completado",
          },
          {
            listo: true,
            titulo: "Traducir Capítulo 2: Instalación",
            subtitulo: "#TT-002",
            subtitulo2: "320 palabras",
            iniciales: "MG",
            asignado: "María García",
            prioridad: "Alta",
            estado: "En progreso",
            diaLimite: "Hoy",
            subtareas: [
              {
                listo: true,
                titulo: `Traducir sección "Requisitos del sistema"`,
                asignado: "María García",
              },
              {
                listo: true,
                titulo: `Traducir sección "Proceso de instalación"`,
                asignado: "María García",
              },

              {
                listo: true,
                titulo: `Traducir sección "Configuración inicial"`,
                asignado: "María García",
              },
            ],
          },
          {
            listo: true,
            titulo: "Traducir Capítulo 3: Configuración avanzada",
            subtitulo: "#TT-003",
            subtitulo2: "480 palabras",
            iniciales: "JL",
            asignado: "Juan López",
            prioridad: "Media",
            estado: "Borrador",
            diaLimite: "Mañana",
          },
          {
            listo: true,
            titulo: "Traducir FAQ - Preguntas frecuentes",
            subtitulo: "#TT-004",
            subtitulo2: "200 palabras",
            iniciales: "JL",
            asignado: "Juan López",
            prioridad: "Baja",
            estado: "Borrador",
            diaLimite: "3 días",
          },
        ],
      },
      // fase 2
      {
        titulo: "Revisión",
        descripcion: "Control de calidad y correcciones",
        numTareas: 3,
        numSubtareas: 8,
        porcentaje: 40,
        tareas: [
          {
            listo: true,
            titulo: "Revisar Capítulo 1: Introducción",
            subtitulo: "#TT-005",
            subtitulo2: "Revisión linguística",
            iniciales: "CR",
            asignado: "Carlos Ruiz",
            prioridad: "Alta",
            estado: "Revisión",
            diaLimite: "Hoy",
          },
          {
            listo: true,
            titulo: "Control de calidad - Terminología",
            subtitulo: "#TT-006",
            subtitulo2: "Verificación glosario",
            iniciales: "LS",
            asignado: "Laura Silva",
            prioridad: "Media",
            estado: "Borrador",
            diaLimite: "2 días",
          },
        ],
      },
      // fase 3
      {
        titulo: "Localización",
        descripcion: "Adaptación cultural y elementos visuales",
        numTareas: 3,
        numSubtareas: 12,
        porcentaje: 25,
        tareas: [
          {
            listo: true,
            titulo: "Localizar screenshots de UI",
            subtitulo: "#TT-007",
            subtitulo2: "24 imagenes",
            iniciales: "JL",
            asignado: "Juan López",
            prioridad: "Media",
            estado: "En progreso",
            diaLimite: "5 días",
          },
          {
            listo: true,
            titulo: "Adaptar formatos y medidas",
            subtitulo: "#TT-008",
            subtitulo2: "Unidades métricas",
            iniciales: "MG",
            asignado: "María García",
            prioridad: "Baja",
            estado: "Borrador",
            diaLimite: "1 semana",
          },
        ],
      },
    ],
  },
};
