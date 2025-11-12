export default function BreadCrumbsProyecto({ link, titulo }) {
  return (
    <div className="inline-flex space-x-2">
      {link.map((l) => {
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

      <h1 className="text-gray-500">{titulo}</h1>
    </div>
  );
}
