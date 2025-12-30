export default function MenuPrincipalProyecto({}) {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">Proyectos</h1>
          </div>
          <div className="space-x-4">
            <button className="px-6 py-3 text-sm border border-gray-300 rounded-lg cursor-pointer">
              Importar
            </button>
            <button className="px-6 py-3 text-sm border border-gray-300 rounded-lg cursor-pointer">
              Exportar
            </button>
            <button className="px-6 py-3 text-sm border border-gray-300 bg-blue-500 text-white rounded-lg cursor-pointer">
              + Nuevo proyecto
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
