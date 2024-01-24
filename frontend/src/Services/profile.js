import { apiConnector } from "./utilities/apiCOnnector";

import toast from "react-hot-toast";
import { profile } from "../Services/utilities/API";

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
      if (result.request.status !== 200)
        toast.error("Something wrong at the update Acedamic profile");
      else toast.success("Acedamic Profile updated sucessfully");
    } catch (e) {
      console.log("ERROR AT THE UPDATE ACOOUNT PROFILE", e);
      toast.error(e.response.data.message)
    }
  };
}

export function updatePersonalProfile(
  age,
  dob,
  grade,
  bloodGroup
) {
  return async (dispatch) => {
    let token=localStorage.getItem("token");
    const result = await apiConnector("POST", profile.PERSONAL_PROFILE, {
      age,
      dateOfBirth: dob,
      grade,
      bloodGroup,token
    });
    console.log("RESULT AT PERSONAL PRODILE", result);
    if (result.request.status !== 200)
      toast.error("Something wrong at the update Personal profile");
    else toast.success("Personal Profile updated sucessfully");
  };
}

export function updateFamilyProfile(
  fatherName,
  income,
  contact,
  motherName,
  occupation,
  siblingCount
) {
  return async (dispatch) => {
    try {

        const token = localStorage.getItem("token");

        const result=await apiConnector("POST",profile.FAMILY_PROFILE,{
            contact: contact,
            fatherName,
            income,
            motherName,
            occupation,
            siblingCount,
            token
        })

        if (result.request.status !== 200)
        toast.error("Something wrong at the family  profile");
        else toast.success("Family Profile updated sucessfully");

    } catch (e) {
      console.log("ERROR AT THE UPDATEFAMMILYPROFILE:", e.message);
    }
  };
}
