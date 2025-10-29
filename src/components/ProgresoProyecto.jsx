import BarraDeProgreso from "./BarraDeProgreso";

export default function ProgresoProyecto({ titulo, subtitulo, porcentaje }) {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="font-medium text-md">{titulo}</h2>
        <p className="text-xs text-gray-500">{subtitulo}</p>
      </div>
      <div className="flex w-[40%] justify-between items-center gap-4">
        <BarraDeProgreso porcentaje={porcentaje} />

        <div>
          <span className="text-gray-700 font-medium">{porcentaje}%</span>
        </div>
      </div>
    </div>
  );
}
