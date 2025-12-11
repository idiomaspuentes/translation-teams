import ProgresoDeLaTarea from "../components/ProgresoDeLaTarea";

export default {
  title: "Progreso de la tarea",
  component: ProgresoDeLaTarea,
};

export const Ejemplo = {
  args: {
    titulo: "Progreso de la tarea",
    porcentajeNumero: "65",
    porcentaje: 65,
    cajaDatos: [
      { numero: "208", titulo: "Palabras Traducidas" },
      { numero: "112", titulo: "Palabras restantes" },
      { numero: "2.6 h", titulo: "Tiempo invertido" },
    ],
  },
};
