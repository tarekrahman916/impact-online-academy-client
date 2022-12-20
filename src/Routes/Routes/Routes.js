import { createBrowserRouter } from "react-router-dom";
import CoursesApply from "../../components/CoursesApply/CoursesApply";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import AddCourse from "../../Pages/Dashboard/AddCourse/AddCourse";
import AddNotice from "../../Pages/Dashboard/AddNotice/AddNotice";
import AllCourses from "../../Pages/Dashboard/AllCourses/AllCourses";
import AllNotice from "../../Pages/Dashboard/AllNotice/AllNotice";
import AllStudents from "../../Pages/Dashboard/AllStudents/AllStudents";
import Announcement from "../../Pages/Dashboard/Announcement/Announcement";
import Bookings from "../../Pages/Dashboard/Bookings/Bookings";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyCourses from "../../Pages/Dashboard/MyCourses/MyCourses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Notice from "../../Pages/Notice/Notice";
import NoticeDetails from "../../Pages/Notice/NoticeDetails";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import StudentRoute from "../StudentRoute/StudentRoute";

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
          fetch(
            `https://impact-online-academy-server.vercel.app/courses/${params.id}`
          ),
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
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/notice/:id",
        element: <NoticeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://impact-online-academy-server.vercel.app/notices/${params.id}`
          ),
      },
      {
        path: "/courses_apply/:id",
        element: (
          <PrivateRoute>
            <CoursesApply />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://impact-online-academy-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
          <AdminRoute>
            <AllCourses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-course",
        element: (
          <AdminRoute>
            <AddCourse />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-courses",
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/bookings",
        element: (
          <AdminRoute>
            <Bookings />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/notice",
        element: (
          <AdminRoute>
            <AllNotice />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-notice",
        element: (
          <AdminRoute>
            <AddNotice />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-students",
        element: (
          <AdminRoute>
            <AllStudents />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/announcement",
        element: (
          <StudentRoute>
            <Announcement />
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
