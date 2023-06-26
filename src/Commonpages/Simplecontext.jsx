import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axioscall from "./Axioscall";
export const Simplecontext = createContext();

export default function Simplecontextprovider({children}){
    const navigate= useNavigate();
    const [pathvalue,setpathvalue]=useState('')
    const [userdetail,setuserdetail]=useState('')
    useEffect(() => {
        path()
      }, [])
    const path =()=>{
        // console.log("path",window.location.pathname)
        setpathvalue(window.location.pathname)
    }
    // const path = window.location.pathname
    const logouthandler = () => {
        console.log("entered logout");
        window.localStorage.removeItem("graiduser");
        return navigate("/");
      }; 
    const Check_Validation = (event,fun_name,setstate)=>{
    console.log("dataevent",event)
    const form = event.currentTarget
    event.preventDefault()
    setstate(true)
    if (form.checkValidity() === false){
        console.log("empty")
        event.stopPropagation()
        return false
    }
    else{
        fun_name()
        return true
    }
    }
    
return (
    <Simplecontext.Provider value={{
        path,pathvalue,logouthandler,Check_Validation,userdetail,setuserdetail
    }}>{children}</Simplecontext.Provider>
    )
}