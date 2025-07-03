import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { useAppStore } from "../store/useAppStore";

const AdminLayout = () => {
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);

  const navLector = [
    { path: "/admin/prestamos", label: "Mis Prestamos" },
    { path: "/admin/multas", label: "Mis Multas" },
  ];

  const navAdmin = [
    { path: "/admin/home", label: "Inicio" },
    { path: "/admin/libros/nuevo", label: "Nuevo Libro" },
    { path: "/admin/prestamos/nuevo", label: "Nuevo Prestamo" },
    { path: "/admin/devoluciones", label: "Devolución" },
    { path: "/admin/lectores", label: "Lector" },
  ];

  let navItems = navAdmin;
  if (user?.roles.includes("ADMIN") && user.roles.includes("LECTOR")) {
    navItems = [...navAdmin, ...navLector];
  }

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
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          Created by Matias V & Rafael M {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
