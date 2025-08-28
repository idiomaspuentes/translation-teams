export default function Tabla({}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_15px_35px_rgba(0,8,0,0.15)]">
      <div className="flex justify-between">
        <div className="">
          <h1 className="font-medium text-2xl">Productividad por mes</h1>
        </div>
        <div className="flex gap-4 mb-8">
          <button className="font-normal text-lg bg-gray-100 rounded-full py-1 px-4 hover:text-white hover:bg-blue-400 cursor-pointer">
            Palabras
          </button>
          <button className="font-normal text-lg bg-gray-100 rounded-full py-1 px-4 hover:text-white hover:bg-blue-400 cursor-pointer">
            Proyectos
          </button>
          <button className="font-normal text-lg bg-gray-100 rounded-full py-1 px-4 hover:text-white hover:bg-blue-400 cursor-pointer">
            Ingresos
          </button>
        </div>
      </div>
      <div className="bg-white p-20 text-center rounded-2xl border-2 border-dashed border-gray-300">
        Gráficos de líneas - Productividad mensual
      </div>
    </div>
  );
}
