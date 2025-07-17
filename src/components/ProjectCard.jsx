const colorStatus = {
    "Revisión": "bg-yellow-100 text-yellow-700",
    "Activo": "bg-green-100 text-green-700",
    "Completado": "bg-sky-100 text-sky-700",
}
export function ProjectCard({ porcentaje, titulo, subtitulo, numeroPalabras, numeroTraductores, numeroDiasRestantes, estado, tablero, entregado = false, }) {
    return (

        <div className="  bg-white px-10 py-10 w-120 h-90 rounded-2xl m-10 p-4 shadow-lg">
            <span className="flex justify-between">
                <h2 className="text-xl font-medium">{titulo}</h2>
                <a href="/estado" className={`inline-flex items-center ${colorStatus[estado]} font-medium   bg-green-200 rounded-full px-4 py-1`}> {estado}
                </a>
            </span>
            <h3 className="text-gray-500 text-left"> {subtitulo}</h3>
            <div className="flex justify-between pt-8 mb-2">
                <h4>Progreso General</h4>
                <h4>{porcentaje}%</h4>
            </div>
            <div className=" bg-gray-500/20 h-2 rounded-full">
                <div className="bg-blue-600  h-full rounded-full" style={{ width: porcentaje + "%" }} ></div>
            </div>
            <div className="flex flex-col-1 gap-16 justify-center mt-4">
                <span className="text-center">
                    <h3 className="font-black">{numeroPalabras}</h3>
                    <h4 className="text-gray-500">Palabras </h4>
                </span>

                <span className="text-center">
                    <h3 className="font-black">{numeroTraductores}</h3>
                    <h4 className="text-gray-500">Traductores</h4>
                </span>

                <span className="text-center">
                    <h3 className="font-black">{entregado ? "✓" : numeroDiasRestantes}</h3>
                    <h4 className="text-gray-500">{entregado ? "Entregado" : "Días rest."}</h4>
                </span>
            </div>

            <div className="flex justify-center gap-4 mt-12">
                <a href="/botton2" className="inline-flex items-center text-white font-medium bg-blue-500  rounded-xl px-6 py-2">
                    Ver Detalles
                </a>

                <a href="/tablero" className="inline-flex items-center text-black font-medium bg-white rounded-xl border-1 border-gray-300 px-6 py-2">
                    {tablero}
                </a>
            </div>
        </div>

    );
}
export default ProjectCard;