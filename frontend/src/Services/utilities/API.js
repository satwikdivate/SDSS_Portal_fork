

export const BASE_URL=' http://localhost:4000/v1';

export const user={
    LOGIN_IN:BASE_URL+'/user/login',
    GET_STUDENT:BASE_URL+"/user/getStudent"
}

export const profile={
    PERSONAL_PROFILE:BASE_URL+"/profile/personalProfile/updatePerProfile",
    FAMILY_PROFILE:BASE_URL+"/profile/personalProfile/updateFamProfile",
    ACDEMACI_PROFILE:BASE_URL+"/profile/personalProfile/updateAcProfile"
}