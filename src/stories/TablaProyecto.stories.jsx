import TablaProyecto from "../components/TablaProyecto";

export default {
  title: "Tabla Proyecto",
  component: TablaProyecto,
};

const rendimientos = [
  {
    proyecto: "Manual de usuario - App mobile",
    subtitulo: "Creado: 15 nov 2025",
    cliente: "TechCorp",
    idiomas: "ES - EN",
    progreso: "75%",
    palabras: "1.250",
    equipo: "3",
    entrega: "30 nov 2025",
    estado: "Completado",
  },
  {
    proyecto: "Documantación API",
    subtitulo: "Creado: 1 nov 2025",
    cliente: "DevTools",
    idiomas: "MG",
    progreso: "María García",
    palabras: "En progreso",
    equipo: "Alta",
    entrega: "65%",
    estado: "En progreso",
  },
  {
    proyecto: "Sitio web corporativo",
    subtitulo: "Creado: 10 oct 2025",
    cliente: "Global inc",
    idiomas: "CR",
    progreso: "Carlos Ruiz",
    palabras: "Revisión",
    equipo: "Alta",
    entrega: "80%",
    estado: "Hoy",
  },
];

export const Ejemplo = {
  args: {
    datos: rendimientos,
  },
};
