export function ProgresoGeneralProyecto({ titulo, boton, porcentaje }) {
  return (
    <div className=" bg-white p-8 w-full rounded-2xl shadow-sm border border-gray-200 m-6">
      <span className="flex justify-between">
        <h2 className="text-xl font-medium text-gray-800">{titulo}</h2>
        <div>
          <button className="bg-white text-gray-800 border border-gray-300 items-center font-medium text-md rounded-lg px-6 py-3 hover:bg-gray-100 cursor-pointer">
            {boton}
          </button>
        </div>
      </span>
      <div className="flex gap-6">
        <CajaDeDatos numero="75%" titulo="Completado" />
        <CajaDeDatos numero="16" titulo="Capítulos total" />
        <CajaDeDatos numero="12" titulo="Porciones completadas" />
        <CajaDeDatos numero="48" titulo="Tareas total" />
      </div>

      <div className=" bg-gray-500/20 h-3 rounded-full mt-8">
        <div
          className="bg-blue-600 bg-gradient-to-r from-blue-500 to-blue-700  h-full rounded-full"
          style={{ width: porcentaje + "%" }}
        ></div>
      </div>
      <div className="flex gap-2">
        <CajaEstado titulo="Adaptación y Afinación" porcentaje="85%" />
        <CajaEstado titulo="Armonización" porcentaje="60%" />
        <CajaEstado titulo="Aprobación" porcentaje="40%" />
        <CajaEstado titulo="Publicación" porcentaje="25%" />
      </div>
    </div>
  );
}
export default ProgresoGeneralProyecto;

function CajaDeDatos({ numero, titulo }) {
  return (
    <div className="inline-block justify-between w-1/4 text-center mt-6 bg-gray-50 rounded-lg px-4 py-4 space-y-2">
      <h3 className="text-3xl font-bold text-gray-800">{numero}</h3>
      <p className="text-sm text-gray-500">{titulo}</p>
    </div>
  );
}

function CajaEstado({ titulo, porcentaje }) {
  return (
    <div className="flex justify-between mt-4 bg-gray-50 rounded-lg px-4 py-3 w-1/4">
      <p className="text-gray-500 text-sm">{titulo}</p>
      <p className="text-gray-800 font-medium">{porcentaje}</p>
    </div>
  );
}
