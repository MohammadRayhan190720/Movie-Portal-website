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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/movies"),
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
        loader: () => fetch("http://localhost:5000/movies/status"),
      },
      {
        path: "/favourites",
        element: (
          <PrivateRoute>
            <MyFavourites></MyFavourites>
          </PrivateRoute>),
          loader: () =>fetch('http://localhost:5000/favouriteMovies')  
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movies/status/${params.id}`),
      },
      {
        path: "/updatemovies/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateMovie></UpdateMovie>{" "}
          </PrivateRoute>
        ),
        loader: ({params}) =>fetch(`http://localhost:5000/movies/status/${params.id}`),
      },
      {
        path: "/allupcomeing",
        element: <AllUpcomeing></AllUpcomeing>,
        loader: () => fetch("http://localhost:5000/allupcomeing"),
      },
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
