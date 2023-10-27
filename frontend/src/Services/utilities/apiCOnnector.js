import axios from "axios"

// creating axios instance
export const axiosInstance=axios.create({});

export const apiConnector=(method,url,bodyData,header,param)=>{


    return axiosInstance({
        method:method,
        url:`${url}`,
        data:bodyData ?bodyData :null,
        headers:header?header:null,
        params:param?param:null
    })
}