function FilaProyecto({
  proyecto,
  fechaCreado,
  cliente,
  idiomas,
  progreso,
  palabras,
  equipo,
  fechaEntrega,
  estado,
}) {
  return (
    <tr className="hover:bg-[#f8fafc]">
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {/* font-semibold text-[#64748b] */}
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-[#1e293b]">{proyecto}</div>
          <div className="font-semibold text-[#64748b]">{fechaCreado}</div>
        </div>
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {cliente}
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {idiomas}
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {progreso}
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {palabras}
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {equipo}
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {fechaEntrega}
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        <span className="project-status status-active">{estado}</span>
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        <div className="flex gap-2">
          <a
            href="project-detail.html?id=1"
            className="py-2 px-4 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] text-[0.875rem]"
          >
            Ver
          </a>
          <a
            href="project-tasks.html?id=1"
            className="py-2 px-4 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] text-[0.875rem]"
          >
            Tareas
          </a>
        </div>
      </td>
    </tr>
  );
}

export default FilaProyecto;
