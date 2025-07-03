import { useState } from "react";
import { FiMail, FiSearch, FiCheckCircle } from "react-icons/fi";
import { getCopyAdmin, newBookingAdmin } from "../../Services/adminServices";

const NewLoan = () => {
  const [email, setEmail] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: string; title: string; copy: string; type: string }[]
  >([]);
  const [selectedCopyId, setSelectedCopyId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await getCopyAdmin(searchTitle);
      const formattedResults = response.content.map((item: any) => ({
        id: String(item.idCopyBook),
        title: item.book.title,
        copy: item.idCopyBook,
        type: item.book.type,
      }));
      setSearchResults(formattedResults);
    } catch (error) {
      console.error("Error al buscar copias:", error);
      setSuccessMessage("❌ Error al buscar copias");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  const handleCreateLoan = async () => {
    if (!email || !selectedCopyId) {
      alert("Debes ingresar un correo y seleccionar una copia.");
      return;
    }

    try {
      const payload = {
        email,
        idCopyBook: Number(selectedCopyId),
      };

      await newBookingAdmin(payload);
      setSuccessMessage("✅ Préstamo creado con éxito");
      setEmail("");
      setSearchTitle("");
      setSearchResults([]);
      setSelectedCopyId("");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error al crear préstamo:", error);
      setSuccessMessage("❌ Ocurrió un error al crear el préstamo");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {successMessage && (
        <div className="mb-6 text-green-600 text-center font-medium">
          <p>{successMessage}</p>
        </div>
      )}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-700">Registrar préstamo</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico del usuario
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingrese gmail de usuario"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Buscar libro por título
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingrese titulo del libro"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 flex items-center gap-1"
            >
              <FiSearch />
              Buscar
            </button>
          </div>
        </div>

        {searchResults.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seleccionar copia
            </label>
            <select
              value={selectedCopyId}
              onChange={(e) => setSelectedCopyId(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm"
            >
              <option value="">Selecciona una copia...</option>
              {searchResults.map((res) => (
                <option key={res.id} value={res.id}>
                  {res.title} - Copia {res.copy} - {res.type}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={handleCreateLoan}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex justify-center items-center gap-2"
        >
          <FiCheckCircle />
          Crear Préstamo
        </button>
      </div>
    </div>
  );
};

export default NewLoan;
