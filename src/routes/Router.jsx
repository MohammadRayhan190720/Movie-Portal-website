import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import AllMovies from "../pages/AllMovies";
import MyFavourites from "../pages/MyFavourites";
import UpComeingMovies from "../components/UpComeingMovies";
import AllUpcomeing from "../pages/AllUpcomeing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/upcomeingmovies"),
      },
      {
        path: "/addmovies",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/favourites",
        element: <MyFavourites></MyFavourites>,
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
