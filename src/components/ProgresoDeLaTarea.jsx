import BarraDeProgreso from "../components/BarraDeProgreso";

export function ProgresoDeLaTarea({ titulo, porcentajeNumero, porcentaje }) {
  return (
    <>
      <div className=" bg-white p-8 w-full rounded-2xl shadow-sm border border-gray-200">
        <span className="flex justify-between">
          <h2 className="text-xl font-medium text-gray-800">{titulo}</h2>
          <div>
            <span className=" text-blue-600 font-bold text-2xl">
              {porcentajeNumero}%
            </span>
          </div>
        </span>
        <div className="mt-6">
          <BarraDeProgreso porcentaje={porcentaje} grosor={3} />
        </div>
        <div className="flex gap-6">
          <CajaDatos numero="208" titulo="Palabras traducidas" />
          <CajaDatos numero="112" titulo="Palabras restantes" />
          <CajaDatos numero="2.6h" titulo="Tiempo invertido" />
        </div>
      </div>
    </>
  );
}

export default ProgresoDeLaTarea;

function CajaDatos({ numero, titulo }) {
  return (
    <div className="inline-block justify-between w-1/3 text-center mt-6 bg-gray-50 rounded-lg px-4 py-4 space-y-2">
      <h3 className="text-2xl font-bold text-gray-800">{numero}</h3>
      <p className="text-sm text-gray-500">{titulo}</p>
    </div>
  );
}
