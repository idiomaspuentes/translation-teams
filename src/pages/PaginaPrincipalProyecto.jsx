import MenuPrincipalProyecto from "../components/MenuPrincipalProyecto";
import BuscarProyectos from "../components/BuscarProyectos";
import ProyectoActivo from "../components/ProyectoActivo";

function IntegracionDeLaPaginaPrincipalDeProyectos() {
  return (
    <>
      <div className="m-8">
        <MenuPrincipalProyecto />
      </div>
      <div className="m-8">
        <BuscarProyectos />
      </div>
      <div className="m-8">
        <ProyectoActivo />
      </div>
    </>
  );
}

export default IntegracionDeLaPaginaPrincipalDeProyectos;
