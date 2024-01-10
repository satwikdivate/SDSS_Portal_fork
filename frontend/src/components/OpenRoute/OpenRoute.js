import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import React, { useEffect } from 'react'
import Unauthorized from "./Unauthorized";

function OpenRoute({ children }) {
    // const navigate=useNavigate();

    const { token } = useSelector((state) => state.auth)
    console.log("TOken at open route",token)
    // localStorage token=localStorage.getItem
    const navigate=useNavigate();
   useEffect(()=>{

       
            console.log("Token at open route", token);
            // console.log(children)
        
            if (token == null)
                return navigate("/login")
            else
                return navigate("/landing");
   },[])


   

}

export default OpenRoute