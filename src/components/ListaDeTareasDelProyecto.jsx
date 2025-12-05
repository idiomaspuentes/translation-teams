import SubtareaProyecto from "./SubtareaProyecto";
import TareaProyecto from "./TareaProyecto";
import ChecklistDeSubtareaDeProyecto from "./ChecklistDeSubtareaDeProyecto";

export default function ListaDeTareasDelProyecto({ fases }) {
  return (
    <>
      {fases.map((fase, index) => (
        <div>
          <TareaProyecto
            titulo={fase.titulo}
            descripcion={fase.descripcion}
            numTareas={fase.numTareas}
            numSubtareas={fase.numSubtareas}
            porcentaje={fase.porcentaje}
          >
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
                  {tarea.subtareas &&
                    tarea.subtareas.map((subtarea, i) => (
                      <ChecklistDeSubtareaDeProyecto
                        listo={subtarea.listo}
                        titulo={subtarea.titulo}
                        asignado={subtarea.asignado}
                      />
                    ))}
                </>
              ))}
          </TareaProyecto>
        </div>
      ))}
    </>
  );
}
