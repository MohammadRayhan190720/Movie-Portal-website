import { useLoaderData } from "react-router-dom";

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

      <div className="card lg:flex-row  max-w-5xl mx-auto shadow-xl mt-8 lg:mt-12">
        <div className="w-full">
          <img
            src={movieposter}
            alt="Shoes"
            className="w-full h-screen"
          />
        </div>
        <div className="w-full">
          <h2 className="card-title">
            Shoes!
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

  );
};

export default MovieDetails;