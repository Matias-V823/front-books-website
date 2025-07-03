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
import NewBook from "./Views/admin/NewBook";
import NewLoan from "./Views/admin/NewLoan";
import ReturnBook from "./Views/admin/ReturnBook";
import LectorAdmin from "./Views/admin/LectorAdmin";

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
            { path: "/user/prestamos", element: <Booking/> },
            { path: "/user/multas", element: <Fines/> },
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
            { path: "/admin/prestamos", element: <Booking/> },
            { path: "/admin/multas" , element: <Fines/>},
            { path: "/admin/libros/nuevo", element: <NewBook/> },
            { path: "/admin/prestamos/nuevo" , element: <NewLoan/>},
            { path: "/admin/devoluciones" , element: <ReturnBook/>},
            { path: "/admin/lectores" , element: <LectorAdmin/>},

        ]
    }
])