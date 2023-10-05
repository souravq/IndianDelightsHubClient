import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import LandingPage from "../components/LandingPage/LandingPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import ErrorPage from "../ErrorPage";
import Favorite from "../components/Favorite/Favorite";
import ContactUs from "../components/ContactUs/ContactUs";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                loader: ()=>fetch('http://localhost:5000/chef'),
                element:<LandingPage/>,
                errorElement: <ErrorPage />,
            },
            {
                path:"/favorite",
                element:<Favorite/>,
                errorElement: <ErrorPage />,
            },
            {
                path:"/chef/:id",
                loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`),
                element:<ChefDetails/>,
                errorElement: <ErrorPage />,
            },
            {
                path:"/login",
                element:<Login/>,
                errorElement: <ErrorPage />,
            },
            {
                path:"/register",
                element:<Register/>,
                errorElement: <ErrorPage />,
            },
            {
                path:"/contactus",
                element:<ContactUs/>,
                errorElement: <ErrorPage />,
            },
            {
                path:"/blog",
                element:<Blog/>,
                errorElement: <ErrorPage />,
            },

        ]
    }
])
export default router;