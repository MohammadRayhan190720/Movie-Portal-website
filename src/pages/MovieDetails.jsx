import { useLoaderData } from "react-router-dom";
import { MdOutlineMovieFilter } from "react-icons/md";
import { TbTimeDuration5 } from "react-icons/tb";
import { MdOutlineNewReleases } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { SlLike } from "react-icons/sl";








const MovieDetails = () => {

  const data = useLoaderData();

  const {
    movieposter,
    movietitle,
    genres,
    duration,
    ratings,
    release,
    summary,
  } = data;
  
  return (
    <div className="card lg:flex-row gap-5  justify-center  max-w-5xl mx-auto shadow-xl mt-8 lg:mt-12 p-5 font-Montserrat bg-gradient-to-b from-[#2C3E50] to-[#4A69BD] text-white">
      <div className="w-full h-screen">
        <img src={movieposter} alt="Shoes" className="w-full h-screen" />
      </div>
      <div className="w-full flex justify-center flex-col ">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-8">
          {movietitle}
        </h2>
        <p className="text-xl  font-semibold text-justify mb-5">
          {" "}
          <span className="font-bold">Summary : </span>
          {summary}
        </p>

        <div className="flex justify-between items-center space-y-4">
          {genres.map((item, inx) => (
            <p
              className="flex items-center gap-2 text-2xl border border-orange-500 rounded-lg p-1"
              key={inx}
            >
              {" "}
              <MdOutlineMovieFilter />
              {item}
            </p>
          ))}
          <p className="flex items-center gap-2 text-2xl border border-orange-500 rounded-lg p-1">
            {" "}
            <TbTimeDuration5 />
            {duration}
          </p>
        </div>
        <div className="flex items-center justify-between sapce-y-4">
          <p className="flex items-center gap-2  text-2xl border border-orange-500 rounded-lg p-1">
            {" "}
            <MdOutlineNewReleases />
            {release}
          </p>
          <p className="flex items-center gap-2  text-2xl border border-orange-500 rounded-lg p-1 mt-4">
            {" "}
            <span className="flex">
              <FcRating />
              <FcRating />
              <FcRating />
            </span>{" "}
            {ratings}
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 mt-6 lg:mt-8">
          <button className="px-5 py-3 bg-secondary flex items-center gap-3">
            {" "}
            <SlLike />
            Add To Favourite
          </button>
          <button className="px-5 py-3 bg-secondary flex items-center gap-3 ">
            <AiFillDelete />
            Delete Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;