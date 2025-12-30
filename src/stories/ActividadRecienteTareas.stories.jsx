import ActividadRecienteTareas from "../components/ActividadRecienteTareas";

export default {
  title: "Actividad reciente tareas",
  component: ActividadRecienteTareas,
};

export const Ejemplo = {
  args: {
    actividades: [
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
    ],
  },
};
