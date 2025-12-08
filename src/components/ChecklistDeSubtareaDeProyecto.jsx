import { Strikethrough } from "lucide-react";
import { useState } from "react";

export default function ChecklistDeSubtareaDeProyecto({
  listo,
  titulo,
  asignado,
}) {
  const [done, setDone] = useState(listo);
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center">
            <input
              id="mi-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-blue-100 border-gray-300 rounded focus:ring-blue-500"
              checked={done}
              onChange={() => setDone(!done)}
            />
            <label
              for="mi-checkbox"
              className={`ms-2 text-sm text-gray-700 ${done && "line-through"}`}
            >
              {titulo}
            </label>
          </div>
        </div>
        <div>
          <span className="text-gray-500 text-xs">{asignado}</span>
        </div>
      </div>
    </>
  );
}
