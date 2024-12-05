import { MdMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";

const FeaturedMovieCard = ({ movieData }) => {
  console.log(movieData);
  const { movieposter, movietitle, genres, release,_id } = movieData;
  return (
    <div>
      <div className="card bg-primary shadow-xl mt-8 lg:mt-12">
        <figure>
          <img
            src={movieposter}
            alt={movietitle}
            className="w-full h-64 "
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-text">
            {movietitle}
            <div className="badge bg-secondary text-white border-none">{release}</div>
          </h2>
          <div className="text-[#B0BEC5]">
            {genres.slice(0,1).map((item, inx) => (
              <p className="flex gap-3 items-center" key={inx}>
                {" "}
                <MdMovieFilter />
                {item}
              </p>
            ))}
          </div>

          <div className="card-actions ">
            <Link to={`/movieDetails/${_id}`} className="px-5 py-3 rounded-xl bg-accent focus:bg-secondary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovieCard;
