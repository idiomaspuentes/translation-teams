import ChecklistDeSubtareaDeProyecto from "../components/ChecklistDeSubtareaDeProyecto";

export default {
  title: "Checklist de subtarea de proyecto",
  component: ChecklistDeSubtareaDeProyecto,
};

export const Ejemplo = {
  args: {
    listo: true,
    titulo: `Traducir sección "Requisitos del sistema"`,
    asignado: "María García",
  },
};
