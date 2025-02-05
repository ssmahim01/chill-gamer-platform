import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home.jsx";
import AllReviews from "../pages/AllReviews.jsx";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ReviewDetails from "../pages/ReviewDetails";
import UpdateReview from "../pages/UpdateReview";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs.jsx";
import ConnectUs from "../pages/ConnectUs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/reviews",
                element: <AllReviews></AllReviews>
            },
            {
                path: "/review/:id",
                loader: ({params}) => fetch(`https://chill-gamer-server-two.vercel.app/reviews/${params.id}`),
                element: <ReviewDetails></ReviewDetails>
            },
            {
                path: "/addReview",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: "/myReviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/myWatchlist",
                element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>
            },
            {
                path: "/updateReview/:id",
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({params}) => fetch(`https://chill-gamer-server-two.vercel.app/reviews/${params.id}`)
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/connect-us",
                element: <ConnectUs />
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ],
    },
]);

export default router;