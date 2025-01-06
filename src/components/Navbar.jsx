import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/logo-2.webp'
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

  const { user, handleSignOut } = useContext(AuthContext);
  // console.log(user)

  const email = user?.email;
  // console.log(email)

  const links = (
    <>
      <NavLink className='mr-5 py-3 flex items-center' to="/">Home</NavLink>
      <NavLink className='mr-5 py-3 flex items-center' to="/allMovies">All Movies</NavLink>
      {
        user &&  <NavLink className='mr-5 py-3 flex items-center' to="/addmovies">Add Movie</NavLink>
      }
      {
        user && <NavLink className='mr-5 py-3 flex items-center' to={`/favouriteMovies/${email}`}>My Favorites</NavLink>
      }
      <NavLink className='mr-5 py-3 flex items-center' to="/allupcomeing">UpComeing Movies</NavLink>
      <NavLink className='mr-5 py-3 flex items-center' to="/aboutus">About Us</NavLink>
      <NavLink className='mr-5 py-3 flex items-center' to="/support">Support</NavLink>
    </>
  );
  return (
    <div className="navbar bg-primary px-10 text-text fixed top-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 text-black rounded-md font-semibold space-y-8 z-50 mt-5 w-40 p-2 shadow border"
          >
            {links}
          </ul>
        </div>
        <img
          className="w-20 h-20 rounded-full invisible md:visible"
          src={Logo}
          alt="logo"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <ThemeToggle></ThemeToggle>

        {user && user.email ? (
          <div className="flex gap-5 items-center">
            <img
              className=" w-10 h-10  md:w-16 md:h-16 rounded-full"
              title={user?.displayName}
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              alt={user?.displayName}
            />
            <button
              onClick={handleSignOut}
              className="bg-[#ff7043] px-3 py-1 md:px-5 md:py-3 rounded-lg flex"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-5 items-center">
            <Link className="bg-[#ff7043] px-5 py-3 rounded-lg" to="/signup">
              Sign Up
            </Link>
            <Link className="bg-[#0097a7] px-5 py-3 rounded-lg" to="/signin">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;