export default function BreadCrumbs({ links, tituloActual }) {
  return (
    <div className="inline-flex space-x-2">
      {links.map((l, i) => {
        return (
          <>
            <a
              href={l.link}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {l.titulo}
            </a>
            <span className="text-gray-500">›</span>
          </>
        );
      })}

      <h1 className="text-gray-500">{tituloActual}</h1>
    </div>
  );
}
