const colorStatus = {
  Armonización: "bg-yellow-100 text-yellow-800",
  Adaptación: "bg-green-50 text-green-700",
  Completado: "bg-sky-100 text-sky-700",
};
export function ProjectCard({
  porcentaje,
  titulo,
  subtitulo,
  capitulos,
  voluntarios,
  porciones,
  estado,
  tablero,
  entregado = false,
}) {
  return (
    <div className=" bg-white p-8 w-full rounded-2xl shadow-sm border border-gray-200 mb-6">
      <span className="flex justify-between">
        <h2 className="text-lg font-medium">{titulo}</h2>
        <span>
          <a
            href="/estado"
            className={`flex-0 inline-flex items-center ${colorStatus[estado]} font-medium text-xs bg-green-200 rounded-full px-3 py-1`}
          >
            {" "}
            {estado}
          </a>
        </span>
      </span>
      <h3 className="text-gray-500 text-left text-sm"> {subtitulo}</h3>
      <div className="flex justify-between pt-8 mb-2">
        <h4 className="text-sm text-gray-800">Progreso General</h4>
        <h4 className="text-sm">{porcentaje}%</h4>
      </div>
      <div className=" bg-gray-500/20 h-2 rounded-full">
        <div
          className="bg-blue-600 bg-gradient-to-r from-blue-500 to-blue-700  h-full rounded-full"
          style={{ width: porcentaje + "%" }}
        ></div>
      </div>
      <div className="flex flex-col-1 gap-16 justify-center mt-4">
        <span className="text-center">
          <h3 className="font-bold">{capitulos}</h3>
          <h4 className="text-gray-500 text-xs">Capítulos</h4>
        </span>

        <span className="text-center">
          <h3 className="font-bold">{voluntarios}</h3>
          <h4 className="text-gray-500 text-xs">Voluntarios</h4>
        </span>

        <span className="text-center">
          <h3 className="font-bold">{entregado ? "✓" : porciones}</h3>
          <h4 className="text-gray-500 text-xs">
            {entregado ? "Entregado" : "Porciones"}
          </h4>
        </span>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <a
          href="/botton2"
          className="inline-flex items-center text-sm text-white bg-blue-500  rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Ver Detalles
        </a>

        <a
          href="/tablero"
          className="inline-flex items-center text-sm bg-white rounded-lg border-1 border-gray-300 px-4 py-2 hover:bg-gray-100"
        >
          {tablero}
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
