import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";

const Booking = () => {
  const email = useAppStore((state) => state.user?.email);
  const bookings = useAppStore((state) => state.booking);
  const fetchBookings = useAppStore((state) => state.bookingBooks);

  useEffect(() => {
    if (email) {
      fetchBookings(email);
    }
  }, [email]);

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
            {Array.isArray(bookings) && bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id_booking}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-10 w-10 bg-gray-300 rounded"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Título</td>
                  <td className="px-6 py-4 whitespace-nowrap">Autor</td>
                  <td className="px-6 py-4 whitespace-nowrap">Categoría</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.state ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                      {booking.state ? "Activo" : "Vencido"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.date_booking}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.date_return}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center px-6 py-4 text-gray-500">
                  No hay datos de préstamos disponibles.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
