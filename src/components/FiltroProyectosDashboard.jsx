export default function FiltroProyectosDashboard({}) {
  return (
    <section className="flex flex-wrap items-center gap-4">
      <input
        type="text"
        placeholder="Buscar proyectos..."
        className="border border-gray-300 rounded-lg px-3 py-2 flex-grow min-w-[200px]"
      />
      <select className="border border-gray-300 rounded-lg px-3 py-2">
        <option>Todas las fases</option>
        <option>Adaptación y afinación</option>
        <option>Armonización</option>
        <option>Aprobación</option>
        <option>Publicado</option>
      </select>
      <select className="border border-gray-300 rounded-lg px-3 py-2">
        <option>Todos los libros</option>
        <option>Evangelios</option>
        <option>Epístolas paulinas</option>
        <option>Epístolas generales</option>
        <option>Libros históricos</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
        + Nuevo Proyecto
      </button>
    </section>
  );
}
