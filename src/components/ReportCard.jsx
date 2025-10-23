import PropTypes from "prop-types";

const tipos = {
  "proyectos-completados": {
    color: "bg-blue-200",
    titulo: "Proyectos Completados",
    icono: "📊",
  },
  "palabras-traducidas": {
    color: "bg-amber-100",
    titulo: "Palabras Traducidas",
    icono: "📝",
  },
  "dias-entrega": {
    color: "bg-emerald-200",
    titulo: "Días Promedio de Entrega",
    icono: "⏱️",
  },
  "indice-calidad": {
    color: "bg-purple-300",
    titulo: "Índice de Calidad",
    icono: "✅",
  },
};

export default function ReportCard({ numero, tipo, avance }) {
  return (
    <div className="rounded-2xl shadow-sm shadow-black/10 p-4 grow">
      <div className={`text-lg p-1.5 ${tipos[tipo].color} w-fit rounded-lg`}>
        {tipos[tipo].icono}
      </div>
      <h2 className="text-2xl text-gray-900 font-bold">{numero}</h2>
      <p className="text-gray-500 text-sm">{tipos[tipo].titulo}</p>
      <span className="text-emerald-500 text-xs">{avance}</span>
    </div>
  );
}

ReportCard.propTypes = {
  tipo: PropTypes.oneOf([
    "proyectos-completados",
    "palabras-traducidas",
    "dias-entrega",
    "indice-calidad",
  ]),
};
