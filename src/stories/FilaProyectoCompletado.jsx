function FilaProyectoCompletado() {
  return (
    <tr className="hover:bg-[#f8fafc]">
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-[#1e293b]">
            Sitio Web Corporativo
          </div>
          <div className="font-semibold text-[#64748b]">
            Creado: 10 Oct 2024
          </div>
        </div>
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        Global Inc
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        DE → ES
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        100%
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        5,120
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        4
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        Entregado
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        <span className="project-status status-completed">Completado</span>
      </td>
      <td className="py-4 px-6 text-left border-b-2 border-solid border-[#f1f5f9]">
        <div className="flex gap-2">
          <a
            href="project-detail.html?id=3"
            className="py-2 px-4 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] text-[0.875rem]"
          >
            Ver
          </a>
          <a
            href="project-reports.html?id=3"
            className="py-2 px-4 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] text-[0.875rem]"
          >
            Reporte
          </a>
        </div>
      </td>
    </tr>
  );
}

export default FilaProyectoCompletado;
