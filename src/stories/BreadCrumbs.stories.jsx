import BreadCrumbs from "../components/BreadCrumbs";

export default {
  title: "BreadCrumbs",
  component: BreadCrumbs,
};

export const Ejemplo = {
  args: {
    links: [
      {
        titulo: "Proyectos",
        link: "http://milink.com",
      },
      {
        titulo: "Manual de Usuario",
        link: "http://milink.com",
      },
    ],
    tituloActual: "Reporte del Proyecto",
  },
};
