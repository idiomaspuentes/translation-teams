import EncabezadoTabla from "./EncabezadoTabla";
import FilaTabla from "./FilaTabla";

export default function Tabla({ datos }) {
  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.15)] rounded-xl bg-white">
      <div className="flex justify-between items-baseline px-6 py-6 text-center p-6 rounded-lg">
        <h1 className="text-xl font-medium">Rendimiento por Traductor</h1>
        <div className=" flex gap-2">
          <span className=" text-gray-600 text-sm bg-white shadow-xs rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-100 cursor-pointer">
            Filtrar
          </span>
          <span className=" text-gray-800 text-sm bg-white shadow-xs rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-100 cursor-pointer">
            Exportar
          </span>
        </div>
      </div>
      <EncabezadoTabla />
      {datos.map(
        (
          { nombre, proyectos, palabrasMes, promedioCalidad, promedio, estado },
          index
        ) => {
          return (
            <FilaTabla
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
