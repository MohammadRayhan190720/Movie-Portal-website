import FeaturedMovieCard from "./FeaturedMovieCard";

const FeaturedMovies = ({moviesData}) => {

  console.log(moviesData)
  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h2 className="font-Cinzel font-semibold  text-center text-3xl md:text-4xl lg:text-5xl">
        Featured Movies
      </h2>
      <p className=" w-1/2 mx-auto text-center mt-4">
        Discover a curated selection of captivating movies, from timeless
        classics to the latest blockbusters, tailored to inspire, entertain, and
        ignite your cinematic journey—explore your next favorite film today!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          moviesData.map(movieData => <FeaturedMovieCard key={movieData._id} movieData={movieData}></FeaturedMovieCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedMovies;