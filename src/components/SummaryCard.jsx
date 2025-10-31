import PropTypes from "prop-types";
const colorStatus = {
  green: "text-green-500",
  red: "text-red-500",
};
export function SummaryCard({ numero, titulo, subtitulo, color }) {
  return (
    <div className="bg-white p-8 rounded-2xl justify-items-start shadow-sm border border-gray-200">
      <h1 className="text-3xl font-bold">{numero}</h1>
      <h2 className="text-gray-500 pt-1 text-sm">{titulo}</h2>
      <h3 className={`text-xs pt-2 ${colorStatus[color]}`}>{subtitulo}</h3>
    </div>
  );
}
export default SummaryCard;
SummaryCard.propTypes = {
  numero: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["green", "red"]).isRequired,
};
