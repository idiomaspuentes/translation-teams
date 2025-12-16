import FilaProyecto from "./FilaProyecto";

export default {
  title: "Ejemplo/FilaProyecto",
  component: FilaProyecto,
  parameters: {
    layout: "centered",
  },
};

export const ejemplo = {
  args: {
    proyecto: "Manual de Usuario - App Mobile",
    fechaCreado: "Creado: 15 Nov 2024",
    cliente: "TechCorp",
    idiomas: "ES → EN",
    progreso: "75%",
    palabras: "1,250",
    equipo: "3",
    fechaEntrega: "30 Nov 2024",
    estado: "Activo",
  },
};
