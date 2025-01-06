import { useEffect, useState } from "react";
import UpcomeingMovieCard from "./UpcomeingMovieCard";
import FeaturedMovieCard from "./FeaturedMovieCard";

const Trending = () => {

  const [movies,setmovies] = useState([]);
  console.log(movies)

  useEffect(() =>{
    fetch("https://cineverse-server.vercel.app/movies/status")
    .then(res => res.json())
    .then(data =>{
    const actionMovies = data.filter((innerArray) => {
      return innerArray.genres.includes("action")
  });
    setmovies(actionMovies);
  });
}, [])


  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h2 className="font-Cinzel font-semibold  text-center text-3xl md:text-4xl lg:text-5xl">
        Tranding Now
      </h2>
      <p className=" w-1/2 mx-auto text-center mt-4">
        Explore the hottest movies trending now, featuring the most viewed and
        highly rated films. Stay updated with the latest blockbusters,
        critically acclaimed hits, and fan favorites all in one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movieData) => (
          <FeaturedMovieCard
            key={movieData._id}
            movieData={movieData}
          ></FeaturedMovieCard>
        ))}
      </div>
    </div>
  );
};

export default Trending;