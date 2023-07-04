import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axioscall from "./Axioscall";
import jwt_decode from "jwt-decode";
import Filestack from "./Filestack";
export const Simplecontext = createContext();


export default function Simplecontextprovider({children}){
    const navigate= useNavigate();
    const [pathvalue,setpathvalue]=useState('')
    const [userdetail,setuserdetail]=useState('')
    const [employeedata,setemployeedata]=useState('')
    // console.log("window.localStorage.getItem('craig-token')",window.localStorage.getItem('craig-token'))
    console.log("userdetails",userdetail)
    useEffect(() => {
        path()
        getUser()
      }, [])
    const path =()=>{
        // console.log("path",window.location.pathname)
        setpathvalue(window.location.pathname)
    }
    // const path = window.location.pathname
    const logouthandler = () => {
        // console.log("entered logout");
        window.localStorage.removeItem("graiduser");
        return navigate("/");
      }; 
    const Check_Validation = (event,fun_name,setstate)=>{
    // console.log("dataevent",event)
    const form = event.currentTarget
    event.preventDefault();
    setstate(true)
    if (form.checkValidity() === false){
        // console.log("empty")
        event.stopPropagation()
        return false
    }
    else{
        fun_name()
        return true
    }
    }
    async function getUser (){  
        if (window.localStorage.getItem('craig-token')){
            let datalist;
            var decoded = jwt_decode(window.localStorage.getItem('craig-token'))
            if(decoded.id){
                console.log("decodeid",decoded.id)
                datalist = decoded.id
            }
            if(window.localStorage.getItem("graiduser")==="employer"){
                let data = await Axioscall("get","company",{userid:datalist})
                // console.log("data",data)
                if (data.status===200){
                  console.log("datadocs",data.data.data)
                  if(data.data.data){
                    setuserdetail(data.data.data)
                    setemployeedata(data.data.data)
                  }else{
                    // window.localStorage.setItem("graiduser", "employee");
                    // navigate('/employeeregister')
                  }
                }
            }
            }else if(window.localStorage.getItem("graiduser")==="employee"){
                let data = await Axioscall("get","company",{id:datalist})
                // console.log("data",data)
                if (data.status===200){
                  console.log("datadocs",data.data.data)
                  if(data.data.data){
                    setuserdetail(data.data.data)
                    setemployeedata(data.data.data)
                  }else{
                    // window.localStorage.setItem("graiduser", "employee");
                    // navigate('/employeeregister')
                  }
                }
            }
          //  console.log("userdatain context",userdetail)
    }
    async function Filestackhandler(ratio,setvalue,value,keypair){
      console.log("keypair",keypair)
      let data =await Filestack(ratio)

      console.log("datafilestack",data)
      if (data){
        setvalue({...value,[keypair]:data})
      }
      
    }
return (
    <Simplecontext.Provider value={{
        path,pathvalue,logouthandler,Check_Validation,userdetail,setuserdetail,employeedata,setemployeedata,getUser,Filestackhandler
    }}>{children}</Simplecontext.Provider>
    )
}