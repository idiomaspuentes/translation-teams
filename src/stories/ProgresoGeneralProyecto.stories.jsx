import ProgresoGeneralProyecto from "../components/ProgresoGeneralProyecto";

export default {
  title: "Progreso general proyecto",
  component: ProgresoGeneralProyecto,
};

export const Ejemplo = {
  args: {
    titulo: "Progreso general",
    boton: "Ver reporte completo",
    cajaDeDatos: [
      { numero: "75%", titulo: "Completado" },
      { numero: "16", titulo: "Capítulos total" },
      { numero: "12", titulo: "Porciones completadas" },
      { numero: "48", titulo: "Tareas total" },
    ],
    porcentaje: 75,
    CajaEstado: [
      { titulo: "Adaptación y Afinación", porcentaje: "85%" },
      { titulo: "Armonización", porcentaje: "60%" },
      { titulo: "Aprobación", porcentaje: "40%" },
      { titulo: "Publicación", porcentaje: "25%" },
    ],
  },
};
