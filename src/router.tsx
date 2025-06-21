import { createBrowserRouter } from "react-router";
import { GuestLayout } from "./Layouts/GuestLayout";
import Home from "./Views/Home";
import Login from "./Views/auth/Login";
import About from "./Views/About";

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
            }
        ]
    }
])