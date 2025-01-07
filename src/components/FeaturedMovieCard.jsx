import { MdMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";
import { GiDuration } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import PropTypes from "prop-types"; 



const FeaturedMovieCard = ({ movieData }) => {
  // console.log(movieData);
  const { movieposter, movietitle, genres, release,_id,duration,ratings } = movieData;
  return (
    <div>
      <div className="card bg-primary shadow-xl mt-8 lg:mt-12">
        <figure>
          <img src={movieposter} alt={movietitle} className="w-full h-64 " />
        </figure>
        <div className="card-body space-y-3 font-Montserrat ">
          <div className="flex justify-between items-center">
            <h2 title={movietitle} className="text-lg font-bold text-text">
              {movietitle.slice(0, 13)}
              {/* <div className="badge bg-secondary text-white border-none ml-2">
                {release}
              </div> */}
            </h2>
            <div className="">
              <p className="text-[#B0BEC5]">
                {" "}
                <span className="text-text flex items-center gap-2">
                  <GiDuration />
                  {duration} m
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="text-[#B0BEC5] flex justify-between items-center">
            <div>
              {genres.slice(0, 1).map((item, inx) => (
                <p className="flex gap-3 items-center" key={inx}>
                  {" "}
                  <MdMovieFilter />
                  {item}
                </p>
              ))}
            </div>
            <div>
              <p className="flex items-center gap-2">
                {" "}
                <span className="text-text">
                  <FcRating />
                </span>{" "}
                {ratings}
              </p>
            </div>
          </div>

          <div className="card-actions">
            <Link
              to={`/movieDetails/${_id}`}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedMovieCard.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default FeaturedMovieCard;
