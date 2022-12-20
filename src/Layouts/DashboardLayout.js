import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useStudent from "../hooks/useStudent";
import useUser from "../hooks/useUser";
import Header from "../Pages/Shared/Header/Header";
import {
  BookOpenIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const DashboardLayout = () => {
  const { user } = useContext(authContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isStudent] = useStudent(user?.email);
  const [isUser] = useUser(user?.email);

  return (
    <div>
      <Header />
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet />
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80   bg-gray-800 text-white">
              <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                <Link to="/dashboard">
                  <UserCircleIcon className="h-6 w-6 text-white" />
                  Profile
                </Link>
              </li>
              {isAdmin && (
                <>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/all-students">All Students</Link>
                  </li>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/">Teachers</Link>
                  </li>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/add-course">Add Course</Link>
                  </li>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/all-courses">Courses</Link>
                  </li>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/bookings">Bookings</Link>
                  </li>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/add-notice">Add Notice</Link>
                  </li>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/notice">Notice</Link>
                  </li>
                </>
              )}
              {isUser || isStudent ? (
                <>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/my-courses">
                      <BookOpenIcon className="h-6 w-6 text-white" />
                      My Courses
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              {isStudent && (
                <>
                  <li className="hover:border-l-8 rounded-md border-gray-300 border mb-3">
                    <Link to="/dashboard/announcement">
                      <InformationCircleIcon className="h-6 w-6 text-white" />
                      Announcement
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
