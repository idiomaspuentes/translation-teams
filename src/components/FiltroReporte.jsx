export function FiltroReporte({ titulo, datos, onChange }) {
  return (
    <div className="flex flex-col grow">
      <span className="font-semibold text-gray-700 text-sm pb-2">{titulo}</span>
      <select
        onChange={onChange}
        className="border-1 border-gray-300 rounded-md p-2"
      >
        <option>Todos</option>
        {datos.map(({ nombre }) => {
          return <option value={nombre}>{nombre}</option>;
        })}
      </select>
    </div>
  );
}
export default FiltroReporte;
