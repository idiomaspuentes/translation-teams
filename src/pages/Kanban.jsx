import TableroKanban from "../components/TableroKanban";
import TaskColumn from "../components/TaskColumn";
import TaskCard from "../components/TaskCard";

function Kanban() {
  return (
    <>
      <TableroKanban />
      <div className="m-8">
        <div className="flex h-full min-w-max">
          <TaskColumn titulo="Adaptación" numero="3" agregar="Agregar tarea">
            <div className="mt-2 space-y-6 overflow-y-scroll h-70 pr-4">
              <TaskCard
                id="#MR-001"
                prioridad="Alta"
                titulo="TPL - Marcos 1:1-8"
                descripcion="Adaptar Texto Puente Literal del bautismo de Juan (8 versículos)"
                etiquetas={["TPL", "Marcos"]}
                usuarioAsignado="María García"
                inicialesUsuario="MG"
                fechaVencimiento="Hoy"
              />
              <TaskCard
                id="#MR-005"
                prioridad="Media"
                titulo="TPS - Marcos 1:9-15"
                descripcion="Adaptar Texto Puente Simple del bautismo y tentación de Jesús"
                etiquetas={["TPS", "Marcos"]}
                usuarioAsignado="Juan López"
                inicialesUsuario="JL"
                fechaVencimiento="2 días"
              />
              <TaskCard
                id="#MR-008"
                prioridad="Baja"
                titulo="Notas de Traducción - Marcos 1"
                descripcion="Adaptar notas explicativas para términos culturales y teológicos"
                etiquetas={["Notas", "Marcos"]}
                usuarioAsignado="Carlos Ruiz"
                inicialesUsuario="CR"
                fechaVencimiento="1 semana"
              />
            </div>
          </TaskColumn>
          <TaskColumn titulo="Armonización" numero="4" agregar="Agregar tarea">
            <div className="mt-2 space-y-6 overflow-y-scroll h-70 pr-4">
              <TaskCard
                id="#MR-002"
                prioridad="Alta"
                titulo="Integración TPL/TPS - Marcos 2"
                descripcion="Armonizar coherencia entre Texto Puente Literal y Simple"
                etiquetas={["Integración", "Marcos"]}
                usuarioAsignado="María García"
                inicialesUsuario="MG"
                fechaVencimiento="Mañana"
              />
              <TaskCard
                id="#MR-003"
                prioridad="Media"
                titulo="Preguntas de Traducción - Marcos 3"
                descripcion="Armonizar preguntas de comprensión con textos adaptados"
                etiquetas={["Preguntas", "Marcos"]}
                usuarioAsignado="Juan López"
                inicialesUsuario="JL"
                fechaVencimiento="3 días"
              />
            </div>
          </TaskColumn>
          <TaskColumn titulo="Aprobación" numero="2" agregar="Agregar tarea">
            <div className="mt-2 space-y-6 overflow-y-scroll h-70 pr-4">
              <TaskCard
                id="#MR-004"
                prioridad="Alta"
                titulo="Aprobación Pastoral - Marcos 4"
                descripcion="Revisión teológica por pastores latinoamericanos"
                etiquetas={["Pastoral", "Teología"]}
                usuarioAsignado="Pastor Carlos"
                inicialesUsuario="PC"
                fechaVencimiento="Hoy"
              />
              <TaskCard
                id="#MR-006"
                prioridad="Media"
                titulo="Validación Doctrinal - Marcos 5"
                descripcion="Verificación de fidelidad teológica y coherencia doctrinal"
                etiquetas={["Doctrinal", "Fidelidad"]}
                usuarioAsignado="Pastor Luis"
                inicialesUsuario="PL"
                fechaVencimiento="2 días"
              />
            </div>
          </TaskColumn>
          <TaskColumn titulo="Publicación" numero="1" agregar="Agregar tarea">
            <div className="mt-2 space-y-6 overflow-y-scroll h-70 pr-4">
              <TaskCard
                id="#MR-007"
                prioridad="Alta"
                titulo="Publicar en Door43 - Marcos 6"
                descripcion="Subir paquete completo a plataforma Door43.org"
                etiquetas={["Door43", "Publicación"]}
                usuarioAsignado="Laura Silva"
                inicialesUsuario="LS"
                fechaVencimiento="Hoy"
              />
            </div>
          </TaskColumn>
          <TaskColumn titulo="Publicado" numero="5" agregar="Agregar tarea">
            <div className="mt-2 space-y-6 overflow-y-scroll h-70 pr-4">
              <TaskCard
                id="#MR-009"
                prioridad="Media"
                titulo="Traducir sección 'Introducción'"
                descripcion="Traducir la sección introductoria del manual (500 palabras aprox.)"
                etiquetas={["ES→EN", "Manual"]}
                usuarioAsignado="María García"
                inicialesUsuario="MG"
                fechaVencimiento="Hoy"
              />
              <TaskCard
                id="TT-001"
                prioridad="Alta"
                titulo="Traducir sección 'Introducción'"
                descripcion="Traducir la sección introductoria del manual (500 palabras aprox.)"
                etiquetas={["ES→EN", "Manual"]}
                usuarioAsignado="María García"
                inicialesUsuario="MG"
                fechaVencimiento="Hoy"
              />
            </div>
          </TaskColumn>
        </div>
      </div>
    </>
  );
}

export default Kanban;
