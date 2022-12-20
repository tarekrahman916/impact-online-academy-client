import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

import useStudent from "../../hooks/useStudent";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isStudent, isStudentLoading] = useStudent(user?.email);
  const location = useLocation();

  if (loading || isStudentLoading) {
    return <Loader />;
  }

  if (isStudent) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default StudentRoute;
