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
            iniciales: "MG",
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
            iniciales: "MG",
            asignado: "Juan López",
            prioridad: "Baja",
            estado: "Borrador",
            diaLimite: "3 días",
          },
        ],
      },
      // fase 2
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
            titulo: "Traducir Capítulo 1: Introducción",
            subtitulo: "#TT-001",
            subtitulo2: "250 palabras",
            iniciales: "MG",
            asignado: "María García",
            prioridad: "Alta",
            estado: "Completado",
            diaLimite: "Completado",
          },
        ],
      },
      // fase 3
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
            titulo: "Traducir Capítulo 1: Introducción",
            subtitulo: "#TT-001",
            subtitulo2: "250 palabras",
            iniciales: "MG",
            asignado: "María García",
            prioridad: "Alta",
            estado: "Completado",
            diaLimite: "Completado",
          },
        ],
      },
    ],
  },
};
