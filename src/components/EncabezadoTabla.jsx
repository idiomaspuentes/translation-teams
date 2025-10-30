export default function Tabla({}) {
  return (
    <div className="grid grid-cols-7 bg-gray-50 px-6 py-3 gap-8">
      <span className="font-medium text-md text-gray-700 col-span-2">
        Traductor
      </span>
      <span className="font-medium text-md text-gray-700">Proyectos</span>
      <span className="font-medium text-md text-gray-700">Palabras/Mes</span>
      <span className="font-medium text-md text-gray-700">
        Promedio Calidad
      </span>
      <span className="font-medium text-md text-gray-700">Días Promedio</span>
      <span className="font-medium text-md text-gray-700">Estado</span>
    </div>
  );
}
