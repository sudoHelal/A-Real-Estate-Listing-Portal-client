import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties";
import AddProperties from "../Pages/AddProperties";
import MyProperties from "../Pages/MyProperties";
import MyRatings from "../Pages/MyRatings";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'allProperties',
                Component: AllProperties
            },
            {
                path: 'addProperties',
                element: <AddProperties />
            },
            {
                path: 'myProperties',
                element: <MyProperties />
            },
            {
                path: 'myRatings',
                element: <MyRatings />
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout  />,
        children:[
            {
                index: true,
                element: <Login></Login>
            },
            {
                path: 'login',
                element: <Login></Login>
            },

            {
                path: 'register',
                element: <Register />
            }
        ]

    }
])