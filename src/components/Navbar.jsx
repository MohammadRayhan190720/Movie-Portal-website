import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/logo-2.webp'
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

  const { user, handleSignOut } = useContext(AuthContext);
  console.log(user)

  const links = (
    <>
      <NavLink className='mr-5 py-3 flex items-center' to="/">Home</NavLink>
      <NavLink className='mr-5 py-3 flex items-center' to="/allMovies">All Movies</NavLink>
      <NavLink className='mr-5 py-3 flex items-center' to="/addmovies">Add Movie</NavLink>
      <NavLink className='mr-5 py-3 flex items-center' to='/favourites'>My Favorites</NavLink>
      <NavLink className='mr-5 py-3 flex items-center' to="/allupcomeing">UpComeing Movies</NavLink>
    </>
  );
  return (
    <div className="navbar bg-primary px-10">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          ></ul>
        </div>
        <img className="w-20 h-20 rounded-full" src={Logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user && user.email ? (
          <div className="flex gap-5 items-center">
            <img className="w-16 h-16 rounded-full"
              title={user?.displayName}
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <button onClick={handleSignOut} className="bg-[#ff7043] px-5 py-3 rounded-lg">
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