import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineMovieFilter } from "react-icons/md";
import { TbTimeDuration5 } from "react-icons/tb";
import { MdOutlineNewReleases } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";


const MovieDetails = () => {
  const navigate = useNavigate();

  const data = useLoaderData();

  const {user} = useContext(AuthContext);

  const email = user?.email;
  console.log(email);
const userWithEmail = {...data,email};


  const {
    _id,
    movieposter,
    movietitle,
    genres,
    duration,
    ratings,
    release,
    summary,
  } = data;

  const handleMovieDelete = (id) => {
    console.log(id);

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
        fetch(`http://localhost:5000/movies/status/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Movie has been deleted",
                icon: "success",
              });
              navigate("/allMovies");
              return;
            }
          });
      }
    });
  };

  //add to favourite

  const handleAddFavourite = (data) => {
    console.log(data);

    fetch("http://localhost:5000/favouriteMovies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Added",
            text: "Movie Added to Favourite List",
            icon: "success",
          });
        }
      });
  };

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
          <button
            onClick={() => {
              handleAddFavourite(userWithEmail);
            }}
            className="px-5 py-3 bg-accent focus:bg-orange-400 flex items-center gap-3"
          >
            {" "}
            <SlLike />
            Add To Favourite
          </button>
          <Link
            to={`/updatemovies/${_id}`}
            className="px-5 py-3 bg-green-600 flex items-center gap-3 focus:bg-green-950"
          >
            {" "}
            <CiEdit />
            Update Movie
          </Link>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => {
              handleMovieDelete(_id);
            }}
            className="px-5 py-3 bg-secondary flex items-center gap-3 focus:bg-accent "
          >
            <AiFillDelete />
            Delete Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
