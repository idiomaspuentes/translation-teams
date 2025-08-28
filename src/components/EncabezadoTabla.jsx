
export default function Tabla({ }) {
    return (

        <div className="grid grid-cols-7 bg-gray-100 px-6 py-4 gap-8">
            <span className="font-medium text-lg text-gray-600 col-span-2">Traductor</span>
            <span className="font-medium text-lg text-gray-600">Proyectos</span>
            <span className="font-medium text-lg text-gray-600">Palabras/Mes</span>
            <span className="font-medium text-lg text-gray-600">Promedio Calidad</span>
            <span className="font-medium text-lg text-gray-600">Días Promedio</span>
            <span className="font-medium text-lg text-gray-600">Estado</span>
        </div>
    );
}