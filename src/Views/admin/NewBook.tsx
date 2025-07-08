import { useState } from "react";
import { FiBook, FiUser, FiTag, FiImage, FiSearch, FiPlus } from "react-icons/fi";
import { copyBookAdmin, getCopyAdmin, registerBookAdmin } from "../../Services/adminServices";

const NewBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    type: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: string; title: string; copy: string; type: string }[]
  >([]);
  const [selectedBookId, setSelectedBookId] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState('');




  const handleBookChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitBook = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert("Debes seleccionar una imagen");
      return;
    }

    const formData = new FormData();
    formData.append("title", bookData.title);
    formData.append("author", bookData.author);
    formData.append("type", bookData.type);
    formData.append("image64", image);

    try {
      await registerBookAdmin(formData);
      setSuccessMessage("✅ Libro registrado con éxito");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Error al registrar el libro");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };



  const handleSearch = async () => {
    try {
      const response = await getCopyAdmin(searchTitle);
      const bookSearch = response.content.map((item: any) => ({
        id: String(item.idCopyBook),
        title: item.book.title,
        copy: item.idCopyBook,
        type: item.book.type,
      }));
      setSearchResults(bookSearch);
    } catch (error) {
      console.error("Error al buscar copias:", error);
      setSuccessMessage("❌ Error al buscar copias");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };


  const handleCreateCopy = async () => {
    if (!selectedBookId) {
      alert("Debes seleccionar un libro antes de crear la copia.");
      return;
    }
    try {
      await copyBookAdmin(selectedBookId);
      setSuccessMessage("✅ Copia creada con éxito");

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

    } catch (error) {
      console.error("Error al crear la copia:", error);
      setSuccessMessage("❌ Ocurrió un error al crear la copia");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {successMessage && (
        <div className="mb-6 text-green-600 text-center font-medium">
          <p>{successMessage}</p>
        </div>
      )}
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden grid md:grid-cols-2 gap-8 p-8">
        {/* Formulario nuevo libro */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Registrar nuevo libro</h2>
          <form className="space-y-6" onSubmit={handleSubmitBook}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
              <div className="relative">
                <FiBook className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  name="title"
                  value={bookData.title}
                  onChange={handleBookChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingresa el titulo"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Autor</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  name="author"
                  value={bookData.author}
                  onChange={handleBookChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingresa el autor"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
              <div className="relative">
                <FiTag className="absolute left-3 top-2.5 text-gray-400" />
                <select
                  name="type"
                  value={bookData.type}
                  onChange={handleBookChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="Novela">Novela</option>
                  <option value="Ensayo">Ensayo</option>
                  <option value="Ciencia">Ciencia</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Imagen</label>
              <div className="relative">
                <FiImage className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Registrar Libro
            </button>
          </form>
        </div>

        {/* Formulario copia libro */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Crear copia de libro</h2>
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Buscar por título</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ej: Cien Años de Soledad"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 flex items-center gap-1"
              >
                <FiSearch />
                Buscar
              </button>
              <button
                onClick={handleCreateCopy}
                className="bg-green-600 text-white px-4 rounded-md hover:bg-green-700 flex items-center gap-1"
              >
                <FiPlus />
                Crear
              </button>
            </div>

            {searchResults.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resultados</label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  value={selectedBookId}
                  onChange={(e) => setSelectedBookId(e.target.value)}
                >
                  <option value="">Selecciona un libro...</option>

                  {searchResults.map((res) => (
                    <option key={res.id} value={res.id}>
                      {res.title} - Copia {res.copy} - {res.type}
                    </option>
                  ))}
                </select>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBook;
