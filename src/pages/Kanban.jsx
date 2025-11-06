import TableroKanban from "../components/TableroKanban";
import TaskColumn from "../components/TaskColumn";
import TaskCard from "../components/TaskCard";

function Kanban() {
  return (
    <>
      <TableroKanban />
      <div className="m-8">
        <div className="flex h-full min-w-max ">
          <TaskColumn titulo="Adaptación" numero="3" agregar="Agregar tarea">
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
          </TaskColumn>
          <TaskColumn>
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
          </TaskColumn>
          <TaskColumn>
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
          </TaskColumn>
          <TaskColumn>
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
          </TaskColumn>
          <TaskColumn>
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
          </TaskColumn>
        </div>
      </div>
    </>
  );
}

export default Kanban;
