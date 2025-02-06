import { createContext,useState,useContext, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    
    useEffect(()=>{
        console.log('heheheh')
        const fetchUserProfile=async()=>{
            try{
                const response = await axios.get("http://localhost:1234/auth/profileAdmin", {
                    withCredentials: true, 
                });
                console.log(response)
                if (!response.data) {
                    throw new Error("Issue retrieving profile");
                }
                console.log("Profile", response.data);
                console.log(req.Admin)
                setUser(response.data.Admin); 
            }catch(err){
                console.error("Profile Error",err);
        }
        fetchUserProfile();
}},[]);
    console.log("User",user);
    const login=()=>{
     return 'hehehe' 
    }
    const logout=()=>{
        setUser(null);
    }

return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
}
export const useAuth=()=> useContext(AuthContext);