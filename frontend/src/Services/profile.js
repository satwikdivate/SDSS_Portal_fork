import { apiConnector } from "./utilities/apiCOnnector";

import { loading, setLoading, setToken, token, setUser } from "../slices/auth";
import toast from "react-hot-toast";
import { user, profile } from "../Services/utilities/API";

export function updateAcProfile(
  schoolName,
  schoolAddress,
  classTeacher,
  medium
) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const result = await apiConnector("POST", profile.ACDEMACI_PROFILE, {
        schoolName,
        schoolAddress,
        classTeacher,
        medium,
        token,
      });

      console.log("RESULT AT ACEDEMIC PRODILE", result);
      if (result.request.status != 200)
        toast.error("Something wrong at the update Acedamic profile");
      else toast.success("Acedamic Profile updated sucessfully");
    } catch (e) {
      console.log("ERROR AT THE UPDATE ACOOUNT PROFILE", e);
      toast.error(e.response.data.message)
    }
  };
}

export function updatePersonalProfile(
  address,
  age,
  dob,
  email,
  firstName,
  lastName,
  phone,
  standard
) {
  return async (dispatch) => {
    const result = await apiConnector("POST", profile.PERSONAL_PROFILE, {
      address,
      age,
      dateOfBirth: dob,
      email,
      firstName,
      lastName,
      phone,
      standard,
    });
    console.log("RESULT AT PERSONAL PRODILE", result);
    if (result.request.status != 200)
      toast.error("Something wrong at the update Personal profile");
    else toast.success("Personal Profile updated sucessfully");
  };
}

export function updateFamilyProfile(
  fatherContact,
  fatherName,
  income,
  motherContact,
  motherName,
  occupation,
  siblingCount
) {
  return async (dispatch) => {
    try {

        const token = localStorage.getItem("token");

        const result=await apiConnector("POST",profile.FAMILY_PROFILE,{
            contact: fatherContact,
            fatherName,
            income,
            motherContact,
            motherName,
            occupation,
            siblingCount,
            token
        })

        if (result.request.status != 200)
        toast.error("Something wrong at the family  profile");
        else toast.success("Family Profile updated sucessfully");

    } catch (e) {
      console.log("ERROR AT THE UPDATEFAMMILYPROFILE:", e.message);
    }
  };
}
