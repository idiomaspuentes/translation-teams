import PropTypes from "prop-types";

const tipos = {
  "proyectos-completados": {
    color: "bg-blue-100",
    titulo: "Proyectos Completados",
    icono: "📊",
  },
  "palabras-traducidas": {
    color: "bg-green-100",
    titulo: "Palabras Traducidas",
    icono: "📝",
  },
  "dias-entrega": {
    color: "bg-amber-100",
    titulo: "Días Promedio de Entrega",
    icono: "⏱️",
  },
  "indice-calidad": {
    color: "bg-indigo-100",
    titulo: "Índice de Calidad",
    icono: "✅",
  },
};

const balances = {
  positivo: "text-emerald-500",
  negativo: "text-red-500",
  neutro: "text-gray-500",
};

export default function ReportCard({ numero, tipo, avance, balance }) {
  return (
    <div className="rounded-xl shadow-sm shadow-black/10 p-6 grow">
      <div
        className={`text-lg py-1.5 px-2 ${tipos[tipo].color} w-fit rounded-lg mb-2`}
      >
        {tipos[tipo].icono}
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl text-gray-900 font-bold">{numero}</h2>
        <p className="text-gray-500 text-sm">{tipos[tipo].titulo}</p>
        <span className={`${balances[balance]} text-xs`}>{avance}</span>
      </div>
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
