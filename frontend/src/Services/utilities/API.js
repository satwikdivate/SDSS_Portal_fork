
const BASE_URL="http://localhost:4000/v1";

export const userAuthenticate={
    LOGIN:"/user/login",
    SIGNUP:"/user/signup"

}


export const attendence={
    MARK_ATTENDENCE:"/markAttendece",
    CREATE_CLASS:"/createClass",
    GET_STUDENT_BY_CLASS:"/getStudentByClass"
}

export const profile={
    PERSONAL_PROFILE:"/profile/personalProfile/updatePerProfile",
    FAMILY_PROFILE:"/profile/personalProfile/updateFamProfile",
    ACEDAMIC_PROFILE:"/personalProfile/updateAcProfile"
}