import { useState } from "react";
import { FiMail, FiSearch, FiBookOpen } from "react-icons/fi";
import { bookingBooks } from "../../Services/bookServices";
import { returnBookingAdmin } from "../../Services/adminServices";

const ReturnBook = () => {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState("");

  const handleSearch = async () => {
    if (!email) return;
    const result = await bookingBooks(email);
    if (result) {
      setBookings(result);
    }
  };

  const handleReturn = async () => {
    if (!selectedBooking) return;
    try {
      await returnBookingAdmin(selectedBooking);
      console.log("Devolución enviada para préstamo:", selectedBooking);
      handleSearch();
      setSelectedBooking("");
    } catch (error) {
      console.error("Error al devolver préstamo:", error);
    }
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Devolución de Libros</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-end">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Correo del usuario</label>
          <div className="flex items-center border rounded px-3 py-2 shadow-sm">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@email.com"
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded shadow px-4 py-2 hover:bg-blue-700 transition"
        >
          <FiSearch className="inline mr-2" />
          Buscar
        </button>

        {bookings.length > 0 && (
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium mb-1">Seleccionar préstamo</label>
            <select
              value={selectedBooking}
              onChange={(e) => setSelectedBooking(e.target.value)}
              className="border rounded px-3 py-2 shadow-sm"
            >
              <option value="">-- Selecciona un préstamo --</option>
              {bookings.map((b: any) => (
                <option key={b.idBooking} value={b.idBooking}>
                  {`${b.copyBook.book.title} / ${b.copyBook.book.author} / ${b.copyBook.book.type} - Copia: ${b.copyBook.idCopyBook} - ${new Date(b.dateBooking).toLocaleDateString("es-CL")} → ${new Date(b.dateReturn).toLocaleDateString("es-CL")}`}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {selectedBooking && (
        <button
          onClick={handleReturn}
          className="bg-green-600 text-white rounded shadow px-6 py-2 hover:bg-green-700 transition"
        >
          <FiBookOpen className="inline mr-2" />
          Devolver libro
        </button>
      )}
    </div>
  );
};

export default ReturnBook;
