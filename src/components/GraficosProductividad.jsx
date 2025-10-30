export default function Tabla({}) {
  return (
    <div className="bg-white rounded-lg p-6 h-100 w-190 shadow-md border-gray-100 border">
      <div className="flex justify-between">
        <div className="">
          <h1 className="font-medium text-xl">Productividad por mes</h1>
        </div>
        <div className="flex gap-2 mb-6">
          <button className="font-normal text-xs bg-gray-100 rounded-full py-1 px-4 hover:text-white hover:bg-blue-400 cursor-pointer">
            Palabras
          </button>
          <button className="font-normal text-xs bg-gray-100 rounded-full py-1 px-4 hover:text-white hover:bg-blue-400 cursor-pointer">
            Proyectos
          </button>
          <button className="font-normal text-xs bg-gray-100 rounded-full py-1 px-4 hover:text-white hover:bg-blue-400 cursor-pointer">
            Ingresos
          </button>
        </div>
      </div>
      <div className="bg-white p-20 rounded-lg h-75 border-2 border-dashed border-gray-200">
        <h2 className="flex text-gray-600 text-center justify-center w-full">
          Gráficos de líneas - Productividad mensual
        </h2>
      </div>
    </div>
  );
}
