import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import React from 'react'
import Unauthorized from "./Unauthorized";

function OpenRoute({children}) {

    const {token}=useSelector((state)=>state.auth)
    console.log("Token at open route",token);
    // console.log(children)
    if(token==null)
        return <Unauthorized/>
    else
        return <Navigate to="/home"/>
 
}

export default OpenRoute