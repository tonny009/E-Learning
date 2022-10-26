import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Profile from '../Profile/Profile'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Faq from "../Pages/FAQ/Faq";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/new-courses')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            },
            {
                path: 'courses',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/new-courses')
            },
            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },

            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '*',
                element: <div className='not-found w-75 h-25 container'>Sorry ! This page is not found(404)</div>
            }

        ]
    }
])