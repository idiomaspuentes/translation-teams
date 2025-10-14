const colores = [
  "bg-orange-600",
  "bg-purple-600",
  "bg-blue-600",
  "bg-yellow-600",
];

const coloresStatus = {
  Activo: "text-green-800 bg-green-100",
  Enproyecto: "text-amber-800 bg-amber-100",
  Sobrecargado: "text-red-800 bg-red-200",
};

export default function EstadoTarea({
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
    <div className="grid grid-cols-7 px-6 gap-8 border-t-2 border-gray-100 py-4">
      <div className="flex gap-4 col-span-2">
        <span className=" font-medium text-xl text-gray-700 gap-2 grid grid-flow-col">
          <span
            className={`${color} text-white text-sm font-bold rounded-full inline-flex justify-center items-center h-10 w-10`}
          >
            {iniciales}
          </span>
          <span className="block">{nombre}</span>
        </span>
      </div>
      <span className="text-medium text-xl text-gray-700">
        {cantidadDeProyectos}
      </span>
      <span className="text-medium text-xl text-gray-700">
        {palabrasPorMes}
      </span>
      <span className="text-medium text-xl text-gray-700">
        {promedioCalidad}
      </span>
      <span className="text-medium text-xl text-gray-700">
        {diasPromedio} días
      </span>
      <span
        className={` text-md shadow-sm rounded-full text-center w-fit h-fit px-4 py-2 font-semibold ${coloresStatus[estado]}`}
      >
        {estado}
      </span>
    </div>
  );
}
