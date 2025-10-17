import EstadoTarea from "../components/EstadoTarea";
export default {
  title: "Estado tarea",
  component: EstadoTarea,
};

const rendimientos = [
  {
    tarea: "Maria Fatima",
    proyectos: 8,
    palabrasMes: "15,240",
    promedioCalidad: "98.2%",
    estado: "Activo",
    tiempo: "6h",
    vencimiento: "Completado",
  },
  {
    tarea: "Carlos Ruiz",
    proyectos: 6,
    palabrasMes: "12,890",
    promedioCalidad: "96.5%",
    estado: "Activo",
    tiempo: "2.6h",
    vencimiento: "Hoy",
  },
  {
    tarea: "Yasnela Gonzalez",
    proyectos: 5,
    palabrasMes: "9,650",
    promedioCalidad: "97.8%",
    estado: "En proyecto",
    tiempo: "3h",
    vencimiento: "Hoy",
  },
  {
    tarea: "Juan Lopez",
    proyectos: 4,
    palabrasMes: "8,420",
    promedioCalidad: "99.1%",
    estado: "Sobrecargado",
    tiempo: "0h",
    vencimiento: "Mañana",
  },
  {
    tarea: "Juan Lopez",
    proyectos: 4,
    palabrasMes: "8,420",
    promedioCalidad: "99.1%",
    estado: "Sobrecargado",
    tiempo: "5h",
    vencimiento: "5 días",
  },
];

export const Ejemplo = {
  args: {
    datos: rendimientos,
  },
};
