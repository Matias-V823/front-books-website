import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { useAppStore } from "../store/useAppStore";

export const AuthLayout = () => {

    const logout = useAppStore((state) => state.logout)

    const navItems = [
    { path: '/user/home', label: 'Inicio' },
    { path: '/user/prestamos', label: 'Mis Prestamos' },
    { path: '/user/multas', label: 'Mis Multas' },
  ];
  return (
    <div className="auth-layout">
      <Navbar
        logo="BooksUCM" 
        items={navItems}
        className="shadow-sm"
        isAuthenticated={true}
        onLogout={logout}
      />
      <main className="min-h-screen flex flex-col">
        <Outlet />
      </main>
      
      <footer className="bg-gray-100 py-4 ">
        <div className="container mx-auto px-4 text-center text-gray-600">
          Created by Matias V & Rafael M {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};