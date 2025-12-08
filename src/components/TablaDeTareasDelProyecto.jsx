import EncabezadoTareaProyecto from "./EncabezadoTareaProyecto";
import FilaTareaProyecto from "./FilaTareaProyecto";

export default function TablaDeTareasDelProyecto({ datos }) {
  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.15)] rounded-xl">
      <EncabezadoTareaProyecto />
      {datos.map(
        (
          {
            tarea,
            subtitulo,
            iniciales,
            asignado,
            estado,
            prioridad,
            progreso,
            vencimiento,
            acciones,
          },
          index
        ) => {
          return (
            <FilaTareaProyecto
              tarea={tarea}
              subtitulo={subtitulo}
              iniciales={iniciales}
              asignado={asignado}
              estado={estado}
              prioridad={prioridad}
              progreso={progreso}
              vencimiento={vencimiento}
              acciones={acciones}
            />
          );
        }
      )}
    </div>
  );
}
