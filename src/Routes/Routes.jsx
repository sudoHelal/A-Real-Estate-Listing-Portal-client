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
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute>
                    <AddProperties />
                </PrivateRoute>
            },
            {
                path: 'myProperties',
                element: <PrivateRoute><MyProperties /></PrivateRoute>
            },
            {
                path: 'myRatings',
                element: <PrivateRoute><MyRatings /></PrivateRoute>
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