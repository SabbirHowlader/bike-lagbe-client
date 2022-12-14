import{ createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Page/Blog/Blog";
import Dashboard from "../../Page/Dashboards/Dashboard/Dashboard";
import Home from "../../Page/Homes/Home/Home";
import Login from "../../Page/Login/Login";
import Product from "../../Page/Product/SimpleBike/Product";
import StandardBikes from "../../Page/Product/standardBike/StandardBikes";
import Register from "../../Page/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/product',
                element: <Product></Product>
            },
            {
                path:'/product/:id',
                element: <Product></Product>
            },
            {
                path: '/standardBike',
                element: <StandardBikes></StandardBikes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }

])

export default router;