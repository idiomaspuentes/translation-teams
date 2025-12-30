import EncabezadoTarea from "./EncabezadoTarea";
import FilaTarea from "./FilaTarea";

export default function EstadoTarea({ datos }) {
  return (
    <div className="bg-white shadow rounded-xl border-1 border-gray-200">
      <div className="flex justify-between items-baseline px-6 py-6 text-center p-6 rounded-lg">
        <h1 className="text-lg font-medium">Estado detallado de tareas</h1>
        <div className=" flex gap-4">
          <span className="text-sm bg-white shadow rounded-lg px-6.5 py-2.5 border border-gray-300 hover:bg-gray-100 cursor-pointer">
            Exportar lista
          </span>
        </div>
      </div>
      <EncabezadoTarea />
      {datos.map(
        (
          {
            tarea,
            subtitulo,
            asignado,
            estado,
            progreso,
            palabras,
            tiempo,
            vencimiento,
          },
          index
        ) => {
          return (
            <FilaTarea
              tarea={tarea}
              subtitulo={subtitulo}
              asignado={asignado}
              estado={estado}
              progreso={progreso}
              palabras={palabras}
              tiempo={tiempo}
              vencimiento={vencimiento}
            />
          );
        }
      )}
    </div>
  );
}
