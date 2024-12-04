import { useEffect, useState } from "react";
import UpcomeingMovieCard from "./UpcomeingMovieCard";
import { Link } from "react-router-dom";

const UpComeingMovies = () => {

    const [upComeingData, setUpComeingData] = useState([]);
    // console.log(data);

    //handleshowALlStorybutton

    useEffect(() => {
      fetch("http://localhost:5000/allupcomeing")
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
    <div className="mt-10 lg:mt-16">
      <h2 className="font-Cinzel font-semibold  text-center text-black text-3xl md:text-4xl lg:text-5xl">
        Upcomeing Movies
      </h2>
      <p className="text-black w-1/2 mx-auto text-center mt-4">
        Discover the most anticipated upcoming movies, featuring action-packed
        adventures, thrilling plots, and captivating performances coming soon to
        theaters!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {upComeingData.slice(0,10).map((singleData) => (
          <UpcomeingMovieCard
            key={singleData.movieTitle}
            singleData={singleData}
          ></UpcomeingMovieCard>
        ))}
      </div>
      <div className="text-center mt-8 lg:mt-10">
        <Link
          to="/allupcomeing"
          className="px-5 py-3 bg-secondary rounded-md text-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default UpComeingMovies;
