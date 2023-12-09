import toast from "react-hot-toast";
import { operator, user } from "./utilities/API"
import { apiConnector } from "./utilities/apiCOnnector"

export async function getAllClass(){
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

        if(result.status===200){
            toast.success("Attendence mark succefully")
        }else   
            toast.error("Something went wrong at  attenedece");
    }catch(e){
        console.log("ERROR AT THE MARK ATTENDECE:",e)
    }
}

export async function getClassById(id){
    try{

        
        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.GET_CLASS_BY_ID,{
           id,token
        })

        if(result.status===200){
            // toast.success("Attendence mark succefully")
        }else   
            toast.error("Something went wrong at  fetching class");
    }catch(e){
        console.log("ERROR AT GET CLASS BY ID",e)
    }
}


export async function createClass(classsName, classTeacher){

    try{
        const token=localStorage.getItem('token');
        const result=await apiConnector("POST",operator.CREATE_CLASS,{
            classsName, classTeacher,token
        })


        if(result.status===200){
            toast.success("Class created succefully")
        }else if(result.status===400)   
            toast.error("This class is already present");
   
    }catch(e){
        console.log("ERROR AT CLREATE CLASS",e);
        toast.error("This class is already present");
    }
}

export async function enrollStudent(userId,classId){

    try{
        const token=localStorage.getItem('token');

        console.log("Data at enroll student:",userId,classId)
        var result=await apiConnector("POST",operator.ENROLL_STUDENT,{
            userId,classId,token
        })


        if(result.status===200){
            toast.success("Student enrolled into class succefully")
        }else   
            toast.error("Something went wrong at  enrolled student");
    }catch(e){
        console.log("ERROR AT ENROLLSTUDENT ",e)
        toast.error(e.response.data.message);
    }
}


export async function studentByClass(classId){

    try{
        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.STUDENT_BY_CLASS,{classId,token})

        console.log("Student By class",result);
        if(result.status===200){
            console.log("Student fetched succefully")
            return result.data;
        }else   
            toast.error("Something went wrong at student fetching ");
    }catch(e){
        console.log("ERROR AT THE STUDENT BY CLASS",e.message)
    }
}


export async function fileUpload(monthName,selectedFile){
    try{

        console.log("FORM DATA AT FILE UPLOAD",monthName,selectedFile);
        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.FILE_UPLOAD,{
            monthName,reports:selectedFile,token
        } , {
            'Content-Type': 'multipart/form-data',
          },{});
        console.log("RESULT AT OPERATOR",result)
        if(result.status===200){
            toast.success("Report uploaded succefully");
        }   


    }catch(e){
    console.log("ERROR AT THE FILE UPLOAD ",e)
    toast.error("Something went wrong while uploading reports");
}

}

export async function deleteClass(classId){

    try{
        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.DELETE_CLASS,{
            classId,token
        })

        if(result.status===200){
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

        if(result.status===200){
            toast.success("Status approved succefully")
        }else   
            toast.error("Something went wrong while approving status");
    }catch(e){
        console.log("EROOR AT APPROVE STUDENT",e)
    }
}

export async function getById(id){
    try{

        const token=localStorage.getItem('token');
        const result =await apiConnector("POST",user.GET_BY_ID,{
            id,token
        });

        return result.data;
    }catch(e){
        console.log("ERROR AT GET BY ID",e);
    }
}



export async function getAllRequest(){

    try{

        const token=localStorage.getItem('token');
        const result= await apiConnector("POST",operator.GET_ALL_REQUEST,{
            token
        });
        if(result.status===200){

            return result.data;
            // toast.success("Status pproved succefully")
        }else   
            toast.error("Something went wrong while approving status");


    }catch(e){
        console.log("ERROR AT GET ALL REQUEST ",e)
    }
}


export async function getAllMonthReports(){
    try{

        const token=localStorage.getItem('token');

        const result= await apiConnector("POST",operator.GET_ALLREPORTS,{
            token
        });

        return result.data;
    }catch(e){  
        console.log("ERROR AT getAllMonth Reports",e);
    }
}
export async function getApproverequest(){
    try{

        const token=localStorage.getItem('token');

        const result=await apiConnector("POST",operator.GET_APPROVE_REQUEST,{
            token
        });

        return result.data;

    }catch(e){
        console.log("ERROR AT GET APPROVE REQUEST",e);
    }

}

export async function getPendingRequest(){
    try{

        const token=localStorage.getItem('token');

        const result=await apiConnector("POST",operator.GET_PENDING_REQUEST,{
            token
        });

        return result.data;

    }catch(e){
        console.log("EROR AT GET PENDING REQUEST",e);
    }
}



// export const getAllOperators=async()=>{
export async function getAllOperators(){

    try{

        const token=localStorage.getItem('token');
        const result=await apiConnector("POST",operator.GET_ALL_OPERATORS,{
            token
        });

        console.log("DATA AT GET ALL OPERATOR ",result.data);
        return result;


    }catch(e){
        console.log("ERROR AT GET ALL OPERATORS",e);
    }

}


export async function createEvent(eventName,eventDescritio,eventDate){

    try{

        const token= localStorage.getItem('token');

        const result= await apiConnector("POST",operator.CREATE_EVENT,{
            eventName,eventDate,eventDescritio,token
        });

        if(result)
            toast.success("Event Created succefuly");
        else
            toast.error("Something went wrong while creting event");



    }catch(e){
        console.log("ERROR AT CREATE EVENT",e);
    }
}



export async function updateEvent(id,eventName,eventDate,eventDescrition){

    try{

        const token= localStorage.getItem('token');

        const result= await apiConnector("POST",operator.UPDATE_EVENT,{
           id, eventName,eventDate,eventDescrition,token
        });

        if(result)
            toast.success("Event Updated succefuly");
        else
            toast.error("Something went wrong while creting event");



    }catch(e){
        console.log("ERROR AT CREATE EVENT");
    }
}

export async function deleteEvent(id){
    try{

        const token= localStorage.getItem('token');

        const result= await apiConnector("POST",operator.DELETE_EVENT,{
           id
        });

        if(result)
            toast.success("Event deleted  succefuly");
        else
            toast.error("Something went wrong while creting event");



    }catch(e){
        console.log("ERROR AT CREATE EVENT");
    }
}