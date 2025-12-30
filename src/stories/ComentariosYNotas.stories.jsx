import ComentariosYNotas from "../components/ComentariosYNotas";

export default {
  title: "Comentarios y notas",
  component: ComentariosYNotas,
};

export const Ejemplo = {
  args: {
    notas: [
      {
        iniciales: "MG",
        asignado: "María García",
        hora: "Hace 1 hora",
        comentario:
          "He completado la primera sección. Encontré algunos términos técnicos que no están en el glosario, los he marcado para revisión. ¿Podríamos actualizar el glosario con estos términos?",
      },
      {
        iniciales: "CR",
        asignado: "Carlos Ruiz",
        hora: "Hace 3 horas",
        comentario:
          "Recuerda que para las capturas de pantalla, debemos usar las versiones localizadas que están en la carpeta `Screenshots_Localized`. Las referencias deben coincidir exactamente.",
      },
    ],
  },
};
