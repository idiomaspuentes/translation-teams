import Descripcion from "./Descripcion";

export default function DescripcionDelProyecto({
  titulo,
  descripcion,
  secciones,
}) {
  return (
    <>
      <div>
        <Descripcion
          titulo={titulo}
          descripcion={descripcion}
          secciones={secciones}
        />
      </div>
    </>
  );
}
