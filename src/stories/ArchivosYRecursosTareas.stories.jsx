import ArchivosYRecursosTareas from "../components/ArchivosYRecursosTareas";

export default {
  title: "Archivos y recursos tareas",
  component: ArchivosYRecursosTareas,
};

export const Ejemplo = {
  args: {
    archivos: [
      {
        icono: "📄",
        colorIcono: "bg-blue-500",
        titulo: "Capitulo_2_Original.docx",
        subtitulo: "45 KB • Archivo fuente",
      },
      {
        icono: "🎨",
        colorIcono: "bg-blue-500",
        titulo: "Screenshots_Cap2_EN.zip",
        subtitulo: "2.1 MB • Capturas localizadas",
      },
      {
        icono: "📚",
        colorIcono: "bg-blue-500",
        titulo: "Glosario_Terminologico.xlsx",
        subtitulo: "156 KB • Referencia",
      },
      {
        icono: "📝",
        colorIcono: "bg-blue-500",
        titulo: "Capitulo_2_Progreso.docx",
        subtitulo: "32 KB • Trabajo en progreso",
      },
    ],
  },
};
