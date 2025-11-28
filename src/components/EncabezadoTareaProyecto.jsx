export default function TablaDeTareasDelProyecto({}) {
  return (
    <div className="grid grid-cols-8 bg-gray-50 p-4">
      <span className="font-medium text-sm text-gray-800 col-span-2">
        Tarea
      </span>
      <span className="font-medium text-sm text-gray-800">Asignado</span>
      <span className="font-medium text-sm text-gray-800">Estado</span>
      <span className="font-medium text-sm text-gray-800">Prioridad</span>
      <span className="font-medium text-sm text-gray-800">Progreso</span>
      <span className="font-medium text-sm text-gray-800">Vencimiento</span>
      <span className="font-medium text-sm text-gray-800">Acciones</span>
    </div>
  );
}
