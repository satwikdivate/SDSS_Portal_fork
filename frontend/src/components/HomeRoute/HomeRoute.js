import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { UseSelector } from 'react-redux/es/hooks/useSelector'

function HomeRoute({children}) {
 
    const {token}=useSelector((state)=>state.auth)
    console.log("TOken at open route",token);
    // console.log(children)
    if(token==null)
        return children
    else
        return <Navigate to="/"/>
}

export default HomeRoute