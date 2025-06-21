const CardBook = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Libro" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Libro</div>
                <p className="text-gray-700 text-base mb-1">Rafael Morales</p>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Literatura Informatica</span>
            </div>
        </div>
    )
}
export default CardBook