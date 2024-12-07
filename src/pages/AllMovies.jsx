import { useLoaderData } from "react-router-dom";
import FeaturedMovieCard from "../components/FeaturedMovieCard";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const allMovies = useLoaderData();
  console.log(allMovies);

  const [moviesData,setMoviesData]= useState(allMovies);

  const [search,setSearch] = useState('');
  console.log(search)

  //fetch data for search

  useEffect(() =>{
    fetch(`http://localhost:5000/movies/status?searchParams=${search}`)
    .then(res => res.json())
    .then(data =>{
      setMoviesData(data);
    })

  },[search])
  
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

      <div className=" flex items-center justify-center mt-4 text-black">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {moviesData.map((movieData) => (
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