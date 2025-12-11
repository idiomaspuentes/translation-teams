import ActividadRecienteDelProyecto from "../components/ActividadRecienteDelProyecto";

export default {
  title: "Actividad reciente del proyecto",
  component: ActividadRecienteDelProyecto,
};

export const Ejemplo = {
  args: {
    actividades: [
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
        descripcion: "Iglesia Bautista Central envió voluntarios para Marcos",
        fecha: "15 Nov 2024",
      },
    ],
  },
};
