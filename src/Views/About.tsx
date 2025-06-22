import { FaBook, FaCalendarAlt, FaLightbulb, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLaptop, FaUsers, FaSearch } from 'react-icons/fa';
import { BsBookHalf, BsCalendarCheck } from 'react-icons/bs';

const About = () => {
  const spaces = [
    {
      image: 'atencion.jpeg',
      title: 'Atencion Principal',
      alt: 'Sala de lectura'
    },
    {
      image: 'estudiantes.jpeg',
      title: 'Zona de Estudio General',
      alt: 'Estación de computadores'
    },
    {
      image: 'espacio-lectura.jpg',
      title: 'Salas de Estudio Grupal',
      alt: 'Sala de estudio grupal'
    }
  ];

  const services = [
    {
      icon: <BsBookHalf className="text-blue-600 text-2xl" />,
      title: "Préstamo Domiciliario",
      description: "Libros y material bibliográfico por 7 días renovables"
    },
    {
      icon: <FaLaptop className="text-blue-600 text-2xl" />,
      title: "Computadores",
      description: "Acceso a bases de datos y recursos digitales"
    },
    {
      icon: <FaUsers className="text-blue-600 text-2xl" />,
      title: "Salas Grupales",
      description: "Reserva de espacios para trabajo colaborativo"
    },
    {
      icon: <FaClock className="text-blue-600 text-2xl" />,
      title: "Horario Extendido",
      description: "Abierto hasta las 21:00 hrs de lunes a viernes"
    }
  ];

  return (
    <div className="w-full mx-auto px-6 py-10 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Biblioteca Digital UCM
            </span>
            <br />
            <span className="text-2xl text-gray-600">Campus Talca</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Un espacio moderno de aprendizaje y descubrimiento para la comunidad universitaria.
          </p>
          <a href='https://sibib.ucm.cl/' target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 w-84">
            <FaSearch /> Conoce nuestros servicios
          </a>
        </div>
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="img/biblioteca.jpg"
            alt="Estudiantes en biblioteca"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
          <div className="text-blue-500 mb-4">
            <FaBook className="text-4xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Colección Completa</h3>
          <p className="text-gray-600">Actualmente, disponemos de más de 180.000 volúmenes en formato físico, más de 196.000 libros digitales y 187 bases de datos especializadas.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
          <div className="text-blue-500 mb-4">
            <BsCalendarCheck className="text-4xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Préstamos Flexibles</h3>
          <p className="text-gray-600">Renovaciones en línea y sistema de reservas intuitivo.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
          <div className="text-blue-500 mb-4">
            <FaLightbulb className="text-4xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Espacios Modernos</h3>
          <p className="text-gray-600">Las salas de estudio son áreas dentro de la biblioteca diseñadas específicamente para proporcionar un ambiente silencioso y libre de distracciones.</p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Espacios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {spaces.map((space, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
              <img
                src={`img/${space.image}`}
                alt={space.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg text-gray-800">{space.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-200">Ubicación y Contacto</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-blue-500 mr-4 mt-1">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Biblioteca Campus San Miguel</h3>
                <p className="text-gray-600">Avenida San Miguel 3605, Talca, Chile</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-500 mr-4 mt-1">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Teléfono</h3>
                <p className="text-gray-600">+56 71 220 3500</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-500 mr-4 mt-1">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">biblioteca@ucm.cl</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-200">Horarios de Atención</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="font-medium text-gray-800 flex items-center gap-2">
                <FaCalendarAlt /> Lunes a Viernes
              </span>
              <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">08:30 - 21:00 hrs</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="font-medium text-gray-800 flex items-center gap-2">
                <FaCalendarAlt /> Sábados
              </span>
              <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">10:00 - 13:00 hrs</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-medium text-gray-800 flex items-center gap-2">
                <FaCalendarAlt /> Domingos
              </span>
              <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full text-sm font-medium">Cerrado</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Servicios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">¿Necesitas ayuda con nuestro sistema?</h3>
            <p>Consulta nuestro tutorial interactivo o contacta a nuestro personal</p>
          </div>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md">
            Acceder a ayuda
          </button>
        </div>
      </div>
    </div>
  )
}

export default About