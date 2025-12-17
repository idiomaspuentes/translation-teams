import BreadCrumbs from "../components/BreadCrumbs";
import TareasDelProyecto from "../components/TareasDelProyecto";
import BuscarTareasProyectos from "../components/BuscarTareasProyectos";

function TareasProyecto() {
  return (
    <>
      <div className="m-8">
        <BreadCrumbs
          links={[
            {
              titulo: "Proyectos",
              link: "http://milink.com",
            },
            {
              titulo: "Manual de Usuario - App Mobile",
              link: "http://milink.com",
            },
          ]}
          tituloActual={"Tareas"}
        />
        <div className="mt-8">
          <TareasDelProyecto
            tituloDelProyecto={"Manual de Usuario - App Mobile"}
            tareas={"12 tareas "}
            subtareas={"38 subtareas"}
          />
        </div>
        <div className="mt-8">
          <BuscarTareasProyectos />
        </div>
      </div>
    </>
  );
}

export default TareasProyecto;
