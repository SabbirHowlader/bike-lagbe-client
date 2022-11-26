import{ createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Dashboard from "../../Page/Dashboards/Dashboard/Dashboard";
import Home from "../../Page/Homes/Home/Home";
import Login from "../../Page/Login/Login";
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
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }

])

export default router;