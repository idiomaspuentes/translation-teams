export default function EstadoTarea({}) {
  return (
    <div className="grid grid-cols-9 bg-gray-100 px-6 py-4 gap-6 border-t-1 border-gray-200">
      <span className="font-medium text-sm text-gray-700 col-span-3">
        Tarea
      </span>
      <span className="font-medium text-sm text-gray-700">Asignado</span>
      <span className="font-medium text-sm text-gray-700">Estado</span>
      <span className="font-medium text-sm text-gray-700">Progreso</span>
      <span className="font-medium text-sm text-gray-700">Palabras</span>
      <span className="font-medium text-sm text-gray-700">Tiempo</span>
      <span className="font-medium text-sm text-gray-700">Vencimiento</span>
    </div>
  );
}
