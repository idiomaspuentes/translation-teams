export default function DescripcionDelProyecto({
  titulo,
  descripcion,
  secciones,
}) {
  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="space-y-4">
          <h1 className="text-xl font-medium">{titulo}</h1>
          <p className="text-gray-600">{descripcion}</p>
          {secciones.map((seccion) => {
            return (
              <>
                <div className="space-y-4">
                  <h2 className="text-xl font-medium mt-8 mb-8">
                    {seccion.titulo}
                  </h2>
                  {seccion.propiedades.map((propiedad) => {
                    return (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-500 text-sm">
                            {propiedad.nombre}
                          </span>
                          <span className="text-gray-800 font-medium">
                            {propiedad.valor}
                          </span>
                        </div>
                        <div className="border-b border-gray-100"></div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
