const colores = [
  "bg-orange-400 bg-gradient-to-r	from-orange-400	to-orange-600",
  "bg-blue-600 bg-gradient-to-r	from-blue-500	to-blue-700",
  "bg-green-600 bg-gradient-to-r	from-green-500	to-green-700",
  "bg-purple-600 bg-gradient-to-r	from-purple-500	to-purple-700",
];

const coloresStatus = {
  Activo: "text-green-800 bg-green-100",
  "En proyecto": "text-amber-800 bg-amber-100",
  Sobrecargado: "text-red-600 bg-red-200",
};

export default function Tabla({
  nombre,
  cantidadDeProyectos,
  palabrasPorMes,
  promedioCalidad,
  diasPromedio,
  estado,
  indice,
}) {
  const color = colores[indice % colores.length];
  const iniciales = nombre
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="grid grid-cols-7 px-6 gap-8 border-t-2 border-gray-100 py-3">
      <div className="flex gap-4 col-span-2">
        <span className="text-md text-gray-700 gap-2 grid grid-flow-col text-center items-center">
          <span
            className={`${color} text-white text-xs font-bold rounded-full inline-flex justify-center items-center h-8 w-8`}
          >
            {iniciales}
          </span>
          <span className="block">{nombre}</span>
        </span>
      </div>
      <span className="text-md text-gray-700">{cantidadDeProyectos}</span>
      <span className="text-md text-gray-700">{palabrasPorMes}</span>
      <span className="text-md text-gray-700">{promedioCalidad}</span>
      <span className="text-md text-gray-700">{diasPromedio} días</span>
      <span
        className={` text-xs shadow-sm rounded-full w-fit h-fit px-3 py-1 font-semibold ${coloresStatus[estado]}`}
      >
        {estado}
      </span>
    </div>
  );
}
