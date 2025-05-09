import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../pages/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }

  const location = useLocation();

  return (
    <div>
      {user ? (
        children
      ) : (
        <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
      )}
    </div>
  );
};

export default PrivateRoute;
