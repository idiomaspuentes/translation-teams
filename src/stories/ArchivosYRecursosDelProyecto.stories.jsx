import ArchivosYRecursosDelProyecto from "../components/ArchivosYRecursosDelProyecto";

export default {
  title: "ArchivosYRecursosDelProyecto",
  component: ArchivosYRecursosDelProyecto,
};

export const Ejemplo = {
  args: {
    archivos: [
      {
        icono: "📄",
        colorIcono: "bg-blue-500",
        titulo: "ULT_Mark_EN.usfm",
        subtitulo: "156 KB • Texto fuente inglés",
      },
      {
        icono: "🎨",
        colorIcono: "bg-blue-500",
        titulo: "TPL_Marcos_ES.usfm",
        subtitulo: "142 KB • Texto Puente Literal",
      },
      {
        icono: "📚",
        colorIcono: "bg-blue-500",
        titulo: "TPS_Marcos_ES.usfm",
        subtitulo: "138 KB • Texto Puente Simple",
      },
      {
        icono: "🔧",
        colorIcono: "bg-blue-500",
        titulo: "Notas_Traduccion_Marcos.md",
        subtitulo: "89 KB • Notas explicativas",
      },
    ],
  },
};
