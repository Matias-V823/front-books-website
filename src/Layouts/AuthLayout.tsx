import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export const AuthLayout = () => {

    const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/prestamos', label: 'Mis Prestamos' },
    { path: '/multas', label: 'Mis Multas' },
    { path: '/', label: 'Cerrar Sesión' }
  ];
  return (
    <div className="auth-layout">
      <Navbar
        logo="BooksUCM" 
        items={navItems}
        className="shadow-sm"
        isAuthenticated={true}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          Created by Matias V & Rafael M {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};