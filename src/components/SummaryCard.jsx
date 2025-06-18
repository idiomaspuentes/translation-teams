const colorStatus = {
    "+12% este mes": "text-green-500",
    "-8% esta semana": "text-red-500",
    "+5% este mes": "text-green-500",
    "+2 nuevos": "text-green-500",

}
export function SummaryCard({ numero, titulo, subtitulo }) {
    return (

        <div className=" px-8 py-8 w-68 h-35 rounded-2xl m-10 p-4 justify-items-start mx-2">
            <h1 className="text-3xl font-bold">{numero}</h1>
            <h2 className="text-gray-500 pt-1">{titulo}</h2>
            <h3 className={`text-xs pt-2 ${colorStatus[subtitulo]}`}>{subtitulo}</h3>
        </div >

    );
}
export default SummaryCard;