import EstadoTarea from "../components/EstadoTarea";
export default {
  title: "Estado tarea",
  component: EstadoTarea,
};

const rendimientos = [
  {
    nombre: "Maria Fatima",
    proyectos: 8,
    palabrasMes: "15,240",
    promedioCalidad: "98.2%",
    promedio: "3.8",
    estado: "Activo",
  },
  {
    nombre: "Carlos Ruiz",
    proyectos: 6,
    palabrasMes: "12,890",
    promedioCalidad: "96.5%",
    promedio: "4.2",
    estado: "Activo",
  },
  {
    nombre: "Yasnela Gonzalez",
    proyectos: 5,
    palabrasMes: "9,650",
    promedioCalidad: "97.8%",
    promedio: "3.5",
    estado: "En proyecto",
  },
  {
    nombre: "Juan Lopez",
    proyectos: 4,
    palabrasMes: "8,420",
    promedioCalidad: "99.1%",
    promedio: "5.1",
    estado: "Sobrecargado",
  },
];

export const Ejemplo = {
  args: {
    datos: rendimientos,
  },
};
