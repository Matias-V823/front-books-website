import CardBook from "../Components/CardBook"

const Home = () => {


  const categories = ['Ficción', 'No Ficción', 'Ciencia', 'Bibliografía']


  return (
    <div className="p-4">
      <div className="mb-8">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Buscar libro
        </label>
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Todos</option>
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            id="search"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Título o autor..."
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Buscar
          </button>


        </div>
      </div>

      <section>
        <h1 className="text-2xl font-bold mb-6">Explora nuestra colección</h1>
        <CardBook />
      </section>
    </div>
  )
}

export default Home