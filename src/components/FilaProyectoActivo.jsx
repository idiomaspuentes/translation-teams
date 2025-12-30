function FilaProyectoActivo() {
  return (
    <tr className="hover:bg-[#f8fafc]">
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        {/* font-semibold text-[#64748b] */}
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-[#1e293b]">
            Manual de Usuario - App Mobile
          </div>
          <div className="font-semibold text-[#64748b]">
            Creado: 15 Nov 2024
          </div>
        </div>
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        TechCorp
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        ES → EN
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        75%
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        1,250
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        3
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        30 Nov 2024
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        <span className="project-status status-active">Activo</span>
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

export default FilaProyectoActivo;
