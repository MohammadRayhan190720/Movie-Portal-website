import { useEffect, useState } from "react";
import UpcomeingMovieCard from "./UpcomeingMovieCard";
import { Link } from "react-router-dom";

const UpComeingMovies = () => {
  const [upComeingData, setUpComeingData] = useState([]);
  // console.log(data);

  //handleshowALlStorybutton

  useEffect(() => {
    fetch("https://cineverse-server.vercel.app/allupcomeing")
      .then((result) => {
        if (!result.ok) {
          throw new Error("Failed to fetch data");
        }
        return result.json(); // Extract JSON data
      })
      .then((data) => {
        setUpComeingData(data); // Set the extracted data to state
      })
      .catch((error) => {
        console.log(error); // Log the error for debugging
        setUpComeingData(null); // Set state to null in case of error
      });
  }, []);

  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto ">
      <h2 className="font-Cinzel font-semibold  text-center text-3xl md:text-4xl">
        Upcomeing Movies
      </h2>
      <p className=" w-1/2 mx-auto text-center mt-4">
        Discover the most anticipated upcoming movies, featuring action-packed
        adventures, thrilling plots, and captivating performances coming soon to
        theaters!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {upComeingData.slice(0, 10).map((singleData) => (
          <UpcomeingMovieCard
            key={singleData.movieTitle}
            singleData={singleData}
          ></UpcomeingMovieCard>
        ))}
      </div>
      <div className="text-center mt-8 lg:mt-10 text-text">
        <Link
          to="/allupcomeing"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:from-pink-500 hover:to-purple-500 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          🎬 View All 🎥
        </Link>
      </div>
    </div>
  );
};

export default UpComeingMovies;
