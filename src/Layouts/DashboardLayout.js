import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
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
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">Profile</Link>
              </li>
              <li>
                <Link to="/">All Students</Link>
              </li>
              <li>
                <Link to="/">Teachers</Link>
              </li>
              <li>
                <Link to="/dashboard/add-course">Add Course</Link>
              </li>
              <li>
                <Link to="/dashboard/all-courses">Courses</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
