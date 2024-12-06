import { useLoaderData } from "react-router-dom";
import FavMovieCard from "../components/FavMovieCard";
import { useState } from "react";

const MyFavourites = () => {

  const favMoviesData = useLoaderData();

  const [favouriteMovie, setFavouriteMovie] = useState(favMoviesData);

  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h2 className="font-Cinzel font-semibold  text-center text-3xl md:text-4xl lg:text-5xl">
        Favourite Movies
      </h2>
      <p className=" w-1/2 mx-auto text-center mt-4">
        Uncover Your Top Picks: A Personalized Hub for Your Most-Loved Films,
        Where Favorites Come Alive with Details, Ratings, and Memorable Moments
        That Keep You Coming Back for More!
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favouriteMovie.map((movieData) => (
          <FavMovieCard
            key={movieData._id}
            movieData={movieData}
            setFavouriteMovie={setFavouriteMovie}
            favouriteMovie={favouriteMovie}
            mov
          ></FavMovieCard>
        ))}
      </div>
    </div>
  );
};

export default MyFavourites;