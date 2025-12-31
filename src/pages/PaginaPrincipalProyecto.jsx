import MenuPrincipalProyecto from "../components/MenuPrincipalProyecto";
import BuscarProyectos from "../components/BuscarProyectos";
import ProyectoActivo from "../components/ProyectoActivo";
import ProyectoRevision from "../components/ProyectoRevision";
import ProyectoCompletado from "../components/ProyectoCompletado";
import ProyectoTarjeta from "../components/ProyectoTarjeta";

function IntegracionDeLaPaginaPrincipalDeProyectos() {
  return (
    <>
      <div className="m-8">
        <MenuPrincipalProyecto />
      </div>
      <div className="m-8">
        <BuscarProyectos />
      </div>
      <div className="flex ">
        <div className="m-8 flex flex-col gap-12">
          <ProyectoActivo />
          <ProyectoCompletado />
        </div>
        <div className="m-8 flex flex-col gap-12">
          <ProyectoRevision />
          <ProyectoTarjeta />
        </div>
      </div>
    </>
  );
}

export default IntegracionDeLaPaginaPrincipalDeProyectos;
