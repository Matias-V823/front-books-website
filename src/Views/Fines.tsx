import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";

const Fines = () => {
  const email = useAppStore((state) => state.user?.email);
  const finesBook = useAppStore((state) => state.finesBook);
  const fines = useAppStore((state) => state.fines) || [];

  useEffect(() => {
    if (email) {
      finesBook(email);
    }
  }, [email]);

  const getEstadoLabel = (state: boolean) => {
    return state
      ? {
          text: "Pagado",
          color: "bg-green-100 text-green-800",
        }
      : {
          text: "Pendiente",
          color: "bg-red-100 text-red-800",
        };
  };

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
            {fines.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No se encontraron multas.
                </td>
              </tr>
            ) : (
              fines.map((fine) => {
                const estado = getEstadoLabel(fine.state);
                return (
                  <tr key={fine.idFine}>
                    <td className="px-6 py-4 whitespace-nowrap">{fine.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${fine.amount.toLocaleString("es-CL")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${estado.color}`}>
                        {estado.text}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fines;
