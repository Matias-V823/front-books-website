import type { bookType } from "../types";

type cardBookType = {
    books: bookType[]
}

const CardBook = ({ books } : cardBookType) => {
  if (!Array.isArray(books) || books.length === 0) return <p>No hay libros disponibles.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.idBook} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={
              book.image64
                ? `data:image/jpeg;base64,${book.image64}`
                : "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            }
            alt={book.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.title}</div>
            <p className="text-gray-700 text-base mb-1">{book.author}</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {book.type}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBook;
