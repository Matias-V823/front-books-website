import React, { useState } from 'react';
import { Link } from 'react-router';
import { FiMenu, FiX, FiLogIn, FiLogOut } from 'react-icons/fi';

type NavItem = {
  path: string;
  label: string;
  icon?: React.ReactNode;
};

type NavbarProps = {
  logo?: React.ReactNode | string;
  items: NavItem[];
  isAuthenticated?: boolean;
  onLogout?: () => void;
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  logo = 'MiApp',
  items,
  isAuthenticated = false,
  onLogout,
  className = '',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('toggle')
  };

  return (
    <nav className={`bg-white shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {typeof logo === 'string' ? (
                <Link to="/" className="text-xl font-semibold text-gray-900">
                  {logo}
                </Link>
              ) : (
                logo
              )}
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-blue-500"
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated ? (
              onLogout && (
                <button
                  onClick={onLogout}
                  className="flex items-center px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiLogOut className="mr-1" />
                  Cerrar Sesión
                </button>
              )
            ) : (
              <Link
                to="/login"
                className="flex items-center px-3 py-1 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiLogIn className="mr-1" />
                Iniciar Sesión
              </Link>
            )}
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isAuthenticated ? (
              onLogout && (
                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full pl-3 pr-4 py-2 text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                >
                  <FiLogOut className="mr-2" />
                  Cerrar Sesión
                </button>
              )
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center w-45 py-2 px-5 text-left text-base font-medium text-blue-100 hover:text-blue-800 hover:bg-blue-50 bg-blue-600 rounded-lg "
              >
                <FiLogIn className="mr-2" />
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;