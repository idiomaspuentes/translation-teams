import EncabezadoTarea from "./EncabezadoTarea";
import FilaTarea from "./FilaTarea";

export default function EstadoTarea({ datos }) {
  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.15)] rounded-xl">
      <div className="flex justify-between items-baseline px-6 py-6 text-center p-6 rounded-lg">
        <h1 className="text-2xl font-medium">Estado detallado de tareas</h1>
        <div className=" flex gap-4">
          <span className="font-medium text-gray-600 bg-white shadow-sm rounded-lg px-7 py-3 border border-gray-400">
            Exportar lista
          </span>
        </div>
      </div>
      <EncabezadoTarea />
      {datos.map(
        (
          { nombre, proyectos, palabrasMes, promedioCalidad, promedio, estado },
          index
        ) => {
          return (
            <FilaTarea
              nombre={nombre}
              cantidadDeProyectos={proyectos}
              palabrasPorMes={palabrasMes}
              promedioCalidad={promedioCalidad}
              diasPromedio={promedio}
              indice={index}
              estado={estado}
            />
          );
        }
      )}
    </div>
  );
}
