import React, { Children } from 'react'
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

function LandingRoute({Children}) {

    // const {token}=useSelector((state)=>state.auth)
    const token=localStorage.
    console.log("TOken at landing route ",token)
    const navigate=useNavigate();
        if(token===null)
            return <>{Children}</>;
        else
            return <Navigate to="/home"/>
   
   
}

export default LandingRoute