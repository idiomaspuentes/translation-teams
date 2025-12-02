export default function ChecklistDeSubtareaDeProyecto({}) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div class="flex items-center">
            <input
              id="mi-checkbox"
              type="checkbox"
              class="w-4 h-4 text-green-600 bg-green-100 border-green-300 rounded focus:ring-green-500"
            />
            <label
              for="mi-checkbox"
              class="ms-2 text-sm font-medium text-gray-900"
            >
              Traducir sección "Requisitos del sistema"
            </label>
          </div>
        </div>
        <div>
          <span className="text-gray-600">María García</span>
        </div>
      </div>
    </>
  );
}
