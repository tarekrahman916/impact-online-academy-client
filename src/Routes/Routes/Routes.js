import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Contact from "../../Pages/Contact/Contact";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import AddCourse from "../../Pages/Dashboard/AddCourse/AddCourse";
import AllCourses from "../../Pages/Dashboard/AllCourses/AllCourses";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-courses",
        element: (
          <PrivateRoute>
            <AllCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-course",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
