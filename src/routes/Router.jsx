import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import AllMovies from "../pages/AllMovies";
import MyFavourites from "../pages/MyFavourites";
import AllUpcomeing from "../pages/AllUpcomeing";
import PrivateRoute from "./PrivateRoute";
import MovieDetails from "../pages/MovieDetails";
import ErrorPage from "../components/ErrorPage";
import UpdateMovie from "../pages/UpdateMovie";
import AboutUs from "../pages/AboutUs";
import Support from "../pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://cineverse-server.vercel.app/movies"),
      },
      {
        path: "/addmovies",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () =>
          fetch("https://cineverse-server.vercel.app/movies/status"),
      },
      {
        path: "/favouriteMovies/:email",
        element: (
          <PrivateRoute>
            <MyFavourites></MyFavourites>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cineverse-server.vercel.app/favouriteMovies/${params.email}`
          ),
      },
      {
        path: "/movieDetails/:id",
        element: (
            <MovieDetails></MovieDetails>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cineverse-server.vercel.app/movies/status/${params.id}`
          ),
      },
      {
        path: "/updatemovies/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateMovie></UpdateMovie>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cineverse-server.vercel.app/movies/status/${params.id}`
          ),
      },
      {
        path: "/allupcomeing",
        element: <AllUpcomeing></AllUpcomeing>,
        loader: () => fetch("https://cineverse-server.vercel.app/allupcomeing"),
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/support',
        element: <Support></Support>
        
      }
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

export default router;
