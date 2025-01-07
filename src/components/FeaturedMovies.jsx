import { Link } from "react-router-dom";
import FeaturedMovieCard from "./FeaturedMovieCard";
import PropTypes from "prop-types";

const FeaturedMovies = ({ moviesData }) => {
  // console.log(moviesData);
  return (
    <div className="mt-5 max-w-7xl mx-auto">
      <h2 className="font-Cinzel font-semibold  text-center text-3xl md:text-4xl">
        Featured Movies
      </h2>
      <p className=" w-1/2 mx-auto text-center mt-4">
        Discover a curated selection of captivating movies, from timeless
        classics to the latest blockbusters, tailored to inspire, entertain, and
        ignite your cinematic journey—explore your next favorite film today!
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {moviesData.map((movieData) => (
          <FeaturedMovieCard
            key={movieData._id}
            movieData={movieData}
          ></FeaturedMovieCard>
        ))}
      </div>

      <div className="text-center mt-8 lg:mt-10 text-text">
        <Link
          to="/allMovies"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:from-pink-500 hover:to-purple-500 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          🎬 See All Movies 🎥
        </Link>
      </div>
    </div>
  );
};

FeaturedMovies.propTypes = {
  moviesData: PropTypes.array.isRequired,
};

export default FeaturedMovies;
