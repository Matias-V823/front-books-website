const Multas = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Multas</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Retraso en devolución de libro</td>
              <td className="px-6 py-4 whitespace-nowrap">$5.000</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Pendiente</span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Daño en portada de libro</td>
              <td className="px-6 py-4 whitespace-nowrap">$10.000</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Pagado</span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Pérdida de material</td>
              <td className="px-6 py-4 whitespace-nowrap">$25.000</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">En proceso</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Multas