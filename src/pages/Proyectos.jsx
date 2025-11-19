import BreadCrumbs from "../components/BreadCrumbs";
import EncabezadoProyecto from "../components/EncabezadoProyecto";
import ProgresoGeneralProyecto from "../components/ProgresoGeneralProyecto";
import DescripcionDelProyecto from "../components/DescripcionDelProyecto";

function Proyectos() {
  return (
    <>
      <div className="m-8">
        <BreadCrumbs
          links={[
            {
              titulo: "Proyectos",
              link: "http://milink.com",
            },
          ]}
          tituloActual={"Paquete de traducción - Marcos"}
        />
        <div className="mt-6">
          <EncabezadoProyecto
            subtitulo={"CCR v2 • Iglesia Bautista Central • EN → ES"}
            fechaInicio={"15 Noviembre 2024"}
            fechaEntrega={"30 Noviembre 2024"}
            diasRestantes={"5 días"}
            capitulosTotales={"16 capítulos"}
          />
        </div>
        <div className="mt-8">
          <ProgresoGeneralProyecto
            titulo={"Progreso General"}
            boton={"Ver reporte completo"}
            porcentaje={"75%"}
          />
        </div>
        <div className="mt-8">
          <DescripcionDelProyecto />
        </div>
      </div>
    </>
  );
}

export default Proyectos;
