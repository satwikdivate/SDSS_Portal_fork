import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

import React from 'react'
import Unauthorized from "./Unauthorized";

function OpenRoute({children}) {
    const navigate=useNavigate();
    const {token}=useSelector((state)=>state.auth)
    console.log("Token at open route",token);
    // console.log(children)
    if(token===null)
        return <>{children}</>;
    else
        return Unauthorized;
 
}

export default OpenRoute