export default function BarraDeProgreso({ porcentaje }) {
  return (
    <div className="flex min-w-5 grow bg-gray-500/20 h-2 rounded-full">
      <div
        className="bg-blue-600 bg-gradient-to-r	from-blue-500	to-blue-700  h-full rounded-full"
        style={{ width: porcentaje + "%" }}
      ></div>
    </div>
  );
}
