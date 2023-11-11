import { createSlice } from "@reduxjs/toolkit"

const initialState={
    signupData: null,
    loading: false,
    // token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")):null,
    // user:localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")):null,
    token:null,
    user:null,
} 

const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignupData(state, value) {
            state.signupData = value.payload;
          },
          setLoading(state, value) {
            state.loading = value.payload;
          },
        setToken(state,value){
            state.token=value.payload
        },

        setUser(state,value){
            state.user=value.payload
        }
        ,
        gettoken(state,value){
            return state.token;

        }
    }
})

export const{setToken,setLoading,setSignupData,setUser,gettoken}=authSlice.actions
export default authSlice.reducer;