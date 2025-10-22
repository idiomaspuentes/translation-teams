export default function EstadoTarea({}) {
  return (
    <div className="grid grid-cols-9 bg-gray-100 px-6 py-4 gap-6">
      <span className="font-medium text-lg text-gray-600 col-span-3">
        Tarea
      </span>
      <span className="font-medium text-lg text-gray-600">Asignado</span>
      <span className="font-medium text-lg text-gray-600">Estado</span>
      <span className="font-medium text-lg text-gray-600">Progreso</span>
      <span className="font-medium text-lg text-gray-600">Palabras</span>
      <span className="font-medium text-lg text-gray-600">Tiempo</span>
      <span className="font-medium text-lg text-gray-600">Vencimiento</span>
    </div>
  );
}
