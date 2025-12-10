import Descripcion from "./Descripcion";

export default function DescripcionDeLaTarea({
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
