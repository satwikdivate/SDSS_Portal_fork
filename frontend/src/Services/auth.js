import { apiConnector } from "./utilities/apiCOnnector";
import  {
  setLoading,
  setToken,
  setUser,
} from "../slices/auth";
import toast from "react-hot-toast";
import { user } from "../Services/utilities/API";

export function login(username, password, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const result = await apiConnector("POST", user.LOGIN_IN, {
        id: username,
        password: password,
      });

      if (result.status > 200) {
        toast.error("Invalid credintial");
        return;
      }

      // set token
      dispatch(setToken(result.data.token));
      // set user
      dispatch(setUser(result.data.user));

      // store token and user in localstorage

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user[0]));
      localStorage.setItem("loggedInId", result.data.user[0]._id);
      localStorage.setItem("role", result.data.user[0].role);

      navigate("/landing");

      dispatch(setLoading(false));
    } catch (e) {
      console.log("ERROR AT AUTH FOR SIGNUP ", e.message);
      toast.error("Invalid credintial");
    }
  };
}

export  async function signUp(
  firstName,
  lastName,
  email,
  contact,
  password,
  role,
  navigate
) {
  // return async (dispatch) => {
    try {
      const result = await apiConnector("POST", user.SIGNUP, {
        firstName,
        lastName,
        contact,
        email,
        password,
        role,
      });

      console.log("RESULT AT SIGNUP", result);
      if (result.status === 200) {
        toast.success("Signup Succefully");
        navigate("/");
      } else toast.success("Something went wrong at signup");
      
    } catch (e) {
      console.log("ERROR AT SIGNUP", e.response.data.messsage);
      toast.error(e.response.data.messsage);
    }
  };
// }

export function getUser() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      //  console.log("TOKEN AT getuser",token)
      const result = await apiConnector("POST", user.GET_STUDENT, { token });
      return result.data.user;
    } catch (e) {
      console.log("ERROR AT GETSTUDENT", e.message);
    }
  };
}

export function logoutUser(navigate) {
  return async (dispatch) => {
    try {
      // set token  ans user as null in slice
      setToken(null);
      setUser(null);

      // set token and user null at localstorage
      // localStorage.setItem("token",null)
      // localStorage.setItem("user",null)
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("loggedInId");
      localStorage.removeItem("role");

      console.log("Hello");
      // redirect to login
      navigate("/login");
    } catch (e) {
      console.log("ERROR AT LOGOUT ", e.message);
    }
  };
}
