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
    progreso: "75",
    palabras: "1.250",
    equipo: "3",
    entrega: "30 nov 2025",
    estado: "En progreso",
  },
  {
    proyecto: "Documantación API",
    subtitulo: "Creado: 1 nov 2025",
    cliente: "DevTools",
    idiomas: "EN - FR,DE",
    progreso: "92",
    palabras: "2.840",
    equipo: "5",
    entrega: "25 nov 2025",
    estado: "Revisión",
  },
  {
    proyecto: "Sitio web corporativo",
    subtitulo: "Creado: 10 oct 2025",
    cliente: "Global inc",
    idiomas: "DE - ES",
    progreso: "100",
    palabras: "5.120",
    equipo: "4",
    entrega: "Entregado",
    estado: "Completado",
  },
];

export const Ejemplo = {
  args: {
    datos: rendimientos,
  },
};
