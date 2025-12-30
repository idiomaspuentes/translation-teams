import DescripcionDelProyecto from "../components/DescripcionDelProyecto";

export default {
  title: "Descripción del proyecto",
  component: DescripcionDelProyecto,
};

export const Ejemplo = {
  args: {
    titulo: "Descripción del proyecto",
    descripcion:
      "Adaptación del Evangelio de Marcos del inglés al castellano siguiendo el modelo CCR v2. El paquete incluye TPL (Texto Puente Literal), TPS (Texto Puente Simple), notas de traducción, diccionario bíblico y preguntas de comprensión. Destinado a facilitar la traducción posterior a lenguas indígenas con criterios de claridad, naturalidad y fidelidad",
    secciones: [
      {
        titulo: "Especificaciones Técnicas",
        propiedades: [
          {
            nombre: "Idioma Origen",
            valor: "Inglés",
          },
          {
            nombre: "Idioma Destino",
            valor: "Castellano",
          },
          {
            nombre: "Tipo de Contenido",
            valor: "Texto Bíblico - Evangelio",
          },
          {
            nombre: "Plataforma de Publicación",
            valor: "Door43.org",
          },
          {
            nombre: "Herramientas",
            valor: "translationCore",
          },
          {
            nombre: "Modelo CCR",
            valor: "Versión 2 - Publicación Progresiva",
          },
        ],
      },
      {
        titulo: "Requisitos Especiales",
        propiedades: [
          {
            nombre: "TPL (Texto Puente Literal)",
            valor: "Fiel a estructuras originales",
          },
          {
            nombre: "TPS (Texto Puente Simple)",
            valor: "Claro y natural",
          },
          {
            nombre: "Aprobación Pastoral",
            valor: "Pastores Latinoamericanos",
          },
          {
            nombre: "Criterios de Calidad",
            valor: "Claridad, Naturalidad, Fidelidad",
          },
        ],
      },
    ],
  },
};
