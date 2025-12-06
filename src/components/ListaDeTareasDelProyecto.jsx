import SubtareaProyecto from "./SubtareaProyecto";
import TareaProyecto from "./TareaProyecto";
import ChecklistDeSubtareaDeProyecto from "./ChecklistDeSubtareaDeProyecto";

export default function ListaDeTareasDelProyecto({ fases }) {
  return (
    <>
      <div className="rounded-xl shadow overflow-hidden">
        {fases.map((fase, index) => (
          <TareaProyecto
            titulo={fase.titulo}
            descripcion={fase.descripcion}
            numTareas={fase.numTareas}
            numSubtareas={fase.numSubtareas}
            porcentaje={fase.porcentaje}
          >
            <div className="px-6">
              {fase.tareas &&
                fase.tareas.map((tarea, idx) => (
                  <>
                    <SubtareaProyecto
                      listo={tarea.listo}
                      titulo={tarea.titulo}
                      subtitulo={tarea.subtitulo}
                      subtitulo2={tarea.subtitulo2}
                      iniciales={tarea.iniciales}
                      asignado={tarea.asignado}
                      prioridad={tarea.prioridad}
                      estado={tarea.estado}
                      diaLimite={tarea.diaLimite}
                    />

                    {tarea.subtareas && (
                      <div className="bg-gray-50 border-gray-300 border-l-2 p-4 space-y-4">
                        {tarea.subtareas.map((subtarea, i) => (
                          <ChecklistDeSubtareaDeProyecto
                            listo={subtarea.listo}
                            titulo={subtarea.titulo}
                            asignado={subtarea.asignado}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ))}
            </div>
          </TareaProyecto>
        ))}
      </div>
    </>
  );
}
