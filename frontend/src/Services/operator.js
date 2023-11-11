import toast from "react-hot-toast";
import { operator } from "./utilities/API"
import { apiConnector } from "./utilities/apiCOnnector"

export   async function getAllClass(){
    try{
        const token=localStorage.getItem('token');
        const result =await apiConnector("POST",operator.GET_ALL_CLASS,{token});

        return result.data;

    }catch(e){
    console.log("ERROR AT THE GETCLASS",e)
}

}


export async function markAttendence(attendenceId,userId,data,status){

    try{

        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.MARK_ATTENDANCE,{
            attendenceId,userId,data,status,token
        })

        if(result.status==200){
            toast.success("Attendence mark succefully")
        }else   
            toast.error("Something went wrong at  attenedece");
    }catch(e){
        console.log("ERROR AT THE MARK ATTENDECE:",e)
    }
}

export async function createClass(classsName, classTeacher){

    try{
        const token=localStorage.getItem('token');
        const result=await apiConnector("POST",operator.CREATE_CLASS,{
            classsName, classTeacher,token
        })


        if(result.status==200){
            toast.success("Class created succefully")
        }else   
            toast.error("Something went wrong at  create class");
   
    }catch(e){
        console.log("ERROR AT CLREATE CLASS",e);
    }
}

export async function enrollStudent(userId,classId){

    try{
        const token=localStorage.getItem('token');

        const result=await apiConnector("POST",operator.ENROLL_STUDENT,{
            userId,classId,token
        })


        if(result.status==200){
            toast.success("Student enrolled into class succefully")
        }else   
            toast.error("Something went wrong at  enrolled student");
    }catch(e){
        console.log("ERROR AT ENROLLSTUDENT ",e)
    }
}


export async function studentByClass(classId){

    try{
        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.STUDENT_BY_CLASS,{classId,token})


        if(result.status==200){
            toast.success("Student fetched succefully")
        }else   
            toast.error("Something went wrong at student fetching ");
    }catch(e){
        console.log("ERROR AT THE STUDENT BY CLASS",e.message)
    }
}


export async function fileUpload(monthName){
    try{


    }catch(e){
    console.log("ERROR AT THE FILE UPLOAD ",e)
}

}

export async function deleteClass(classId){

    try{
        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.DELETE_CLASS,{
            classId,token
        })

        if(result.status==200){
            toast.success("Class deleted succefully")
        }else   
            toast.error("Something went wrong at delete class");

    }catch(e){
        console.log("ERROR AT DELETE CLASS",e)
    }
}


export async function approveRequest(userId,adminId,reqId,status,role){

    try{

        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.APPROVE_REQUEST,{
            userId,adminId,reqId,status,role,token
        })

        if(result.status==200){
            toast.success("Status approved succefully")
        }else   
            toast.error("Something went wrong while approving status");
    }catch(e){
        console.log("EROOR AT APPROVE STUDENT",e)
    }
}

export async function getAllRequest(){

    try{

        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.GET_ALL_REQUEST,{
            token
        });
        if(result.status==200){

            return result.data;
            // toast.success("Status pproved succefully")
        }else   
            toast.error("Something went wrong while approving status");


    }catch(e){
        console.log("ERROR AT GET ALL REQUEST ",e)
    }
}