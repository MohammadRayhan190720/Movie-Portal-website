import { useContext, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddMovie = () => {

  const {user} = useContext(AuthContext);
  console.log(user);

    const [selectedGenres, setSelectedGenres] = useState([]);
    const[releaseYear,setReleaseYear] = useState("");
    const[rating,setRating] = useState();
    const [email, setEmail] = useState("");


    const handleGenreChange = (event) => {
      const options = event.target.selectedOptions; // Get selected options
      const selectedValues = Array.from(options).map((option) => option.value); // Create an array of selected values
      setSelectedGenres(selectedValues); // Update state with selected genres
    };

    const handleYearChange = event =>{
      setReleaseYear(event.target.value)

    }

    //handlerating

    const handleRatingChange = (rate) =>{
      setRating(rate)
    }

    //default email
      useEffect(() => {
        if (user) {
          setEmail(user.email ||  ""); // Prefill when user updates
        }
      }, [user]);

        const handleInputChange = (e) => {
          setEmail(e.target.value); // Update state as user types
        };


  const handleAddMovie = (e) => {
    e.preventDefault();

    const form = e.target;
    

    const movieposter = form.movieposter.value;
    const movietitle = form.movietitle.value;
    if(movietitle.length < 2){
      Swal.fire({
        icon: "error",
        title: "Invalid Movie Title",
        text: "Title must be at least 2 characters",
      });
      return;
    }
    const genres = selectedGenres;
    const release = releaseYear;
    const ratings = rating;

    if(ratings < 0){
            Swal.fire({
              icon: "error",
              title: "Invalid",
              text: "Please Rating the Movie",
            });
            return;

    }
    const summary = form.summary.value;

    if(summary.length < 10){
            Swal.fire({
              icon: "error",
              title: "Invalid Movie Summary",
              text: "Summary must be at least 10 characters",
            });
            return;
    }

    console.log(movietitle,movieposter,genres,release,ratings,summary);



  };
  return (
    <div className="mt-6 lg:mt-10">
      <div className="hero  max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-background to-primary">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Cinzel">
              Add Movie
            </h1>
            <p className="py-4 w-4/5 mx-auto text-xl">
              Add Your Favorite Movies: Easily submit movie details to
              CineVerse, helping others discover new films, share your
              recommendations, and contribute to an ever-growing collection of
              cinematic experiences.
            </p>
          </div>
          <div className="card w-full shrink-0">
            <form
              onSubmit={handleAddMovie}
              className="card-body space-y-3 text-background"
            >
              <div className="lg:flex gap-5">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-text">Movie Poster</span>
                  </label>
                  <input
                    type="url"
                    name="movieposter"
                    placeholder="Enter Movie Poster URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-text">Movie Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Movie Title"
                    name="movietitle"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-text">Genre</span>
                  </label>
                  <select
                    className="select  w-full input "
                    multiple
                    value={selectedGenres}
                    onChange={handleGenreChange}
                  >
                    <option disabled selected>
                      Types of Movies
                    </option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horor">Horor</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="action">Action</option>
                    <option value="thriller">Thriller</option>
                    <option value="adventure">Adventure</option>
                  </select>
                </div>
              </div>
              <div className="lg:flex gap-5">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-text">Email</span>
                  </label>
                  <input
                    type="email"
                    onChange={handleInputChange}
                    value={user?.email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-text">Duration</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Movie Duration"
                    name="duration"
                    className="input input-bordered"
                    min="60"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex lg:items-center  lg:justify-center  gap-5">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-text">Release Year</span>
                  </label>
                  <select
                    className="select  w-full input "
                    value={releaseYear}
                    onChange={handleYearChange}
                    required
                  >
                    <option disabled selected>
                      Selected Release Year
                    </option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>
                <div className=" form-control flex  justify-center    lg:w-1/2  ">
                  <label className="label">
                    <span className="label-text text-text">Ratings</span>
                  </label>
                  <div
                    style={{
                      direction: "ltr",
                      fontFamily: "sans-serif",
                      touchAction: "none",
                      border: "1px solid white",
                    }}
                  >
                    <Rating
                      onClick={handleRatingChange}
                      showTooltip
                      tooltipArray={[
                        "Terrible",
                        "Bad",
                        "Average",
                        "Great",
                        "Prefect",
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-text">Movie Summary</span>
                  </label>
                  <textarea
                    placeholder="Enter Movie Summary"
                    name="summary"
                    required
                    className="textarea textarea-bordered textarea-lg w-full lg:max-w-7xl"
                  ></textarea>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-secondary text-text hover:text-background text-xl font-semibold">
                  Add Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
