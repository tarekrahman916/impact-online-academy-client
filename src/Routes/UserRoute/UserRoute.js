import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

import useUser from "../../hooks/useUser";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isUser, isUserLoading] = useUser(user?.email);
  const location = useLocation();

  if (loading || isUserLoading) {
    return <Loader />;
  }

  if (isUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default UserRoute;
