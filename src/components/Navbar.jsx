import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/logo-2.webp'
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

  const { user, handleSignOut } = useContext(AuthContext);
  // console.log(user)

  const email = user?.email;
  // console.log(email)


const links = (
  <>
    <NavLink
      className={({ isActive }) =>
        `mr-3 py-3 px-2 flex items-center rounded-lg transition-all duration-300 ${
          isActive
            ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
            : "text-gray-900 lg:text-slate-200 hover:text-blue-500 hover:bg-gray-100"
        }`
      }
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        ` mr-3 py-3 px-2 flex items-center rounded-lg transition-all duration-300 ${
          isActive
            ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
            : " text-gray-900 lg:text-slate-200 hover:text-blue-500 hover:bg-gray-100"
        }`
      }
      to="/allMovies"
    >
      All Movies
    </NavLink>
    {user && (
      <NavLink
        className={({ isActive }) =>
          ` mr-3 py-3 px-2 flex items-center rounded-lg transition-all duration-300 ${
            isActive
              ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
              : "text-gray-900 lg:text-slate-200 hover:text-blue-500 hover:bg-gray-100"
          }`
        }
        to="/addmovies"
      >
        Add Movie
      </NavLink>
    )}
    {user && (
      <NavLink
        className={({ isActive }) =>
          `mr-3 py-3 px-2 flex items-center rounded-lg transition-all duration-300 ${
            isActive
              ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
              : "text-gray-900 lg:text-slate-200 hover:text-blue-500 hover:bg-gray-100"
          }`
        }
        to={`/favouriteMovies/${email}`}
      >
        My Favorites
      </NavLink>
    )}
    <NavLink
      className={({ isActive }) =>
        `mr-3 py-3 px-2 flex items-center rounded-lg transition-all duration-300 ${
          isActive
            ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
            : "text-gray-900 lg:text-slate-200 hover:text-blue-500 hover:bg-gray-100"
        }`
      }
      to="/allupcomeing"
    >
      UpComing Movies
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        ` mr-3 py-3 px-2 flex items-center rounded-lg transition-all duration-300 ${
          isActive
            ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
            : "text-gray-900 lg:text-slate-200 hover:text-blue-500 hover:bg-gray-100"
        }`
      }
      to="/aboutus"
    >
      About Us
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `mr-3 py-3 px-2 flex items-center rounded-lg transition-all duration-300 ${
          isActive
            ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
            : "text-gray-900 lg:text-slate-200 hover:text-blue-500 hover:bg-gray-100"
        }`
      }
      to="/support"
    >
      Support
    </NavLink>
  </>
);

  return (
    <div className="navbar bg-primary px-10 text-text sticky top-0 w-full z-50">
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
        {user && user.email ? (
          <div className="flex gap-5 items-center">
            <img
              className=" w-10 h-10  md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
              title={user?.displayName}
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              alt={user?.displayName}
            />
            <button
              onClick={handleSignOut}
              className="px-3 py-1 md:px-6 md:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-5 items-center justify-center">
            <Link
              className="px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
              to="/signup"
            >
              Sign Up
            </Link>
            <Link
              className="px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-teal-500 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;