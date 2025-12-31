import TablaEncabezadoProyecto from "./TablaEncabezadoProyecto";
import TablaFilaProyecto from "./TablaFilaProyecto";

export default function TablaProyecto({ datos }) {
  return (
    <>
      <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.15)] rounded-xl">
        <TablaEncabezadoProyecto />
        {datos.map(
          (
            {
              proyecto,
              cliente,
              idiomas,
              progreso,
              palabras,
              equipo,
              entrega,
              estado,
              acciones,
            },
            index
          ) => {
            return (
              <TablaFilaProyecto
                proyecto={proyecto}
                cliente={cliente}
                idiomas={idiomas}
                progreso={progreso}
                palabras={palabras}
                equipo={equipo}
                entrega={entrega}
                estado={estado}
                acciones={acciones}
              />
            );
          }
        )}
      </div>
    </>
  );
}
