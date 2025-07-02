import { createBrowserRouter } from "react-router";
import { GuestLayout } from "./Layouts/GuestLayout";
import Home from "./Views/Home";
import Login from "./Views/auth/Login";
import About from "./Views/About";
import { AuthLayout } from "./Layouts/AuthLayout";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Booking from "./Views/Booking";
import Fines from "./Views/Fines";
import Register from "./Views/auth/Register";
import AdminLayout from "./Layouts/AdminLayout";

export const router = createBrowserRouter([
    {
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        element: (
            <ProtectedRoute>
                <AuthLayout/>
            </ProtectedRoute>
        ),
        children: [
            { path: "/user/home", element: <Home/> },
            { path: "/prestamos", element: <Booking/> },
            { path: "/multas", element: <Fines/> },
        ]
    },
    {
        element: (
            <ProtectedRoute requireAdmin>
                <AdminLayout/>
            </ProtectedRoute>
        ),
        children: [
            { path: "/admin/home", element: <Home/> },
            { path: "/admin/prestamos", },
            { path: "/admin/multas" },
            { path: "/admin/libros/nuevo" },
            { path: "/admin/prestamos/nuevo" },
            { path: "/admin/devoluciones" },
            { path: "/admin/lectores" },

        ]
    }
])