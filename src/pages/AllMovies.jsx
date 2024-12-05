import { useLoaderData } from "react-router-dom";
import FeaturedMovieCard from "../components/FeaturedMovieCard";

const AllMovies = () => {
  const allMovies = useLoaderData();
  console.log(allMovies);
  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h2 className="font-Cinzel font-semibold  text-center text-3xl md:text-4xl lg:text-5xl">
        Explore CineVerse: A World of Movies
      </h2>
      <p className=" w-4/6 mx-auto text-center mt-4">
        Discover your favorite films from various genres, explore detailed movie
        insights, and dive into captivating stories crafted for all cinephiles.
        Your ultimate movie portal awaits exploration!
      </p>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {allMovies.map((movieData) => (
          <FeaturedMovieCard
            key={movieData._id}
            movieData={movieData}
          ></FeaturedMovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;