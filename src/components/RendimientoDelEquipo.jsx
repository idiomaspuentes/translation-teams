export default function RendimientoDelEquipo({}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-10 space-y-8">
      <h1 className="font-medium text-2xl">Rendimiento del equipo</h1>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex justify-between">
          <div className="inline-flex gap-4">
            <span className="text-white bg-orange-400 p-4 rounded-full font-medium">
              MG
            </span>
            <div className="flex flex-col">
              <h1 className="font-medium text-lg">María García</h1>
              <h2 className="text-gray-500">Traductora principal</h2>
            </div>
          </div>
          <div className="inline-flex text-center gap-8">
            <div className="flex flex-col">
              <span className="font-bold">420</span>
              <span className="text-gray-500">Palabras</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">18h</span>
              <span className="text-gray-500">Tiempo</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">98.5%</span>
              <span className="text-gray-500">Calidad</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex justify-between">
          <div className="inline-flex gap-4">
            <span className="text-white bg-orange-400 p-4 rounded-full font-medium">
              JL
            </span>
            <div className="flex flex-col">
              <h1 className="font-medium text-lg">Juan López</h1>
              <h2 className="text-gray-500">Traductor</h2>
            </div>
          </div>
          <div className="inline-flex text-center gap-8">
            <div className="flex flex-col">
              <span className="font-bold">280</span>
              <span className="text-gray-500">Palabras</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">12h</span>
              <span className="text-gray-500">Tiempo</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">97.2%</span>
              <span className="text-gray-500">Calidad</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex justify-between">
          <div className="inline-flex gap-4">
            <span className="text-white bg-orange-400 p-4 rounded-full font-medium">
              CR
            </span>
            <div className="flex flex-col">
              <h1 className="font-medium text-lg">Carlos Ruiz</h1>
              <h2 className="text-gray-500">Revisor</h2>
            </div>
          </div>
          <div className="inline-flex text-center gap-8">
            <div className="flex flex-col">
              <span className="font-bold">180</span>
              <span className="text-gray-500">Palabras</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">8h</span>
              <span className="text-gray-500">Tiempo</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">99.1%</span>
              <span className="text-gray-500">Calidad</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex justify-between">
          <div className="inline-flex gap-4">
            <span className="text-white bg-orange-400 p-4 rounded-full font-medium">
              LS
            </span>
            <div className="flex flex-col">
              <h1 className="font-medium text-lg">Laura Silva</h1>
              <h2 className="text-gray-500">Control de calidad</h2>
            </div>
          </div>
          <div className="inline-flex text-center gap-8">
            <div className="flex flex-col">
              <span className="font-bold">58</span>
              <span className="text-gray-500">Palabras</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">4h</span>
              <span className="text-gray-500">Tiempo</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">99.8%</span>
              <span className="text-gray-500">Calidad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
