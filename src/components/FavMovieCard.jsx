import { FcRating } from "react-icons/fc";
import { GiDuration } from "react-icons/gi";
import { MdMovieFilter } from "react-icons/md";
import { IoIosHeartDislike } from "react-icons/io";
import Swal from "sweetalert2";
import { useState } from "react";

const FavMovieCard = ({ movieData, favouriteMovie, setFavouriteMovie }) => {
  const { movieposter, movietitle, genres, release, _id, duration, ratings } =
    movieData;


  const handleFavDelete = (id) => {
    console.log("fav deleted id", id);

    //delete form database

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/favouriteMovies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted From Favourite List",
                text: "Movie has been deleted form Favourite List",
                icon: "success",
              });

              const remainingMovies = favouriteMovie.filter(movie => movie._id !== id);

              setFavouriteMovie(remainingMovies);
            }
          
          });
      }
    });
  };

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
              <div className="badge bg-secondary text-white border-none ml-2">
                {release}
              </div>
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

          <div className="card-actions ">
            <button
              onClick={() => {
                handleFavDelete(_id);
              }}
              className="px-5 py-3 rounded-xl bg-secondary focus:bg-accent flex items-center gap-3"
            >
              <IoIosHeartDislike />
              Delete Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavMovieCard;
