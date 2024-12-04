import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignIn = () => {
  const { singInUser, signInWithGoogle, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.message}`,
          text: "Something went wrong!",
          footer:
            '<a href="https://www.google.com/">Why do I have this issue?</a>',
        });
      });
  };

  //handleGoogleSignIn

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
      Swal.fire({
        icon: "error",
        title: `${error.message}`,
        text: "Something went wrong!",
      });
        return;
      });
  };
  return (
    <div className="pt-10 lg:pt-16 font-Nunito bg-gradient-to-r from-background to-primary min-h-screen">
      <div>
        <Link
          className="flex gap-2 items-center text-3xl font-Cinzel text-secondary ml-6"
          to="/"
        >
          <FaArrowLeftLong />
          Back To Home
        </Link>
      </div>
      <h2 className="text-3xl lg:text-4xl font-Montserrat font-bold text-center text-text">
        Sign In Now!
      </h2>
      <div className="flex justify-center items-center text-primary mt-5 ">
        <div className="card  w-full max-w-lg shrink-0 shadow-2xl bg-[#F5F5F5]">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-secondary text-white hover:bg-accent">
                Sign In
              </button>
            </div>
            <p className="text-center font-bold">
              New in this website? ? please{" "}
              <Link className="text-red-600 underline" to="/signup">
                Sign Up
              </Link>{" "}
            </p>
            <div className="flex  text-text mt-5 items-center justify-center">
              <button
                className="px-5 py-3 rounded-sm bg-secondary hover:bg-accent "
                onClick={handleGoogleSignIn}
              >
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;