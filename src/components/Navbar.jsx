import React, { use, } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './Contexts/AuthContext';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log('Sign out successful');
      }).catch((error) => {
        console.log(error)
      });
  }
  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/allProperties">All Properties</NavLink></li>
    <li><NavLink to="/addProperties">Add Properties</NavLink></li>
    <li><NavLink to="/myProperties">My Properties</NavLink></li>
    <li><NavLink to="/myRatings">My Ratings</NavLink></li>

  </>
  return (
    <div className="navbar bg-[#7b6557] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Beverly Hills</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
  <div className="dropdown dropdown-end">
    {/* Profile Image as dropdown toggle */}
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL || '/default-profile.png'} alt="Profile" />
      </div>
    </label>
    
    {/* Dropdown content */}
    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <button>{user.email}</button>
        <button>{user.displayName}</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </li>
      
    </ul>
  </div>
) : (
  <div className="flex gap-2">
    <Link to="/auth/login" className="btn">Log In</Link>
    <Link to="/auth/register" className="btn">Sign Up</Link>
  </div>
)}


      </div>
    </div>
  );
};

export default Navbar;