import EncabezadoTabla from "./EncabezadoTabla"
import FilaTabla from "./FilaTabla"

export default function Tabla({ datos }) {
    return (
        <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.15)] rounded-xl">
            <div className="flex justify-between items-baseline px-6 py-6 text-center p-6 rounded-lg">
                <h1 className="text-2xl font-medium">Rendimiento por Traductor</h1>
                <div className=" flex gap-4">
                    <span className="font-medium text-gray-600 bg-white shadow-sm rounded-lg px-6 py-2 border border-gray-300">Filtrar</span>
                    <span className="font-medium text-gray-600 bg-white shadow-sm rounded-lg px-6 py-2 border border-gray-300">Exportar</span>
                </div>
            </div>
            <EncabezadoTabla />
            {
                datos.map(({ nombre, proyectos, palabrasMes, promedioCalidad, promedio, estado }, index) => {
                    return (
                        <FilaTabla
                            nombre={nombre}
                            cantidadDeProyectos={proyectos}
                            palabrasPorMes={palabrasMes}
                            promedioCalidad={promedioCalidad}
                            diasPromedio={promedio}
                            indice={index}
                            estado={estado}
                        />
                    )
                })
            }

        </div>
    );
}

