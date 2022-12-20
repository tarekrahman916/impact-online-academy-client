import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "./Header.css";

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
        <Link className="font-bold" to="/notice">
          Notice
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/contact">
          Contact Us
        </Link>
      </li>
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
    <div className="shadow-lg">
      <div className="navbar   max-w-screen-xl mx-auto">
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
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {/* <img src="https://placeimg.com/80/80/people" /> */}
                  <UserCircleIcon class="h-full w-full text-gray-5" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="bg-[#19223C] mt-3 py-6 px-2 w-48  shadow menu menu-compact dropdown-content text-white rounded-box "
              >
                <div className="text-center mb-4">
                  <div className="flex justify-center">
                    <UserCircleIcon class="h-full w-12  text-gray-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {user?.displayName}
                  </h3>

                  <hr className="border-b-4 rounded-md" />
                </div>

                {user?.uid && (
                  <li>
                    <Link
                      className="hover:border-l-8 border mb-4 "
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    className="hover:border-l-8 border"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn  primaryBtn  mr-4">
              Login
            </Link>
          )}

          {user?.uid && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
