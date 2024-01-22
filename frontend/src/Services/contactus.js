import toast from "react-hot-toast";
import { contactus } from "./utilities/API";
import { apiConnector } from "./utilities/apiCOnnector";

export async function createContactus(firstName,lastName,contact,message){

    
    try{

        const result=await apiConnector("POST",contactus.CREATE_CONTACT_US,{
            firstName,lastName,contact,message
        })
        
        if(result.status===200)
        toast.success("Thank you for  your valuable time we will contact you soon");
    
    }catch(e){
        console.log("ERROR AT THE CREATE CONTACT:",e);
        toast.error("Someting went wrong while submiting response please try again");
    }
}


export async function getAllCOntactus(){
    try{

        let token=localStorage.getItem("token");
        const result=await apiConnector("POST",contactus.GET_ALL_CONTACT,{token});

        return result.data;
    }catch(e){
        console.log("ERROR AT get all contacts request",e);
        toast.error("Failed to load all the contact requests");
    }
}