

export const BASE_URL=' http://localhost:4000/v1';

export const user={
    LOGIN_IN:BASE_URL+'/user/login',
    GET_STUDENT:BASE_URL+"/user/getStudent",
    SIGNUP:BASE_URL+"/user/signup",
    GET_BY_ID:BASE_URL+"/user/getUserById"
}

export const profile={
    PERSONAL_PROFILE:BASE_URL+"/profile/personalProfile/updatePerProfile",
    FAMILY_PROFILE:BASE_URL+"/profile/personalProfile/updateFamProfile",
    ACDEMACI_PROFILE:BASE_URL+"/profile/personalProfile/updateAcProfile",

}

export const operator={
    GET_ALL_CLASS:BASE_URL+"/user/getAllClass",
    MARK_ATTENDANCE:BASE_URL+"/user/markAttendece",
    CREATE_CLASS:BASE_URL+"/user/createClass",
    ENROLL_STUDENT:BASE_URL+"/user/enrollStudent",
    STUDENT_BY_CLASS:BASE_URL+"/user/getStudentByClass",   
     FILE_UPLOAD:BASE_URL+"/user/cloudUpload",
    DELETE_CLASS:BASE_URL+"/user/deleteClass",
    APPROVE_REQUEST:BASE_URL+"/user/approveRequest",
    GET_ALL_REQUEST:BASE_URL+"/user/getAllRequest",
    GET_ALL_OPERATORS:BASE_URL+"/user/getAllOperators",
    GET_APPROVE_REQUEST:BASE_URL+"/user/getApproveRequest",
    GET_PENDING_REQUEST:BASE_URL+"/user/getPendingRequest",
    GET_ALLREPORTS:BASE_URL+"/user/getAllReportsRequest"
}