import PropTypes from "prop-types";
const colorStatus = {
    "green": "text-green-500",
    "red": "text-red-500",

}
export function SummaryCard({ numero, titulo, subtitulo, color }) {
    return (

        <div className=" px-8 py-8 w-68 h-35 rounded-2xl m-10 p-4 justify-items-start mx-2 shadow-lg">
            <h1 className="text-3xl font-bold">{numero}</h1>
            <h2 className="text-gray-500 pt-1">{titulo}</h2>
            <h3 className={`text-xs pt-2 ${colorStatus[color]}`}>{subtitulo}</h3>
        </div >

    );
}
export default SummaryCard;
SummaryCard.propTypes = {
    numero: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["green", "red"]).isRequired,
};