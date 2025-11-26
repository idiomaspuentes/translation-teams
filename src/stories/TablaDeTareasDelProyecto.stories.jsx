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
    progreso: "100%",
    palabras: "250",
    tiempo: "6h",
    vencimiento: "Completado",
  },
  {
    tarea: "#TT-002 • Traducir Capítulo 2: Instalación",
    subtitulo: "320 palabras • Traducción",
    iniciales: "MG",
    asignado: "María García",
    estado: "En progreso",
    progreso: "65%",
    palabras: "320",
    tiempo: "2.6h",
    vencimiento: "Hoy",
  },
  {
    tarea: "#TT-005 • Revisar Capítulo 1: Introducción",
    subtitulo: "Revisión linguística • Revisión",
    iniciales: "CR",
    asignado: "Carlos Ruiz",
    estado: "Revisión",
    progreso: "80%",
    palabras: "250",
    tiempo: "3h",
    vencimiento: "Hoy",
  },
];

export const Ejemplo = {
  args: {
    datos: rendimientos,
  },
};
