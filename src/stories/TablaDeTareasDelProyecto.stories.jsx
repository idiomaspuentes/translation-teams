import TablaDeTareasDelProyecto from "../components/TablaDeTareasDelProyecto";

export default {
  title: "Tabla de tareas del proyecto",
  component: TablaDeTareasDelProyecto,
};

const rendimientos = [
  {
    tarea: "#TT-001 • Traducir Capítulo 1: Introducción",
    subtitulo: "250 palabras • Traducción ",
    iniciales: "MG",
    asignado: "María García",
    estado: "Completado",
    prioridad: "Alta",
    progreso: "100%",
    vencimiento: "Completado",
  },
  {
    tarea: "#TT-002 • Traducir Capítulo 2: Instalación",
    subtitulo: "320 palabras • Traducción",
    iniciales: "MG",
    asignado: "María García",
    estado: "En progreso",
    prioridad: "Alta",
    progreso: "65%",
    vencimiento: "Hoy",
  },
  {
    tarea: "#TT-005 • Revisar Capítulo 1: Introducción",
    subtitulo: "Revisión linguística • Revisión",
    iniciales: "CR",
    asignado: "Carlos Ruiz",
    estado: "Revisión",
    prioridad: "Alta",
    progreso: "80%",
    vencimiento: "Hoy",
  },
];

export const Ejemplo = {
  args: {
    datos: rendimientos,
  },
};
