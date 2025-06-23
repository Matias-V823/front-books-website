import { useEffect } from "react"
import CardBook from "../Components/CardBook"
import { useAppStore } from "../store/useAppStore"

const Home = () => {
  const getBooks = useAppStore((state) => state.getBooks);
  const categories = ['Ficción', 'No Ficción', 'Ciencia', 'Bibliografía']

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="p-4">
      <div className="mb-8">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Buscar libro
        </label>
        <div className="flex gap-2 bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-lg">
          <select className="px-3 py-2 text-white border border-gray-300 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option className="text-zinc-900">Todos</option>
            {categories.map((category, index) => (
              <option key={index} className="text-zinc-900">{category}</option>
            ))}
          </select>
          <input
            type="text"
            id="search"
            className="flex-1 px-3 py-2 text-white  border border-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Título o autor..."
          />
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-full transition-all duration-300 shadow-md">
            Buscar
          </button>


        </div>
      </div>

      <section>
        <h1 className="text-2xl font-bold mb-6">Explora nuestra colección</h1>
        <CardBook/>
      </section>
    </div>
  )
}

export default Home