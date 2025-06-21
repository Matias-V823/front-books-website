import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export const GuestLayout = () => {
  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Sobre Nosotros' },
  ];

  return (
    <div className="guest-layout flex flex-col min-h-screen">
      <Navbar
        logo="BooksUCM" 
        items={navItems}
        className="shadow-sm"
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