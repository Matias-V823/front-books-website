const Prestamos = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Préstamos</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Autor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Préstamo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Devolución</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-10 w-10 bg-gray-300"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Lorem insum</td>
              <td className="px-6 py-4 whitespace-nowrap">Hola Mundo</td>
              <td className="px-6 py-4 whitespace-nowrap">Novela</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Activo</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">2025-05-15</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-06-15</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-10 w-10 bg-gray-300"></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Hola Mundo</td>
              <td className="px-6 py-4 whitespace-nowrap">Lorem Insum</td>
              <td className="px-6 py-4 whitespace-nowrap">Fábula</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Vencido</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">2025-04-10</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-05-10</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Prestamos