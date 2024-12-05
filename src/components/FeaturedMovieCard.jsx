
const FeaturedMovieCard = ({movieData}) => {
  console.log(movieData)
  const { movieposter, movietitle, genres, ratings, release ,duration} = movieData;
  return (
    <div className="card  shadow-xl">
      <figure>
        <img
          src={movieposter}
          alt={movietitle}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {movietitle}
          <div className="badge badge-secondary">{release}</div>
        </h2>
        <div>
          {
            genres.map((item,inx)=><li key={inx}>{item}</li>)
          }
        </div>
        <div>
          <p>Ratings : {ratings}</p>
          <p>Duration : {duration}</p>
        </div>

        <div className="card-actions ">
         <button className="px-5 py-3 rounded-xl bg-secondary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovieCard;