import { apiConnector } from "./utilities/apiCOnnector";
import  {
  setLoading,
  setToken,
  setUser,
} from "../slices/auth";
import toast from "react-hot-toast";
import { user } from "../Services/utilities/API";


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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

 
    let temptoken= result.data.token;

      // storing all the cokkies
      setCookie('token',temptoken,3);
      setCookie("user", JSON.stringify(result.data.user[0]),3);
      setCookie("loggedInId", result.data.user[0]._id,3);
      setCookie("role", result.data.user[0].role,3);
      
      // set token
      dispatch(setToken(result.data.token));
      // set user
      dispatch(setUser(result.data.user));

      // store token and user in localstorage

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user[0]));
      localStorage.setItem("loggedInId", result.data.user[0]._id);
      localStorage.setItem("role", result.data.user[0].role);

      console.log("Stored cookies",getCookie('token'));
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
  navigate,
  standard
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
        standard
      });

      console.log("RESULT AT SIGNUP", result);
      if (result.status === 200) {
        toast.success("Signup Succefully");
        console.log(result.data.data.rollNo);
        navigate("/login");
      } else toast.success("Something went wrong at signup");
      
    } catch (e) {
      console.log("ERROR AT SIGNUP", e.response.data.messsage);
      toast.error(e.response.data.messsage);
      console.log("ERROR AT SIGNUP", e);
      console.log(e.response.data.message)
      toast.error(e.response.data.message);
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
      navigate("/")
      // redirect to logi
    } catch (e) {
      console.log("ERROR AT LOGOUT ", e.message);
    }
  };
}
