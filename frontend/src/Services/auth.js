// import { useState } from "react";
import { apiConnector } from "./utilities/apiCOnnector";

import {loading,setLoading,setToken,token,setUser} from "../slices/auth"
import toast from "react-hot-toast";

export  function login(username,password,navigate){
    
    return async (dispatch)=>{
        
        try{
            dispatch(setLoading(true));
            
            const result= await apiConnector("POST","http://localhost:4000/v1/user/login",{
                id:username,
                password:password,
            });

            console.log("LOGIN DATA:",result);
            if(result.status>200){
                toast.error("Invalid credintial");
                return;
            }
            
            // set token
            dispatch(setToken(result.data.token))
            // set user
            dispatch(setUser(result.data.user))

            // store token and user in localstorage
            
            localStorage.setItem("token",result.data.token)
            localStorage.setItem("user",JSON.stringify(result.data.user[0]))
            
            navigate("/home")
        
            // console.log("SETTED TOKEN:",token)
            dispatch(setLoading(false));

        }catch(e){
            console.log("ERROR AT AUTH FOR SIGNUP ",e.message);
            toast.error("Invalid credintial");
        }
        }
        
        

}