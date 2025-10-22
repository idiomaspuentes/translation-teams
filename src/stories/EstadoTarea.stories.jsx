import EstadoTarea from "../components/EstadoTarea";
export default {
  title: "Estado tarea",
  component: EstadoTarea,
};

const rendimientos = [
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
];

export const Ejemplo = {
  args: {
    datos: rendimientos,
  },
};
