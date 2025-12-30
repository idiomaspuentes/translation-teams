import Subtareas from "../components/Subtareas";

export default {
  title: "Subtareas",
  component: Subtareas,
};

export const Ejemplo = {
  args: {
    subtareas: [
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
    ],
  },
};
