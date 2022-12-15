import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const menuData = (
    <>
      <li>
        <Link className="font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/courses">
          Courses
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/">
          About Us
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/contact">
          Contact Us
        </Link>
      </li>
      {user?.uid && (
        <li>
          <Link className="font-bold" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar my-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
          >
            {menuData}
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center ">
            <img src={logo} alt="" className="w-20 h-full" />
            <div>
              <h2 className="lg:text-3xl text-2xl font-semibold ">
                Impact Academy
              </h2>
              <h4 className="font-bold hidden lg:block">
                Learn & Grow Your Future
              </h4>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">{menuData}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <button onClick={handleSignOut} className="btn btn-primary  mr-4">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn e btn-primary  mr-4">
            Login
          </Link>
        )}
        {/* <Link className="btn btn-outline btn-primary">Get started</Link> */}
        <label
          htmlFor="dashboard-drawer"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
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
        </label>
      </div>
    </div>
  );
};

export default Header;
