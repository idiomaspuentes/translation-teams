import EncabezadoTarea from "./EncabezadoTarea";
import FilaTarea from "./FilaTarea";

export default function TablaDeTareasDelProyecto({ datos }) {
  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.15)] rounded-xl">
      <div className="flex justify-between items-baseline px-6 py-6 text-center p-6 rounded-lg">
        <h1 className="text-xl font-medium">Estado detallado de tareas</h1>
        <div className=" flex gap-4">
          <span className="font-medium text-gray-600 bg-white shadow-sm rounded-lg px-7 py-3 border border-gray-300 hover:bg-gray-100 cursor-pointer">
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
