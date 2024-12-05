import { useLoaderData } from "react-router-dom";
import UpcomeingMovieCard from "../components/UpcomeingMovieCard";

const AllUpcomeing = () => {
  const upComeingdata = useLoaderData();
  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <h2 className="font-Cinzel font-semibold  text-center  text-3xl md:text-4xl lg:text-5xl">
        Upcomeing Movies
      </h2>
      <p className=" w-1/2 mx-auto text-center mt-4">
        Discover the most anticipated upcoming movies, featuring action-packed
        adventures, thrilling plots, and captivating performances coming soon to
        theaters!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {upComeingdata.map((singleData) => (
          <UpcomeingMovieCard
            key={singleData.movieTitle}
            singleData={singleData}
          ></UpcomeingMovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllUpcomeing;