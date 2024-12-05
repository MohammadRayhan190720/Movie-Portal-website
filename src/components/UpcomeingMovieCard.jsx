
const UpcomeingMovieCard = ({singleData}) => {

  const { moviePoster, movieTitle, genre } = singleData;
  return (
    <div className="card card-compact bg-gradient-to-r from-background to-primary  shadow-xl mt-6 lg:mt-10 transition-transform duration-1000 ease-in-out transform hover:scale-105 opacity-90 hover:opacity-100 border">
      <figure>
        <img
          className="w-full h-56 object-cover"
          src={moviePoster}
          alt={movieTitle}
        />
      </figure>
      <div className="card-body text-text">
        <h2 className="card-title">{movieTitle}</h2>
        <div>
          <h2 className="font-Montserrat">
            <span className=" underline">Movie Types : </span>
            {genre}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UpcomeingMovieCard;