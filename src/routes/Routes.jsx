import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/checkOut/Checkout";
import Bookings from "../pages/Booking/Bookings";
import PrivateRoutes from "./PrivateRoutes";
// import BookService from "../pages/bookService/BookService";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            // {
            //     path:'book/:id',
            //     loader: ({params}) => fetch(`https://car-doctor-server-xi-plum.vercel.app/services/${params.id}`),
            //     element: <BookService></BookService>
            // },
            {
                path:'checkout/:id',
                loader: ({params}) => fetch(`https://car-doctor-server-xi-plum.vercel.app/services/${params.id}`),
                element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>
            },
            {
                path: 'bookings',
                element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            }
        ]
    }
])

export default router