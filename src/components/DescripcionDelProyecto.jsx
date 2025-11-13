export default function DescripcionDelProyecto({}) {
  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Descripción del proyecto</h1>
          <p className="text-gray-600">
            Adaptación del Evangelio de Marcos del inglés al castellano
            siguiendo el modelo CCR v2. El paquete incluye TPL (Texto Puente
            Literal), TPS (Texto Puente Simple), notas de traducción,
            diccionario bíblico y preguntas de comprensión. Destinado a
            facilitar la traducción posterior a lenguas indígenas con criterios
            de claridad, naturalidad y fidelidad.
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-medium mt-8 mb-8">
              Especificaciones Técnicas
            </h2>

            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Idioma Origen</span>
              <span className="text-gray-800 font-medium">Inglés</span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Idioma Destino</span>
              <span className="text-gray-800 font-medium">Castellano</span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Tipo de Contenido</span>
              <span className="text-gray-800 font-medium">
                Texto Bíblico - Evangelio
              </span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">
                Plataforma de Publicación
              </span>
              <span className="text-gray-800 font-medium">Door43.org</span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Herramientas</span>
              <span className="text-gray-800 font-medium">translationCore</span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Modelo CCR</span>
              <span className="text-gray-800 font-medium">
                Versión 2 - Publicación Progresiva
              </span>
            </div>
          </div>
          <h3 className="text-xl font-medium mt-8 mb-8">
            Requisitos Especiales
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">
                TPL (Texto Puente Literal)
              </span>
              <span className="text-gray-800 font-medium">
                Fiel a estructuras originales
              </span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">
                TPS (Texto Puente Simple)
              </span>
              <span className="text-gray-800 font-medium">Claro y natural</span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Aprobación Pastoral</span>
              <span className="text-gray-800 font-medium">
                Pastores Latinoamericanos
              </span>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">
                Criterios de Calidad
              </span>
              <span className="text-gray-800 font-medium">
                Claridad, Naturalidad, Fidelidad
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
