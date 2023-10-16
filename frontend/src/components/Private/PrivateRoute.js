import React from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return children;
};

export default PrivateRoute;