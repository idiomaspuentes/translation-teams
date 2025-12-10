import DescripcionDeLaTarea from "../components/DescripcionDeLaTarea";

export default {
  title: "descripción de la tarea",
  component: DescripcionDeLaTarea,
};

export const Ejemplo = {
  args: {
    titulo: "Descripción de la tarea",
    descripcion:
      "Traducir el Capítulo 2 del manual de usuario que cubre el proceso completo de instalación de la aplicación móvil. Este capítulo incluye los requisitos del sistema, el proceso paso a paso de instalación, y la configuración inicial básica. Es importante mantener la consistencia terminológica con el glosario del proyecto y asegurar que las instrucciones sean claras y precisas para usuarios no técnicos.",
    secciones: [
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
    ],
  },
};
