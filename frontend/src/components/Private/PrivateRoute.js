import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return children;
};

export default PrivateRoute;
