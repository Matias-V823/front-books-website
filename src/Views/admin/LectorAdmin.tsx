import { useState } from "react";
import { FiMail, FiSearch, FiLock, FiUnlock } from "react-icons/fi";
import { getReaderAdmin, readerStateAdmin } from "../../Services/adminServices";
import { bookingBooks, finesBooks } from "../../Services/bookServices";

const LectorAdmin = () => {
  const [email, setEmail] = useState("");
  const [lector, setLector] = useState({
    nombre:'',
    email:'',
    reservas:'',
    multas:'',
    state:'',

  });
  const [estado, setEstado] = useState("Activo");

  const buscarLector = async () => {
    try {
      const readerResponse = await getReaderAdmin(email);

      if (!readerResponse || readerResponse.length === 0) {
        alert("No se encontró lector con ese email.");
        return;
      }

      const lectorInfo = readerResponse[0]; 

      const reservas = await bookingBooks(lectorInfo.email);
      const multas = await finesBooks(lectorInfo.email);

      setLector({
        nombre: `${lectorInfo.name} ${lectorInfo.lastName}`,
        email: lectorInfo.email,
        reservas: reservas.length,
        multas: multas.length,
        state: lectorInfo.state,
      });

      setEstado(lectorInfo.state === true ? "Activo" : "Bloqueado");
    } catch (error) {
      console.error("Error al buscar lector:", error);
      alert("Hubo un problema al buscar el lector.");
    }
  };


  const toggleEstado = async () => {
    if (!lector) return;

    try {
      const updatedReader = await readerStateAdmin(lector.email);
      console.log(updatedReader)

      setEstado(updatedReader.state ? "Activo" : "Bloqueado");
      setLector((prev) => prev && {
        ...prev,
        state: updatedReader.state,
      });

    } catch (error) {
      console.error("Error al cambiar el estado del lector:", error);
      alert("No se pudo cambiar el estado del lector.");
    }
  };


  return (
    <div className="p-6 min-h-screen">
      <header className="mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FiMail className="text-blue-600" />
          Administrar Lector
        </h1>
      </header>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="email"
          placeholder="Ingrese email del lector"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
        <button
          onClick={buscarLector}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiSearch />
          <span>Buscar</span>
        </button>
      </div>

      {lector && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-lg font-medium text-gray-700 mb-2 sm:mb-0">
              Estado del lector:{" "}
              <span className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${estado === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                {estado}
              </span>
            </p>
            <button
              onClick={toggleEstado}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-colors ${estado === "Activo"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
                }`}
            >
              {estado === "Activo" ? (
                <>
                  <FiLock />
                  <span>Bloquear</span>
                </>
              ) : (
                <>
                  <FiUnlock />
                  <span>Desbloquear</span>
                </>
              )}
            </button>
          </div>

          {/* Tabla de información */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Multas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{lector.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{lector.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{lector.reservas}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{lector.multas}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LectorAdmin;
